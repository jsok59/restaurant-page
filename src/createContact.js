function generateContact() {

    const content = document.querySelector('#content');
    const container = document.createElement('div');
    container.classList = 'contact-container';
    content.appendChild(container);

    const name = document.createElement('h1');
    name.textContent = "Niyah Sok";

    const email = document.createElement('h3');
    email.textContent = "niyah_sok@cafeniyah.com";

    const phone_number = document.createElement('h3');
    phone_number.textContent = "123-456-7890";

    container.appendChild(name);
    container.appendChild(email);
    container.appendChild(phone_number);

}

export default generateContact;