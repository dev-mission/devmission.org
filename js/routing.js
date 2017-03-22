$(document).ready(){
  eventHandler();
}

function eventHandler() {
  $("#volunteer").on("click", function(event){
    event.preventDefault();
    console.log("Clicked");
  })
}
