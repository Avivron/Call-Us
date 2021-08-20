let db, storage, provider, auth;

function initFirebase(){
  //web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyAw1y2xZAYjCzZx5Ar6O42hiGCtly5Ed2k",
    authDomain: "callus-50777.firebaseapp.com",
    databaseurl: "https://callus-50777.firebaseio.com",
    projectId: "callus-50777",
    storageBucket: "callus-50777.appspot.com",
    messagingSenderId: "710368084796",
    appId: "1:710368084796:web:0f8582d3bfed5b4cf81439",
    measurementId: "G-8SS2E15GX5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  auth = firebase.auth();
}


export{db, storage, auth ,initFirebase};