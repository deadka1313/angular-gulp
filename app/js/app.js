var config = {
	apiKey: "AIzaSyCSNKzUK8vEhZUuvOWkixcm2hgcLFGqHR4",
	authDomain: "cbschat-deadka.firebaseapp.com",
	databaseURL: "https://cbschat-deadka.firebaseio.com",
	projectId: "cbschat-deadka",
	storageBucket: "cbschat-deadka.appspot.com",
	messagingSenderId: "36342430902"
};
firebase.initializeApp(config);

angular.module('cbsChat', ['firebase']);
