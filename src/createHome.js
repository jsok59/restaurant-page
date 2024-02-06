import LocImage from './images/cafes-in-seoul.jpg';

function generateHome() {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    container.classList = 'home-container';
    const h1 = document.createElement('h1');
    h1.textContent = "Niyah Cafe";
    h1.classList = 'title';
    container.appendChild(h1);

    const h3 = document.createElement('h3');
    h3.textContent = "Rockville Town Square, Maryland";
    container.appendChild(h3);

    const image = new Image();
    image.src = LocImage;
    image.classList = 'loc_image';
    container.appendChild(image);
    content.appendChild(container);
}

export default generateHome;
