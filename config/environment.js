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
    },
    googleAnalytics: {
      webPropertyId: 'UA-XXXX-1'
    },

    // Auth Settings
    'ember-simple-auth-token': {
      serverTokenEndpoint: '/auth/get-token',
      serverTokenRefreshEndpoint: '/auth/refresh-token',
      timeFactor: 1000,
      refreshLeeway: 60
    },
    'ember-simple-auth': {
      authorizer: 'authorizer:token',
      authenticationRoute: 'login'
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
      'img-src': "'self' data: https://www.google-analytics.com",
      'script-src': "'self' 'unsafe-inline' https://www.google-analytics.com"
    };

    ENV['torii'] = {
      providers: {
        'google-oauth2-bearer': {
          apiKey: '209246570631-df1muu96j4sji8hmsui77u88hdf0aknj.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200'
        }
      }
    };
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

  if (environment === 'preproduction') {
    ENV.backendURL =  '';
    ENV.contentSecurityPolicy = {
      'connect-src': "'self'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'font-src': "'self' https://fonts.gstatic.com",
      'img-src': "'self' data: https://www.google-analytics.com",
      'script-src': "'self' 'unsafe-inline' https://www.google-analytics.com"
    };
    ENV['torii'] = {
      providers: {
        'google-oauth2-bearer': {
          apiKey: '209246570631-df1muu96j4sji8hmsui77u88hdf0aknj.apps.googleusercontent.com',
          redirectUri: 'https://dkz.gifstr.io'
        }
      }
    };
  }

  if (environment === 'production') {
    ENV.backendURL =  '';
    ENV.contentSecurityPolicy = {
      'connect-src': "'self'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'font-src': "'self' https://fonts.gstatic.com",
      'img-src': "'self' data: https://www.google-analytics.com",
      'script-src': "'self' 'unsafe-inline' https://www.google-analytics.com"
    };
    ENV['torii'] = {
      providers: {
        'google-oauth2-bearer': {
          apiKey: '209246570631-qgghhgojm82h299oueg08a00egkua528.apps.googleusercontent.com',
          redirectUri: 'http://dkzprod.appengine.flow.ch'
        }
      }
    };
    ENV.googleAnalytics = {
      webPropertyId: 'UA-70453907-1'
    };
  }

  return ENV;
};
