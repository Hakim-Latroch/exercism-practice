// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const double = deck.map((card)=> card*2)
  return double;
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
return deck.reduce((accumulator,currentCard)=>{
    if(currentCard ===3){
      for(let i=0 ; i<3;i++){
        accumulator.push(currentCard);
      }     
    }
  else{
    accumulator.push(currentCard)
  }
   return accumulator;
    
  },[])

}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const halfDeck = (deck.length/2)-1;
  return deck.splice(halfDeck,2)
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const newDeck = [...deck];
  const firstC = newDeck.splice(0,1);
  const lastC = newDeck.splice(-1,1)
  const halfDeck = (newDeck.length/2);
  newDeck.splice(halfDeck, 0, lastC[0],firstC[0])
    return newDeck;
 
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((card)=>card===2 )
  
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a,b) => a-b) 
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
 return deck.reverse()
}
