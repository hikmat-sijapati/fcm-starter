// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
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
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
// messaging.onMessage(function(payload) { 
//     console.log('Message received. ', payload);
    
// });
self.addEventListener('push', function(event) {
    // console.log(event.data.json());
    let notification = JSON.parse(event.data.text());
    console.log(notification);
    let title = notification.notification.title;
    // console.log(notification, title);
    //Remove title from notification payload
    delete notification.notification.title;
    const promiseChain = self.registration.showNotification(title, notification.notification);
  
    event.waitUntil(promiseChain);
  });
  