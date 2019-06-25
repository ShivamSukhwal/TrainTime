setInterval(updateClock, 1000);

// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyCCsfCHhc0XwxW7t9Yp-m54gTa0HLoWJKU",
  authDomain: "train-time-f2787.firebaseapp.com",
  databaseURL: "https://train-time-f2787.firebaseio.com",
  projectId: "train-time-f2787",
  storageBucket: "",
  messagingSenderId: "719136475681",
  appId: "1:719136475681:web:aef937013ba466a3"
};

firebase.initializeApp(config);

var database = firebase.database();
