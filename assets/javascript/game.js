$(document).ready(() => {

// Variable declaration
let pick; // letter computer picks
let guess; // letter user guesses

// 1. Computer picks random letter
pick = chance.character({ pool: 'abcdefghijklmnopqrstuvwxyz' });
// 2.  User inputs their guess, saves input to variable, & adds to document
$(document).keypress((event) => {
    guess = String.fromCharCode((event.which));
    $(".target").append(guess);
});
// 3. Check if pick matches guesses,
//      a. if yes, increment wins
//      b. if no, increment loses
//      c. reagrdless, decrement guesses


// 4. Check if guesses are at 0
//      a. if yes, reset win, losses, guesses

}); // END document.ready