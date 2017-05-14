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
 * @return {string} The newly created game id.
 */
export function createGame(playerName) {
  var gameId = generateGameId();
  var gameObj = {
    players: {
      [playerName]: ''
    },
    gameId: gameId,
  };

  firebase.database().ref('/').push(gameObj);

  return gameId;
}

/**
 * Add the given name to the existing game. Does nothing if the gameId doesn't exist.
 * @parm {string} playerName
 * @parm {string} gameId
 */
export function joinGame(playerName, gameId) {
  var playersObj = {};
  playersObj[playerName] = '';

  firebase.database().ref('/').orderByChild('gameId').equalTo(gameId).limitToLast(1).on('child_added', function(gameSnapshot) {
    firebase.database().ref('/' + gameSnapshot.key + '/players').update(playersObj);
  });
}

/**
 * Register callback for updating the player role after assignment.
 * The callback will be called immediately and then each time the role updates.
 * @parm {string} playerName
 * @parm {string} gameId
 * @parm {function(role)} callback The callback which takes in the new role as a parameter.
 */
export function registerAssignmentCallback(playerName, gameId, callback) {
  firebase.database().ref('/').orderByChild('gameId').equalTo(gameId).limitToLast(1).on('child_added', function(gameSnapshot) {
    firebase.database().ref('/' + gameSnapshot.key + '/players/' + playerName).on('value', function(roleSnapshot) {
      var role = roleSnapshot.val();
      callback(role);
    });
  });
}

/**
 * Randomly assign the given roles to all players in the given game.
 * @parm {string} gameId
 * @parm {Array<string>} roles
 */
export function assignRoles(gameId, roles) {
  roles = shuffle(roles);

  firebase.database().ref('/').orderByChild('gameId').equalTo(gameId).limitToLast(1).on('child_added', function(gameSnapshot) {
    firebase.database().ref('/' + gameSnapshot.key + '/players').once('value').then(function(playersSnapshot) {
      var playersObj = {};
      playersSnapshot.forEach(function(s) {
        var playerName = s.key;
        playersObj[playerName] = roles.pop();
      });
      firebase.database().ref('/' + gameSnapshot.key + '/players').update(playersObj);
    });;
  });
}

/**
 * Get a 4-digit padded random integer between 0000 and 9999.
 * @return {string} The game id.
 */
function generateGameId() {
  var gameId = Math.floor(Math.random() * 10000);
  var paddedGameId = ("000" + gameId).slice(-4);
  return paddedGameId;
}

/**
 * Shuffle the given array using the Fisher-Yates algorith.
 * More info: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param {Array<Object>} array
 * @return {Array<Object>} The shuffled array.
 */
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
