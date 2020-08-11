var lengthTotal= document.querySelectorAll(".drum").length;


for(var i=0 ; i<lengthTotal ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHTML=this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

       
    });
}

document.addEventListener("keypress",function(event){
  
    makeSound(event.key);
    buttonAnimation(event.key);
    

});




function makeSound(key){

    switch (key) {
        case "w":
          var audio = new Audio("clap.wav");

          audio.play();
            break;
    
       case "a":
          var audio = new Audio("hihat.wav");

          audio.play();

       break;
       case "s":

          var audio = new Audio("kick.wav");

          audio.play();
       break;
       case "d":

          var audio = new Audio("openhat.wav");

          audio.play();
       break;
       case "j":

          var audio = new Audio("boom.wav");

          audio.play();
       break;
       case "k":
          var audio = new Audio("ride.wav");

          audio.play();

       break;
       case "l":
          var audio = new Audio("snare.wav");

          audio.play();

       break;

       case "f":
        var audio = new Audio("tom.wav");

        audio.play();

     break;
     case "g":
        var audio = new Audio("tink.wav");

        audio.play();

     break;
        default:
         
    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  