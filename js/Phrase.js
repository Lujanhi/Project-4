/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// step 6 add comments
 // Go through the phrase and create <li> tags holding each letter and space. (I used a for loop)
        // Use the "hide letter" class for letters and the "space" class for spaces
        // Append each character to the #phrase ul (See below for how it will look as per example_phrase_html)

        /******************************************************************
            <div id="phrase" class="section">
                <ul>
                    <li class="hide letter h">h</li>
                    <li class="hide letter o">o</li>
                    <li class="hide letter w">w</li>
                    <li class="space"> </li>
                    <li class="hide letter a">a</li>
                    <li class="hide letter r">r</li>
                    <li class="hide letter e">e</li>
                    <li class="space"> </li>
                    <li class="hide letter y">y</li>
                    <li class="hide letter o">o</li>
                    <li class="hide letter u">u</li>
                </ul>
            </div>
        *******************************************************************/

class Phrase {  //CREATING PHRASE CLASS (Entire Javascript file is this one class)
    constructor( phrase ) { // Initializes a phrase property set to the phrase
        this.phrase = phrase.toLowerCase(); //Takes the phrase being held and converts to lowercase
    }

    /**
    * Display phrase on game board
    */
 
    // https://www.w3schools.com/jquery/jquery_dom_add.asp
    /*   append() - Inserts content at the end of the selected elements
    prepend() - Inserts content at the beginning of the selected elements
     after() - Inserts content after the selected elements
    before() - Inserts content before the selected elements */
        
 
                    // *** Step 6 *****

    addPhraseToDisplay() {   // addPhraseToDisplay() is method will display the phrase
        let contentHTMLFormat = `<ul>`; // creating a new UL element. 
        for (let i = 0; i < this.phrase.length; i++) { 
            
            if (this.phrase[i] === " ") {
                contentHTMLFormat += `<li class="hide space"></li>`;
            
            } else {
                contentHTMLFormat += `<li class=" hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            }
        } 
        contentHTMLFormat += `</ul>`;
        const boxes = document.querySelector('#phrase ');
        boxes.innerHTML = contentHTMLFormat;
    
        }
    /**      S T E P   9
    * Checks if passed letter is in phrase
    * @param (string) letter - 
    */
    checkLetter(letter) {
        return (this.phrase.includes(letter))
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        $('#phrase ul .' + letter).removeClass("hide")
        $('#phrase ul .' + letter).addClass("show")
    };
}

        

        //////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////


        //addPhraseToDisplay() // METHOD WHICH ADDS LETTER PLACEHOLDERS (BOXES) TO THE GAMEBOARD AT THE START

            // Go through the phrase and create <li> tags holding each letter and space. (I used a for loop)
            // Use the "hide letter" class for letters and the "space" class for spaces
            // Append each character to the #phrase ul (See below for how it will look as per example_phrase_html)

                /******************************************************************
                    <div id="phrase" class="section">
                        <ul>
                            <li class="hide letter h">h</li>
                            <li class="hide letter o">o</li>
                            <li class="hide letter w">w</li>
                            <li class="space"> </li>
                            <li class="hide letter a">a</li>
                            <li class="hide letter r">r</li>
                            <li class="hide letter e">e</li>
                            <li class="space"> </li>
                            <li class="hide letter y">y</li>
                            <li class="hide letter o">o</li>
                            <li class="hide letter u">u</li>
                        </ul>
                    </div>
                *******************************************************************/
            
            
        //checkLetter() //METHOD THAT CHECKS EACH GUESSED LETTER TO SEE IF IT IS IN THE PHRASE
    
            // Go through the phrase and test if the guessed letter matches any letter in the phrase. (I used a for loop again)


        //showMatchedLetter() // METHOD THAT REVEALS EACH LETTER ON THE BOARD THAT MATCHES THE PLAYER'S GUESS
            // Remove the class of "hide" and add the class of "show"
    //}

