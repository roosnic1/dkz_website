/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dkz-website',
    environment: environment,
    backendURL: 'http://localhost:3000',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = {
      'connect-src': "'self' http://localhost:3000",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'font-src': "'self' https://fonts.gstatic.com",
      'img-src': "'self' data:"
    };

    ENV['simple-auth-token'] = {
      serverTokenEndpoint: 'http://localhost:3000/get-token',
      serverTokenRefreshEndpoint: 'http://localhost:3000/refresh-token',
      timeFactor: 1000,
      refreshLeeway: 60
    };
    ENV['simple-auth'] = {authorizer: 'simple-auth-authorizer:token'}

    ENV['torii'] = {
      providers: {
        'google-oauth2-bearer': {
          apiKey: '209246570631-df1muu96j4sji8hmsui77u88hdf0aknj.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200'
        }
      }
    }

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
