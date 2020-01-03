// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "http://localhost:4000",
  firebaseConfig: {
    apiKey: "AIzaSyByroYwjg9b_fa4PUJg9xy9SP6YIJalQag",
    authDomain: "angularauth-3abb5.firebaseapp.com",
    databaseURL: "https://angularauth-3abb5.firebaseio.com",
    projectId: "angularauth-3abb5",
    storageBucket: "angularauth-3abb5.appspot.com",
    messagingSenderId: "896340763554",
    appId: "1:896340763554:web:4e7d88824a60d01f9148fb",
    measurementId: "G-W83V13LPVL"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
