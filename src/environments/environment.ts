// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDjp4wKQC0N3F8I4jRGMMiER2d3GYrlsvU",
    authDomain: "ms-angular-material-firebase.firebaseapp.com",
    databaseURL: "https://ms-angular-material-firebase.firebaseio.com",
    projectId: "ms-angular-material-firebase",
    storageBucket: "ms-angular-material-firebase.appspot.com",
    messagingSenderId: "156487560844"
  }
};
