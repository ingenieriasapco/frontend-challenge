 import firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyD6c-yZn-gI_S6ysYE9hiUzxQng82KwyXU",
    authDomain: "challenge-138b0.firebaseapp.com",
    databaseURL: "https://challenge-138b0.firebaseio.com",
    storageBucket: "challenge-138b0.appspot.com",
    messagingSenderId: "866793699378"
  };
  var FbApp = firebase.initializeApp(config);
  module.exports.FBApp = FbApp.database(); //this doesnt have to be database only