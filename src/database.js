import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC30Rbwu5QPqW3Ee1CvAsKEY22n7ei-iH4>",
  // authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://avalon-8ecb5.firebaseio.com/",
  // storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

/**
 * Add a new game entry to the database.
 * @parm {string} playerName
 */
export function createGame(playerName) {
  var gameObj = {
    players: {
      [playerName]: ''
    },
    gameId: generateGameId(),
  };

  firebase.database().ref('/').push(gameObj);
}

/**
 * Add the given name to the existing game. Does nothing if the gameId doesn't exist.
 * @parm {string} playerName
 * @parm {string} gameId
 */
export function joinGame(playerName, gameId) {
  var gameObj = {};
  gameObj[playerName] = '';

  firebase.database().ref('/').orderByChild('gameId').equalTo(gameId).limitToFirst(1).on('child_added', function(snapshot) {
    firebase.database().ref('/' + snapshot.key + '/players').update(gameObj);
  });
}

/* Get a 4-digit padded random integer between 0000 and 9999. */
function generateGameId(min, max) {
  var gameId = Math.floor(Math.random() * 10000);
  var paddedGameId = ("000" + gameId).slice(-4);
  return paddedGameId;
}
