$(document).ready(() => {

// Variable declaration
let pick; // letter computer picks
let guess; // letter user guesses
let wins = 0;
let loses = 0;
let count = 9; // guesses so far

$(".wins").text("Wins: " + wins );
$(".loses").text("Loses: " + loses);
$(".count").text("Guesses left: " + count)



// 1. Computer picks random letter
pick = chance.character({ pool: 'abcdefghijklmnopqrstuvwxyz' });
// 2.  User inputs their guess, saves input to variable, & adds to document
document.addEventListener('keyup', function (event) {
    // if (event.defaultPrevented) {
    //     return;
    // }

    //Here, we are gracefully degrading from event.key to event.keycode.
    var key = event.key || event.keyCode;
    //Listens for any keypress
    if (key) {
        $(".target").append(key);
        guess = key;
        checkIf();
    }
});











//  $(document).keypress((event) => {
//     guess = String.fromCharCode((event.which));
//     $(".target").append(guess);
//     return guess;
// });



// 3. Check if pick matches guesses,
//      a. if yes, increment wins
//      b. if no, increment loses
//      c. reagrdless, decrement guesses

const checkIf = () => {
    if (guess === pick) {
        wins++;
        count--;
        $(".wins").text("Wins: " + wins);
        $(".count").text("Guesses left: " + count);
    }
    else if(guess !== pick) {
        loses++;
        count--;
        $(".loses").text("Loses: " + loses);
        $(".count").text("Guesses left: " + count);
    }
};

// 4. Check if guesses are at 0
//      a. if yes, reset win, losses, guesses

const reset = () => {};

}); // END document.ready