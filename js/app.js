/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// test 1 , step #3
//const phrase = new Phrase('Life is like a box of chocolates');
//console.log(`Phrase - phrase: ${phrase.phrase}`);


// test 2 step #4

 /* const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
}); 
 */

// test 3 step #5

/* const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
    };
    const game = new Game();
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
     */

// test 4 step #6
//const game = new Game();
//game.getRandomPhrase().addPhraseToDisplay();


//test 5 step #7
/* const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();  */

//test 6 step #8

/* const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`); */

// test 7 step # 9 
// game.activePhrase.checkLetter('a') 
// needs to be check on console

// test 8 step #9 part 2
//game.checkForWin()
//removeLife()
//checkForWin()`
//IT WORKS 

//gameOver(true)

  // first attempt 
   
/* $("#btn__reset").on("click", function () {
    game = new Game();
    game.startGame();
   // missing  game.resetGameBoard();

}); */




$("#btn__reset").click(() => { // botton for the new game , reset game borad and start game 
    game = new Game();
    game.resetGameBoard();
    game.startGame();
  });

$("#qwerty button").click((e) => {
    const $target = $(e.target); //button that was clicked
    game.handleInteraction($target);
  });
  
//if (Event.className === 'key') {
   // game.handleInteraction(e)
//};


