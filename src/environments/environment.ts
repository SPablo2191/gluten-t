// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FIREBASE_API } from "dotenv";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const environment = {
  production: false,
  url : 'http://127.0.0.1:5000' || 'https://gluten-t-api.onrender.com/',
  firebase : {
    apiKey: FIREBASE_API.apiKey,
    authDomain: FIREBASE_API.authDomain,
    databaseURL: FIREBASE_API.databaseURL,
    projectId: FIREBASE_API.projectId,
    storageBucket: FIREBASE_API.storageBucket,
    messagingSenderId: FIREBASE_API.messagingSenderId,
    appId: FIREBASE_API.appId,
    measurementId: FIREBASE_API.measurementId
  }
};
const app = initializeApp(environment.firebase);
const auth = getAuth(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
