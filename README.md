# 📚 Bookify

**Bookify** is a simple full-stack web application that allows users to borrow, return, and pay for books. It is built with **React** (frontend) and **Java Spring Boot** (backend).

## 🚀 Deployment

- **Frontend**: Deployed on [Vercel](https://vercel.com/)
- **Backend**: Deployed on [Render](https://render.com)
- **Database**: Deployed on [Aiven](https://aiven.io)
- **Authentication**: Integrated with [Auth0](https://auth0.com/) for login/logout
- **Payment**: Integrated with [Stripe](https://stripe.com/) in test mode with full features

## 🧱 Technologies Used

### Frontend – React
- React 18
- React Router DOM
- Auth0 React SDK (`@auth0/auth0-react`) – for authentication
- Stripe JS + React Stripe (`@stripe/react-stripe-js`, `@stripe/stripe-js`) – for payment
- TypeScript
- Hosting: Vercel

### Backend – Spring Boot
- Spring Boot 3.2
- Maven
- Java 18
- RESTful API
- Hosting: Render

## 🔐 Authentication – Auth0

Auth0 is used for OAuth2/OIDC user authentication. After logging in, users are redirected to `/callback` and issued an access token to communicate securely with the backend API.

## 💳 Payment – Stripe

Stripe is integrated to handle secure payments using the `@stripe/react-stripe-js` package on the frontend and `stripe` SDK on the backend to create checkout sessions.

## 🙏 Special Thanks

- 👨‍🏫 **Chad Darby, Eric Roby** – for their amazing course [Full Stack: React and Java Spring Boot – The Developer Guide](https://www.udemy.com/course/full-stack-react-and-java-spring-boot-the-developer-guide/)
- ☁️ **Vercel**, **Railway** – Fast, free, and reliable deployment platforms
- 🔐 **Auth0** – Easy-to-integrate OAuth2 authentication with a generous free tier
- 💳 **Stripe** – Secure, developer-friendly online payment system
- 📸 **Trần Ngọc Anh Khoa** – for providing beautiful book images that made the UI shine ❤️
- 🎨 **Canva** – for being a lovely design tool to build up our branding
- 🙋‍♂️ **Myself (Ngô Quang Trường)** – who coded this through sleepless nights and doubled as a reluctant but determined designer =))

---

> Made with love by **TruongPersonal** – Bookify Project 💼