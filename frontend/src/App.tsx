import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { ReviewListPage } from './layouts/BookCheckoutPage/ReviewListPage/ReviewListPage';
import { ShelfPage } from './layouts/ShelfPage/ShelfPage';
import { MessagesPage } from './layouts/MessagesPage/MessagesPage';
import { ManageLibraryPage } from './layouts/ManageLibraryPage/ManageLibraryPage';
import { auth0Config } from './lib/auth0Config';
import { Auth0Provider, withAuthenticationRequired} from '@auth0/auth0-react';
import {PaymentPage} from "./layouts/PaymentPage/PaymentPage";

const Auth0ProviderWithHistory = ({ children }: { children: React.ReactNode }) => {
  const history = useHistory();

  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || "/home");
  };

  return (
      <Auth0Provider
          domain={auth0Config.issuer ?? ""}
          clientId={auth0Config.clientId ?? ""}
          authorizationParams={{
            redirect_uri: auth0Config.redirectUri,
            audience: auth0Config.audience,
            scope: auth0Config.scope,
          }}
          onRedirectCallback={onRedirectCallback}
      >
        {children}
      </Auth0Provider>
  );
};

const SecureRoute = ({ component, path, ...args }: { component: React.ComponentType<any>, path: string }) => (
    <Route path={path} component={withAuthenticationRequired(component)} {...args} />
);

export const App = () => {

  return (
      <div className='d-flex flex-column min-vh-100'>
        <Auth0ProviderWithHistory>
          <Navbar />
          <div className='flex-grow-1'>
            <Switch>
              <Route path='/' exact>
                <Redirect to='/home' />
              </Route>
              <Route path='/home'>
                <HomePage />
              </Route>
              <Route path='/search'>
                <SearchBooksPage />
              </Route>
              <Route path='/reviewlist/:bookId'>
                <ReviewListPage/>
              </Route>
              <Route path='/checkout/:bookId'>
                <BookCheckoutPage/>
              </Route>
              <SecureRoute path='/shelf' component={ShelfPage} />
              <SecureRoute path='/messages' component={MessagesPage} />
              <SecureRoute path='/admin' component={ManageLibraryPage} />
                <SecureRoute path='/fees' component={PaymentPage} />
            </Switch>
          </div>
          <Footer />
        </Auth0ProviderWithHistory>
      </div>
  );
}