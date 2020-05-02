'use strict';

/******************************************* 
let buttonClasses = ['.w','.a','.s','.d','.j','.k','.l']

for(let i=0;i<buttonClasses.length;i++){
    document.querySelector(buttonClasses[i]).addEventListener('click', function () {
        alert("Button is clicked.")
    });
}

**************************************************/

function buttonPressClick(button) {
    let audio;
    switch (button) {
        case 'w':
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log(button);
            break;
    }
}

let numberOfDrumButtons = document.querySelectorAll("button").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function (event) {
        let button = this.innerHTML;
        buttonPressClick(button);
        buttonAnimation(button);
    })


}
document.addEventListener('keypress', function (event) {
    buttonPressClick(event.key);
    buttonAnimation(event.key);

})

function buttonAnimation(key) {
    let activeButton;
    if ( ['w', 's', 'a', 'd', 'j', 'k', 'l'].includes(key)) {
    //console.log(key);
       activeButton = document.querySelector("." + key);
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}