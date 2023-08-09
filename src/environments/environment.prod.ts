export const environment = {
  production: true,
  apiBaseURL: '/bsg/signing/api/',
  mobileApiBaseURL: '#{mobile-api-base-url}#',
  securedApiBaseURL: '/bsg/assisted/api/',
  instrumentationKey: '#{instrumentation-key}#',
  enableAppInsights: '#{enable-app-insights}#',
  bsgSessionKey: 'BSG-session',
  launchDarkly: {
    clientKey: '#{launch-darkly-client-key}#',
  },
};
