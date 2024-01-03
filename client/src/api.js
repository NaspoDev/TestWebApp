// Handles API routing.

/*
Since the vite proxy in vite.config.js doesn't build with the app, it won't work for the app in production.
To get around this, one way is to do the following... 

Make a apiURL variable that is set to either our production api url or our development api url depending on whether
the application is running in development mode or production.

When running the app in dev mode, (the "vite" command, as seen in package.json), vite automatically creates an 
environment variable called "MODE" which is set to a value of "development".
So, we can check if this variable is set to "development" to set our apiURL variable accordingly.

Our solution here is to make this it's own module and export apiURL.

https://vitejs.dev/guide/env-and-mode
*/

let runMode = import.meta.env.MODE;

let apiURL = "https://api.testwebapp.naspoapps.com"; // prod api

if (runMode === "development") {
  apiURL = "http://localhost:3000"; // dev api
}

export default apiURL;
