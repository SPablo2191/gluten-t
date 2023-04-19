// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const environment = {
  production: false,
  url : 'https://gluten-t-api.onrender.com/' || 'localhost:5000',
  firebase : {
    apiKey: "AIzaSyDzlkgVhwU3JGmg4uXJVRgMUNIiRNrnON0",
    authDomain: "proyectoceliaco-912e1.firebaseapp.com",
    databaseURL: "https://proyectoceliaco-912e1-default-rtdb.firebaseio.com",
    projectId: "proyectoceliaco-912e1",
    storageBucket: "proyectoceliaco-912e1.appspot.com",
    messagingSenderId: "355320740628",
    appId: "1:355320740628:web:9071ea70cf04d2c68fa001",
    measurementId: "G-CBD3D388JQ"
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
