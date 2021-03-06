/*
* Deck class
* - stores a Deck array containing 52 Card objects
* - ability to create the deck, shuffle the deck or pick a card... any card
*/
'use strict';
var Card = require('./Card.js');
const CARDSINDECK = 52;
const RANK = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K");
const SUITS = new Array("Clubs", "Diamonds", "Hearts", "Spades");
var theDeck = new Array(CARDSINDECK);

module.exports = class Deck {

  constructor() {
    theDeck = this.createDeck(theDeck);
  }

  // Creates the deck by adding each rank / suit into a single array of type Card
  createDeck(theDeck) {
    for (var n =0; n < SUITS.length; n++) {
      for (var m = 0; m < RANK.length; m++) {
        theDeck[n * RANK.length + m] = new Card(RANK[m],SUITS[n]);
      }
    }
    return theDeck;
  }

  // returns number of cards in deck
  getNumberOfCards() {
    return CARDSINDECK;
  }
  // returns the Deck as an object
  getDeck() {
    return theDeck;
  }

  // returns the card based upon which card was selected.  If 0 was passed, the top of the deck would be returned
  pickACardAnyCard(whichCard) {
    console.log('Your card is the: ' + theDeck[whichCard].showCard());
    theDeck.splice(whichCard,1);
    console.log('There are now only ' + theDeck.length + ' cards in the deck');
  }

  shuffleDeck() {
    var tempCard;
    var cardIndex;
    for (var x = 0; x < theDeck.length; x++){
      cardIndex = Math.floor(Math.random() * CARDSINDECK);
  //    console.log(cardIndex);
      tempCard = theDeck[x];
  //    if (theDeck[cardIndex] === undefined) { console.log('Index of ' + cardIndex);}
      theDeck[x] = theDeck[cardIndex];
      theDeck[cardIndex] = tempCard;
    }
  }
}
