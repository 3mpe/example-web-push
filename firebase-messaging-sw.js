

function initInSw() {
  // [START messaging_init_in_sw]
  // Give the service worker access to Firebase Messaging.
  // Note that you can only use Firebase Messaging here. Other Firebase libraries
  // are not available in the service worker.
  importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js');

  // Initialize the Firebase app in the service worker by passing in
  // your app's Firebase config object.
  // https://firebase.google.com/docs/web/setup#config-object
  firebase.initializeApp({
    apiKey: "AIzaSyA2UnH2obBKHIkSLLQWA1m4LAuR7mxuhHs",
    authDomain: "web-push-2050c.firebaseapp.com",
    projectId: "web-push-2050c",
    storageBucket: "web-push-2050c.appspot.com",
    messagingSenderId: "677265177066",
    appId: "1:677265177066:web:fae526cb800239f451da93",
    measurementId: "G-FF600E5M3R",
  });

  // Retrieve an instance of Firebase Messaging so that it can handle background
  // messages.
  const messaging = firebase.messaging();
  // [END messaging_init_in_sw]
}

function onBackgroundMessage() {
  const messaging = firebase.messaging();

  // [START messaging_on_background_message]
  messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  // [END messaging_on_background_message]
}


initInSw()
onBackgroundMessage()