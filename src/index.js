import "./style.css";
import generateHome from "./createHome";
import generateMenu from "./createMenu";

generateHome();

const content = document.querySelector('#content');

function clearContent() {
    content.innerHTML = '';
}

const menuButton = document.querySelector('#menu-btn');
const homeButton = document.querySelector('#home-btn');
const barristaButton = document.querySelector('#barrista-btn');

menuButton.addEventListener('click', () => {
    console.log('hi');
    clearContent();
    generateMenu();

});

homeButton.addEventListener('click', () => {
    clearContent();
    generateHome();

});