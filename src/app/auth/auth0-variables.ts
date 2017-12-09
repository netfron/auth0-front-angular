interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '46rMUNyQaAzCheGV2aND1QGwpq2MUz5X',
  domain: 'dlog.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  apiUrl: 'http://localhost:8000'
};
