/**************************
Treehouse FSJS Techdegree
Project 4 - OOP Game App 
Game.js Comments
***************************/
// H.A.L.F:
/*     Game.js - definition of the Game class
    - constructor takes no parameters; established three properties:
        * missed is an integer set to 0
        * phrases is assigned to the result of a class method createPhrases()
        * activePhrase begins set to null (no instance of Phrase)
        Additional properties were added to retain sounds in Audio class instances */

// ******** Step 2 and 3 ************
// "This"-- refer to the object on which the currently executing method has been invoked. in this case CLASS GAME.
// info about "this"     https://remysharp.com/2007/04/12/jquerys-this-demystified
// constructure and how it works https://www.w3schools.com/js/js_object_constructors.asp and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Class_body_and_method_definitions
// This is the  game class , within the class method there is a constructor method , this method holds 3 properties 

class Game{ // CREATING GAME GLASS. (Entire Javascript file is this one class)
    constructor() {
      this.missed = 0;  // tracks the number of misses by player ,value is 0 no guess have play the game.
      this.phrases = this.createPhrases();// Option#1 - and then set the `phrases` property to call that method.
      this.activePhrase = null;   // Initially there is no phrase chosen// null means nothing there are no phrases
    }

/**
      * Creates phrases for use in game
      * @return {array} An array of phrases that could be used in the game
*/
 

// https://www.w3schools.com/jsref/jsref_push.asp the push method add phrases to the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
//https://stackoverflow.com/questions/931872/what-s-the-difference-between-array-and-while-declaring-a-javascript-ar/1273936#1273936

// createPhrases() method is creating an array for the 5 phrases//
      createPhrases() {
      var phrasesList = [];
//#1
      let phraseOne = new Phrase("Whatever ");
      phrasesList.push(phraseOne); // For example for each push method , phrasesList is the empthy array, whatever variable is put inside the push() method, will be push in the phrasesList array.
//#2
      let phraseTwo = new Phrase(" anything");
      phrasesList.push(phraseTwo);
//#3
      let phraseThree = new Phrase("Tough times ");
      phrasesList.push(phraseThree);
//#4
      let phraseFour = new Phrase(" hard work");
      phrasesList.push(phraseFour);
//#5
      let phraseFive = new Phrase("intelligence");
      phrasesList.push(phraseFive);
     
      return phrasesList;

  }
                              // step 5 
/**
      * Selects random phrase from phrases property
      * @return {Object} Phrase object chosen to be used
*/

      getRandomPhrase() {      // the method getRandomPhrase() will generate a random phrase from my list phrase.
            const randomNumber = Math.floor(Math.random() * this.phrases.length);   // generates random number between 0 and to "4 phrases that i have " this.phrases.length - 1 and im storing it in a variable randomNumber
            return this.phrases[randomNumber];   // return the object in this.phrases at position randomNumber
      };

                      // S T E P  7//
    
      startGame() {  //starts game by selecting a random phrase; and it displays it to  the user
      $('#overlay').hide(); // im hidding the overlay screen. after that the user can see the game.
      this.activePhrase=this.getRandomPhrase(); // getting the random phrase and storing it as the activePhrase
      this.activePhrase.addPhraseToDisplay(); // taking the active phrase and displaying it on the game screen 



      //////////////////////////
                                    //extra credit// it works
      ////////////////////////
      //listen for keyup on the entire page content 'body'
      //https://www.w3schools.com/jquery/event_which.asp    .which event how to use it  defenition ""The event.which property returns which keyboard key or mouse button was pressed for the event.""
      /* $("body").on('keyup', (e) => {
          if (e.which !== 0) {
              const chartTyped = String.fromCharCode(e.which).toLowerCase(); // defenition of String.fromCharCode // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
              if (chartTyped.match(/[a-zA-Z]/)) { //only react to alphabetic characters
                  const correspondingButton = $('#qwerty button:contains("' + chartTyped +'")');
                  if (!correspondingButton.prop('disabled'))
                  {
                      
                      this.handleInteraction(correspondingButton);     //pass the button into handleInteraction, only if it isn't disabled                                                             
                  }                                                     //preventing multiple guesses for the same button/letter
              }
          }
      }); */
  }

  /**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
      handleInteraction(button) {      // im passing E.Target in the app.js file so everthignthat is button is e.target
            button.prop('disabled', true);  // im disabling the "KEY " that they press.
            const letterChosen = button.text(); // im storing the key value of whatever key they press
            if (this.activePhrase.checkLetter(letterChosen))  // im checking if the letter that the user press is correct.
            {
                  button.addClass('chosen'); // giving the class of chosen to whatever  key they press
                  this.activePhrase.showMatchedLetter(letterChosen); // we are showing the match letter
            
                   if (this.checkForWin())  // checking if they won 
              {
                 //  const lastHeart = $('#scoreboard li').first();
                 // lastHeart.removeClass('blink-image');
                        this.gameOver(true);   //ending the game
              }
            } else{
            button.addClass('wrong'); // is giving the class of wrong
            this.removeLife(); // removing a life
            }
            };
            /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
    won
*/
      checkForWin() {  // it check for win
            const showList = document.querySelectorAll('.show');  // im storing anything with the class of show, 
            const letterList = document.querySelectorAll('.letter') // anything with the class of letter is being stored 
            if (showList.length === letterList.length) {  // cheking if the amount of letter with the class of show is equal to total number of letters
                   return true; 
            } else {
                   return false;
      }
            };
/**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
   <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
*/
removeLife() {  // this remove life 
      this.missed = this.missed + 1; // im adding 1 to misssed property
      const lostHearts = "images/lostHeart.png"; // storing the image of lost heart in the varaible of  lostHearts

      //the next heart to be changed will be the last one which isn't already in class lost
      const avaliablelHeart = $('#scoreboard li:not(.lost)').last();

      const avaliablelHeartImg = avaliablelHeart.find('img');   // finding the image of the image of hearts
      avaliablelHeartImg.attr('src', lostHearts);  // replacing blue hearts to gray hearts, if user losses a life 
      avaliablelHeart.addClass('lost');   // replacing the class to "LOST"

      /* if (this.missed == 4)
      {
          const lastHeart = $('#scoreboard li:not(.lost)').first();
          lastHeart.addClass('blink-image');
      } */
      
      if (this.missed === 5) // testing if user has missed 5 time , game is over
      {
          //const lastHeart = $('#scoreboard li').first();
          //lastHeart.removeClass('blink-image');
                  this.gameOver(false); // game over
      }
      };
  /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
        <h1 id="game-over-message"></h1>
 */
      gameOver(isGameWon) {   
            const overlay = $('#overlay'); 
            overlay.show();  // showing the overlay screen again
       if   (isGameWon){
            
            $('#game-over-message').text("Congratulations You Won "); // messege for win using JS
            overlay.removeClass('start'); //  removes the class of start
            overlay.addClass('win'); // add class of win by chaning the css depending if they won 
           
      }else {
            $('#game-over-message').text("Sorry Try Again"); // messege for lost game
            overlay.removeClass('start');
            overlay.addClass('lose');  // adds class to lose , this will change the css when they lose
            }

           // $("body").off('keyup');
      };

  /**
* Resets game board to start a new game
* 
*/
      resetGameBoard() {
            //clear all phrase letter panels
            $('#phrase ul').empty(); // removing the active phrase from the screen
            //reset DOM keyboard
            const allButtons = $("#qwerty button");
            allButtons.prop('disabled', false);
            allButtons.removeClass('chosen');
            allButtons.removeClass('wrong'); 

            //set hearts back to 5 full
            const Hearts = "images/liveHeart.png";
            const allHearts = $('#scoreboard li');
            
            allHearts.find('img').attr('src', Hearts);
            allHearts.removeClass('lost');

            
            $('#overlay').removeClass('lose');//reset overlay back to neutral state (so the proper class alone - win or loss - will
            $('#overlay').removeClass('win');//be there at the end of the next game)
      }
      }
      