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

    getCard() {
      return this;
    }
    showCard() {
      return this.rank + ' of ' + this.suit;
    }

}
