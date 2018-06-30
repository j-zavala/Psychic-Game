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
        count--;
        $(".count").text("Guesses left: " + count);
        console.log("Pick: " + pick)
        checkIf();
    }
});


// 3. Check if pick matches guesses,
//      a. if yes, increment wins
//      b. if no, increment loses
//      c. reagrdless, decrement guesses

const checkIf = () => {
    if (count === 0)
    {
        reset();
        loses++;
        $(".loses").text("Loses: " + loses);
    }
    else if (guess === pick)
    {
        wins++;
        $(".wins").text("Wins: " + wins);
        reset();
    }  
};

// 4. Check if guesses are at 0
//      a. if yes, reset win, losses, guesses
const reset = () => {
      count = 9;
      $(".count").text("Guesses left: " + count);
      $(".target").text("Your guesses so far: ");
      pick = chance.character({ pool: 'abcdefghijklmnopqrstuvwxyz' });

};

}); // END document.ready