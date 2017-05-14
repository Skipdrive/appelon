import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC30Rbwu5QPqW3Ee1CvAsKEY22n7ei-iH4>",
  // authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://avalon-8ecb5.firebaseio.com/",
  // storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

export function createGame(playerName) {
  var gameObj = {};
  gameObj['gameId'] = generateGameId();
  gameObj[playerName] = '';

  firebase.database().ref('/').push(gameObj);
}

export function joinGame(playerName, gameId) {
  var gameObj = {};
  gameObj[playerName] = '';

  firebase.database().ref('/').orderByChild('gameId').equalTo(gameId).limitToFirst(1).on('child_added', function(snapshot) {
    firebase.database().ref('/' + snapshot.key).update(gameObj);
  });
}

/* Get a 4-digit padded random integer between 0000 and 9999. */
function generateGameId(min, max) {
  var gameId = Math.floor(Math.random() * 10000);
  var paddedGameId = ("000" + gameId).slice(-4);
  return paddedGameId;
}
