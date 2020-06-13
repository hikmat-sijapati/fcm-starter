const VAPID_PUBLIC_KEY = "BHb4cJE7OOCQMrP2vN_pl91XEBUCj-CEYf-zCE-t4TyRyEuFXEkMTsrARq3HxGkYD7XD1SthsrxP3ZNRVk4oIkc";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBYr_IsayPpVVe-nZsTuEn80CvDBtzl3KI",
  authDomain: "microservices-316db.firebaseapp.com",
  databaseURL: "https://microservices-316db.firebaseio.com",
  projectId: "microservices-316db",
  storageBucket: "microservices-316db.appspot.com",
  messagingSenderId: "751332489091",
  appId: "1:751332489091:web:3bf7a9a19adfabef24e8b6",
  measurementId: "G-WNE2JXDE5C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();
messaging.usePublicVapidKey(VAPID_PUBLIC_KEY);
navigator.serviceWorker.register('./firebase-messaging-sw.js')
.then(function(registration) {
    console.log('Service worker successfully registered.');
    console.log(registration);
    messaging.useServiceWorker(registration);
    messaging.getToken().then((currentToken) => {
      if (currentToken) {
          // sendTokenToServer(currentToken);
          console.log(currentToken);
      } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
  }); 
}).catch(function(err) {
    console.error('Unable to register service worker.', err);
});

