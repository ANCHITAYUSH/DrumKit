
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll("button")[i].addEventListener("click", clickHandler);
}

function clickHandler(){
  //var audio = new Audio("sounds/crash.mp3");
  //audio.play();
}
