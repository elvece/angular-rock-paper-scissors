
var app = angular.module('myApp', []);

app.controller('myController', function($scope) {

  $scope.init = function(){
    $scope.players = {
      player1: {
        choice: "",
        score: 0,
        tie: false
      },
      player2: {
        choice: "",
        score: 0,
        tie: false
      }
    };
  };
  $scope.init();

  $scope.computerChoice = function(){
    $scope.options = ["rock", "paper", "scissors", "lizard", "spock"];
    $scope.players.player2.choice =  $scope.options[Math.floor(Math.random() * $scope.options.length)];
  };

  $scope.winConditions = function(){
    //to reset ties
    $scope.players.player1.tie = false;
    $scope.players.player2.tie = false;

    //if tie
    if ($scope.players.player1.choice === $scope.players.player2.choice) {
      $scope.players.player1.tie = true;
      $scope.players.player2.tie = true;
    }

    //switch case attempt
    switch(true) {
      //player1 wins
      case $scope.players.player1.choice === 'rock' && $scope.players.player2.choice === 'scissors' || 'lizard':
        $scope.players.player1.score++;
        break;

      case $scope.players.player1.choice === 'paper' && $scope.players.player2.choice === 'rock' || 'spock':
        $scope.players.player1.score++;
        break;

      case $scope.players.player1.choice === 'scissors' && $scope.players.player2.choice === 'paper' || 'lizard':
        $scope.players.player1.score++;
        break;

      case $scope.players.player1.choice === 'spock' && $scope.players.player2.choice === 'scissors' || 'rock':
        $scope.players.player1.score++;
        break;

      case $scope.players.player1.choice === 'lizard' && $scope.players.player2.choice === 'spock' || 'paper':
        $scope.players.player1.score++;
        break;

      //player 2 wins
      case $scope.players.player1.choice === 'rock' || 'spock' && $scope.players.player2.choice === 'paper':
        $scope.players.player2.score++;
        break;

      case $scope.players.player1.choice === 'paper' || 'lizard' && $scope.players.player2.choice === 'scissors':
        $scope.players.player2.score++;
        break;

      case $scope.players.player1.choice === 'scissors' || 'lizard' && $scope.players.player2.choice === 'rock':
        $scope.players.player2.score++;
        break;

      case $scope.players.player1.choice === 'scissors' || 'rock' && $scope.players.player2.choice === 'spock':
        $scope.players.player2.score++;
        break;

      case $scope.players.player1.choice === 'spock' || 'paper' && $scope.players.player2.choice === 'lizard':
        $scope.players.player2.score++;
        break;
    }
  };
});

// attempt with if logic, but not incrementing score for player2
// if ($scope.players.player1.choice === 'rock') {
//   if($scope.players.player2.choice === 'scissors' || 'lizard'){
//     $scope.players.player1.score++;
//   } else {
//     $scope.players.player2.score++;
//   }
// }

// if ($scope.players.player1.choice === 'paper') {
//   if($scope.players.player2.choice === 'rock' || 'spock'){
//     $scope.players.player1.score++;
//   } else {
//     $scope.players.player2.score++;
//   }
// }

// if ($scope.players.player1.choice === 'scissors') {
//   if($scope.players.player2.choice === 'paper' || 'lizard'){
//     $scope.player1.score++;
//   } else {
//     $scope.players.player2.score++;
//   }
// }

// if ($scope.players.player1.choice === 'spock') {
//   if($scope.players.player2.choice === 'scissors' || 'rock'){
//     $scope.players.player1.score++;
//   } else {
//     $scope.players.player2.score++;
//   }
// }

// if ($scope.players.player1.choice === 'lizard') {
//   if($scope.players.player2.choice === 'spock' || 'paper'){
//     $scope.players.player1.score++;
//   } else {
//     $scope.players.player2.score++;
//   }
// }


