//funcion de pedir cartas
/**
 * 
 * @param {Array<string>} deck arreglo de las cartas 
 * @returns {Object} objeto eliminado 
 */
 export const addCard = (deck) => {
    if (deck.length == 0) {
        throw new Error("no existe cartas en el maso");

    }
    return deck.shift()

}