/*
* Card class
* - stores object containing rank and suit
* - ability to return the card or show the card
*/
'use strict';
module.exports = class Card{
    constructor(rank, suit){
      this.rank = rank;
      this.suit = suit;
    }

    // returns the selected card
    getCard() {
      return this;
    }

    // shows the card
    showCard() {
      return this.rank + ' of ' + this.suit;
    }

}
