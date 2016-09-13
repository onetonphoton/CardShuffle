/*
* play cards
* run using node play.js
*/

'use strict';
var Deck = require('./Deck.js');
// Build deck
var aDeck = new Deck();

// Show unshuffled deck
console.log('Here is the deck, unshuffled');
console.log(aDeck.getDeck());

// Shuffle deck
console.log('Shuffing...');
aDeck.shuffleDeck();

// Show deck shuffled
console.log(aDeck.getDeck());

// Randomly pull a card from the deck (this could be changed to deal the top card of the deck by replacing it with requesting 0
aDeck.pickACardAnyCard(Math.floor(Math.random() * aDeck.getNumberOfCards()));
//aDeck.pickACardAnyCard(0);
