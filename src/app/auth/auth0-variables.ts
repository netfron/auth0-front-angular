interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '60clbtR4ZMZGR9oyz70XZbaGfdww4vmM',
  domain: 'dlog.auth0.com',
  callbackURL: 'http://netfron-angular.s3-website.ap-northeast-2.amazonaws.com/callback',
  apiUrl: 'https://auth0-backend-laravel.herokuapp.com'
};
