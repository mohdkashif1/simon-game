var userClickedPattern=[];

var gamePattern =[];

var buttonColors=["red","blue","green","yellow"];


var started=false;

var level=0;

$(document).keypress(function(){
  if(!started){
    $("#level-title").text("level "+ level);
    nextSequence();
    started=true;
  }
});


$(".btn").click(function(){

  var userChosenColor=$(this).attr("id");

  userClickedPattern.push(userChosenColor);

  checkAnswer(userClickedPattern.length-1)

  //console.log(userClickedPattern);
playSound(userChosenColor);
animatePress(userChosenColor);
});


function nextSequence(){

userClickedPattern = [];

level++;

  $("#level-title").text("level "+" "+ level);


 var randomNumber=Math.round(Math.random()*3);

 var randomChosenColor = buttonColors[randomNumber];

 gamePattern.push(randomChosenColor);

$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);



playSound(randomChosenColor);
animatePress(randomChosenColor);
}

function playSound(name)
{
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor){

 $("."+currentColor).addClass("pressed");

 setTimeout(function(){

$("."+currentColor).removeClass("pressed")

 }, 100);

}
function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
  {
console.log("succcess")

 if(userClickedPattern.length===gamePattern.length){
    setTimeout(function(){

     nextSequence();

  }, 100);
  }
}

else {
$("body").addClass("game-over");
setTimeout (function(){
  $("body").removeClass("game-over")
},200)
$("#level-title").text("Game Over,Press any key to restart");
var audio1 =new Audio("sounds/wrong.mp3");

audio1.play();

startOver();

}
}
function startOver(){

  level=0;

  gamePattern=[];
  started=false;
}
