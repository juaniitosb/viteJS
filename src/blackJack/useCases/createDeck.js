import _ from "underscore";
/**
 * 
 * @param {Array<string>} letterCards -ej ["C", "D", "S", "H"]
 * @param {Array<string>} LetterEspecialCards -ej  ["A", "J", "Q", "K"]
 */
export const deckData = (letterCards, LetterEspecialCards) => {
    if ((!letterCards && !LetterEspecialCards)) {
    throw new Error("no hay data para crear deck");
    }

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (const letter of letterCards) {
            deck.push(i + letter)
        }
    }
    for (const letterP of letterCards) {
        for (const letterS of LetterEspecialCards) {
            deck.push(letterS + letterP)
        }
    }
    return  _.shuffle(deck)
    



}