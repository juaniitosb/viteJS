//valor de la carta 
/**
 * 
 * @param {String} card ej "2D""2C""2S""2H"
 * @returns 
 */
export const valueCard = (card) => {
    let valueTranformated = card.substring(0, card.length - 1);
    return (isNaN(valueTranformated)) ? (valueTranformated == "A") ? 11 : 10
        : valueTranformated * 1;
}