// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiBaseURL: 'https://blocksignapiqa01-z1.hrb-ase-qa.net/api/',https://blocksign-qa.hrblock.com/api/
  // apiBaseURL: 'https://blocksign-qa.hrblock.com/api/',
  apiBaseURL: 'bsg/signing/api/',
  mobileApiBaseURL: 'https://blocksign-qa.hrblock.com/api/',
  securedApiBaseURL: '/bsg/assisted/api/',
  instrumentationKey: '040ba9f5-a519-4365-8640-0c2249a8cb23',
  enableAppInsights: 'enable',
  bsgSessionKey: 'BSG-session',
  launchDarkly: {
    clientKey: '6257f26edc679b14d657b52a',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
