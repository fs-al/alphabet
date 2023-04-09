const express = require("express");
const ejs = require("ejs");
const sound = require("sound-play");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });


  app.get("/", function(req, res) {
    res.render("home");
    
    })
    
// letter value prints in the big tile

  app.get("/letters/:letter", function(req, res) {
    let letter = req.params.letter;
    res.render("letter", {assignedLetter: letter})
      }
  )

  app.post("/home", function(req, res) {
    res.redirect("/");
  });




// // MAKE SOUND THROUGH MOUSE CLICKS

// var numberOfDrums = document.querySelectorAll(".drum").length;

// for(var i = 0; i < numberOfDrums; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", function() { // adds event listener to each of the buttons
        
//         var buttonInnerHTML = this.innerHTML;
//         console.log(buttonInnerHTML);
//         makeSound(buttonInnerHTML);

//         modifyActiveButton(buttonInnerHTML);
//         });
// }

// // MAKE SOUND THROUGH KEYBOARD KEYS

// document.addEventListener("keydown", function(event) { 
//     console.log(event);
//     var keyPressed = event.key; // // .key logs the key that was pressed
    
//     makeSound(keyPressed);

//     modifyActiveButton(keyPressed);
//     }
// )

// // FUNCTION TO MAKE SOUND

// function makeSound(key) {

//     switch (key) {
//         case "q":
//             var tom1 = new Audio('sounds/tom-1.mp3');
//             tom1.play();
//             break;
        
//         case "w":
//             var tom2 = new Audio('sounds/tom-2.mp3');
//             tom2.play();
//             break;
        
//         case "e":
//             var tom3 = new Audio('sounds/tom-3.mp3');
//             tom3.play();
//             break;

//         case "r":
//             var tom4 = new Audio('sounds/tom-4.mp3');
//             tom4.play();
//             break;

//         case "i":
//             var kick = new Audio('sounds/kick-bass.mp3');
//             kick.play();
//             break;

//         case "o":
//             var snare = new Audio('sounds/snare.mp3');
//             snare.play();
//             break;

//         case "p":
//             var crash = new Audio('sounds/crash.mp3');
//             crash.play();
//             break;
    
//         default:
//             break;
//     }
// }



// function modifyActiveButton(key) {

//     // var activeButton = ("." + key);

//     var activeButton = document.querySelector("." + key);

//     activeButton.classList.add("pressed");

//     setTimeout(function(){
//         activeButton.classList.toggle("pressed");
//     }, 100)

// }