import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBidn6qHR7btvqoflBUdgHSdn85dK_v_eo",
  authDomain: "patienttrackerapp.firebaseapp.com",
  databaseURL: "https://patienttrackerapp.firebaseio.com",
  projectId: "patienttrackerapp",
  storageBucket: "patienttrackerapp.appspot.com",
  messagingSenderId: "383117056096"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();