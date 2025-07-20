export const auth0Config = {
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  issuer: process.env.REACT_APP_AUTH0_ISSUER,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  redirectUri: window.location.origin + "/callback",
  scope: "openid profile email"
}