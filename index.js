var allDrums = document.querySelectorAll(".drum").length;

// Checks for Click Event
//
for (var n = 0; n < allDrums; n++) {
  document.querySelectorAll(".drum")[n].addEventListener("click", function () {
    var butttonInnerHTML = this.innerHTML;
    makeSound(butttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

//Checks for Keyboard press ("keydown")
function makeSound(letter) {
  switch (letter) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      break;

    case "j":
      var tom5 = new Audio("sounds/crash.mp3");
      tom5.play();

      break;

    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();

      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      break;

    default:
      console.log(butttonInnerHTML);
  }
}
