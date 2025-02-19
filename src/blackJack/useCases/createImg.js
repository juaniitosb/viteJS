/**
 * 
 * @param {String} card ejemplo "2C"
 * @param {Boolean} flag true or false redirect img 
 */        
export const createCard = (card, flag,imgP,imgI) => {
    //<img src="assets/cartas/2C.png" alt="" class="carta">
    const imgCre = document.createElement("img");
    imgCre.src = `assets/cartas/${card}.png`
    imgCre.classList.add("carta");
    flag ? imgP.append(imgCre) : imgI.append(imgCre);

}