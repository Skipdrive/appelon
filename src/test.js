import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC30Rbwu5QPqW3Ee1CvAsKEY22n7ei-iH4>",
  // authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://avalon-8ecb5.firebaseio.com/",
  // storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

export function myFunction(p1, p2) {
  firebase.database().ref('users/').set({
    username: 'test',
    email: 'email'
  });
}
