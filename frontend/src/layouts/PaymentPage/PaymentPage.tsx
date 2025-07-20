import { useAuth0 } from "@auth0/auth0-react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaymentInfoRequest from "../../models/PaymentInfoRequest";
import { SpinnerLoading } from "../Utils/SpinnerLoading";

export const PaymentPage = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [httpError, setHttpError] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [fees, setFees] = useState(0);
  const [loadingFees, setLoadingFees] = useState(true);

  const elements = useElements();
  const stripe = useStripe();

  useEffect(() => {
    const fetchFees = async () => {
      if (isAuthenticated && user) {
        try {
          const accessToken = await getAccessTokenSilently();
          const url = `${process.env.REACT_APP_API}/payments/search/findByUserEmail?userEmail=${user.email}`;

          const requestOptions = {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          };

          const paymentResponse = await fetch(url, requestOptions);
          if (!paymentResponse.ok) {
            throw new Error("Something went wrong!");
          }

          const paymentResponseJson = await paymentResponse.json();
          setFees(paymentResponseJson.amount);
        } catch (error: any) {
          setHttpError(error.message);
        } finally {
          setLoadingFees(false);
        }
      }
    };

    fetchFees();
  }, [isAuthenticated, user, getAccessTokenSilently]);

  async function checkout() {
    if (!stripe || !elements || !elements.getElement(CardElement)) return;

    setSubmitDisabled(true);

    try {
      const accessToken = await getAccessTokenSilently();
      const paymentInfo = new PaymentInfoRequest(
          Math.round(fees * 100),
          "USD",
          user?.email
      );

      const url = `${process.env.REACT_APP_API}/payment/secure/payment-intent`;
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentInfo),
      };

      const stripeResponse = await fetch(url, requestOptions);
      if (!stripeResponse.ok) throw new Error("Something went wrong!");

      const stripeResponseJson = await stripeResponse.json();

      const result = await stripe.confirmCardPayment(
          stripeResponseJson.client_secret,
          {
            payment_method: {
              card: elements.getElement(CardElement)!,
              billing_details: {
                email: user?.email,
              },
            },
          },
          { handleActions: false }
      );

      if (result.error) {
        alert("There was an error");
        setSubmitDisabled(false);
      } else {
        const completeUrl = `${process.env.REACT_APP_API}/payment/secure/payment-complete`;
        const completeOptions = {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        };

        const completeResponse = await fetch(completeUrl, completeOptions);
        if (!completeResponse.ok) throw new Error("Something went wrong!");

        setFees(0);
        setSubmitDisabled(false);
      }
    } catch (error) {
      setHttpError(true);
      setSubmitDisabled(false);
    }
  }

  if (loadingFees) return <SpinnerLoading />;

  if (httpError) {
    return (
        <div className="container mt-5 mb-5">
          <div className="p-3 text-danger">
            <strong>Error:</strong>
            <span className="fw-light"> {httpError.toString()}</span>
          </div>
        </div>
    );
  }

  return (
      <div className="container">
        {fees > 0 ? (
            <div className="card mt-3">
              <h5 className="card-header">
                Fees pending: <span className="text-danger">${fees}</span>
              </h5>
              <div className="card-body">
                <h5 className="card-title mb-3">Credit Card</h5>
                <CardElement id="card-element" />
                <button
                    disabled={submitDisabled}
                    type="button"
                    className="btn btn-md main-color text-white mt-3"
                    onClick={checkout}
                >
                  Pay fees
                </button>
              </div>
            </div>
        ) : (
            <div className="mt-3">
              <h5>You have no fees!</h5>
              <Link
                  type="button"
                  className="btn main-color text-white"
                  to="search"
              >
                Explore top books
              </Link>
            </div>
        )}
        {submitDisabled && <SpinnerLoading />}
      </div>
  );
};