"use strict";

window.addEventListener("load", startApp);
let secret;
let secret2

function startApp() {
    console.log("app kører");
    secret = Math.floor(Math.random() * 100);
    console.log(secret)
    document.querySelector("#recieve-form").addEventListener("submit", recieveInput);
}

function recieveInput(e) {
    e.preventDefault();
    const form = e.target;

    // ...

    const guess = form.guess.valueAsNumber;
    // console.log(guess)
    const comp = compare(guess, secret);
    console.log(comp)
    if (comp > 0) {
        outputAnswer(`Dit gæt var ${guess} men det var for højt...`);
    }
    if (comp < 0) {
        outputAnswer(`Dit gæt var ${guess} men det var for lavt...`);
    }
    if (comp == 0) {
        outputAnswer(`Dit gæt var ${guess} og det var korrekt!!`);
    }
}

function compare(guess, secret) {
    return guess - secret

    // if (guess > secret) return 1
    // if (guess < secret) return -1
    // if (guess == secret) return 0 

    // if (guess > secret) {
    //     return 1
    // } else if (guess < secret) {
    //     return -1
    // } else {
    //     return 0
    // }
}

function outputAnswer(text) {
    const html = `
                <li>${text}</li>
        `;
    
    document.querySelector("#guesses").insertAdjacentHTML("afterbegin", html)
}