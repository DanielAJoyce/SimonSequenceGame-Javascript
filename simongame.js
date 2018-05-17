//=========AUDIO FILES===//
var audioRed = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audioBlue= new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audioYellow = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audioGreen = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

gameSequence =[];
playerSequence = [];
playerTurn = false;
gameStarted = false;
strictMode = true;
sequenceMax = 20;

var ButtonColors = ['green', 'blue', 'yellow','red'];

function startGame(){
 if(gameStarted){
   alert("Game has already started!");
 }
 else{
   gameStarted = true;
   addToGameSequence();
 }
}


function addToGameSequence(){
 var color;
 var valid = false;
 do{
   color = Math.floor(Math.random() * Math.floor(4)) + 1;
   if(color == 1 && gameSequence[gameSequence.length - 1] != 'green'){
       valid = true;
   }else if(color == 2 && gameSequence[gameSequence.length -1] != 'blue'){
     valid = true;
   }else if(color == 3 && gameSequence[gameSequence.length -1] != 'yellow'){
     valid = true;
   }else if(color == 4 && gameSequence[gameSequence.length -1] != 'red'){
     valid = true;
   }else{
     valid = false;
   }
 }
 while (valid === false);
 //Tweak to stop same color triggering twice (Makes for boring gameplay).
 
 //Pushes the colour into the sequence
 switch(color){
   case 1:
     gameSequence.push('green');
     break;
   case 2:
     gameSequence.push('blue');
     break;
   case 3:
     gameSequence.push('yellow');
     break;
   case 4:
     gameSequence.push('red');
     break;
   default:
     alert("Seems like the game has picked a really wrong color. Please press Reset game to reset the game");
     break;
 }
 document.getElementById('sequenceSize').innerHTML = ("Counter: " + gameSequence.length);

 flashSequence();
}

function flashSequence(){
 
 var x;
 
 for(x=0; x<gameSequence.length;x++){
   var delayLength = (x + 2) + '800';
   
     switch(gameSequence[x]){
       case 'green':
         flashColor('green', delayLength);
         break;
       case 'red':
           flashColor('red', delayLength);
         break;
       case 'blue':
         flashColor('blue', delayLength);
         break;
       case 'yellow':
         flashColor('yellow', delayLength);
         break;
       default:
         console.log("Something has gone wrong!");
         break;
     }		
 }
 
 playerTurn = true;
}

 
function flashColor(color,delayLength){
  //takes in the delay length and flashes the correct colour and plays sound.
 var buttonSound;
 switch(color){
   case 'green':
     buttonSound = audioGreen;
     break;
   case 'red':
     buttonSound = audioRed;
     break;
   case 'blue':
     buttonSound = audioBlue;
     break;
   case 'yellow':
     buttonSound = audioYellow;
     break;
   default:
     buttonSound = audioGreen;
     break;
 }
 setTimeout(function(){
 var element = document.getElementById(color);
   setTimeout(function (){
       element.classList.remove(color+"Inactive");
       element.classList.add(color+"-active");
       buttonSound.play();
       setTimeout(function(){
         element.classList.remove(color+"-active");
         element.classList.add(color+"Inactive");
       },1000);
   },1000);
 },delayLength);
}

//Goes through and checks sequence length, if all the selections are correct up to most recent and also checks win condition
function checkSequence(){
 if(playerSequence.length == gameSequence.length){
   if(gameSequence.length == sequenceMax){
     alert("You have won! You have successfully got " + sequenceMax + " out of " + sequenceMax + " correct");
     resetGame();
   }else{
   playerSequence = [];
   addToGameSequence();
   }
   
 }else{
   if(playerSequence[playerSequence.length-1] == gameSequence[playerSequence.length -1]){
   }else{
     if(strictMode){
       alert("game over! You selected the wrong color!");
       resetGame();
     }else{
       alert("Wrong Selection, please retry sequence again!");
       playerSequence =[];
     }
   }
 }
}
 
 
function changeStrictMode(){
 // This function checks the current mode and will alternate it.
 if(gameStarted != true){
   strictMode = !strictMode;
 
 var element = document.getElementById('strict-button');
 var background = document.getElementById('strict-background');

   background.classList.toggle("strict-background-active");
   background.classList.toggle("strict-background-inactive");
   
   element.classList.toggle("strict-active");
   element.classList.toggle("strict-inactive");

   if(strictMode){
     element.innerHTML = "ON";
     element.setAttribute('transform','translate(0,0)');
   }else{
     element.innerHTML = "OFF";
    element.setAttribute('transform','translate(0,41)');
   }
 }else{
   alert("Game has started, cannot change strict mode unless user stops game");
 }
}

$('.button').click(function(even){
 color = event.target.id;


 if(playerTurn){
   playerSequence.push(color);
   checkSequence();
 }
});


function resetGame(){
  //Resets game if game has already been started.
 gameStarted = false;
 gameSequence = [];
 playerSequence = [];
 alert("Please press Start Game to start a new game");
}