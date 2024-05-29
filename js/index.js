let dateNode = document.querySelector(`#date`);
let outputNode = document.querySelector(`#output`);
let blackNode = document.querySelector(`#black`);
let lightNode = document.querySelector(`#light`);
let onOffLightNode = document.querySelector(`#onOffLight`);
let textLigntNode = document.querySelector(`#textLignt`);
let textLigntSecNode = document.querySelector(`#textLigntSec`);
let textLigntSecEndNode = document.querySelector(`#textLigntSecEnd`);
let blackbtnNode = document.querySelector(`#blackbtn`);
let ligntbtnNode = document.querySelector(`#ligntbtn`);
let onOffLightFooterNode = document.querySelector(`#onOffLightFooter`);

let buttonClicked = false;

dateNode.addEventListener(`click`, function () {
    if (!buttonClicked) {
        outputNode.innerHTML += `Игра выйдет 27.07.2024!`;
        buttonClicked = true;
    }
});

blackNode.addEventListener(`click`, function() {
    onOffLightNode.classList.add(`mainLight`);
    textLigntNode.classList.add(`textLignt`);
    textLigntSecNode.classList.add(`textSecondMainBlack`);
    textLigntSecEndNode.classList.add(`textSecondBlack`);
    blackbtnNode.classList.add(`textSecondBlack`);
    ligntbtnNode.classList.add(`textSecondBlack`);
    onOffLightFooterNode.classList.add(`footerLight`);
})

lightNode.addEventListener(`click`, function() {
    onOffLightNode.classList.remove(`mainLight`);
    textLigntNode.classList.remove(`textLignt`);
    textLigntSecNode.classList.remove(`textSecondMainBlack`);
    textLigntSecEndNode.classList.remove(`textSecondBlack`);
    blackbtnNode.classList.remove(`textSecondBlack`);
    ligntbtnNode.classList.remove(`textSecondBlack`);
    onOffLightFooterNode.classList.remove(`footerLight`);
})