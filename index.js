const inputForm = document.querySelector(".inputForm");
const output = document.querySelector(".output");

const getCard = () => {
    let fromStorage = localStorage.getItem('card');
    let parsing = JSON.parse(fromStorage);
    return parsing;
};

let card = getCard() || {};

const drawCard = (card1) => {
    output.innerHTML = "";

    const divNode = document.createElement('div');
    const nameNode = document.createElement('p');
    const surnameNode = document.createElement('p');
    const emailNode = document.createElement('p');
    const phoneNode = document.createElement('p');
    const addressNode = document.createElement('p');
    const descriptionNode = document.createElement('p');

    nameNode.textContent = `Name: ${card1.name}`;
    surnameNode.textContent = `Surname: ${card1.surname}`;
    emailNode.textContent = `E-mail: ${card1.email}`;
    phoneNode.textContent = `Phone: ${card1.phone}`;
    addressNode.textContent = `Business Address: ${card1.address}`;
    descriptionNode.textContent = `Description: ${card1.description}`;

    divNode.appendChild(nameNode);
    divNode.appendChild(surnameNode);
    divNode.appendChild(emailNode);
    divNode.appendChild(phoneNode);
    divNode.appendChild(addressNode);
    divNode.appendChild(descriptionNode);

    output.appendChild(divNode);
};

drawCard(card);

inputForm.addEventListener('submit', eventas => {
    eventas.preventDefault();

    let saveCard = {
        name: eventas.path[0][0].value,
        surname: eventas.path[0][1].value,
        email: eventas.path[0][2].value,
        phone: eventas.path[0][3].value,
        address: eventas.path[0][4].value,
        description: eventas.path[0][5].value,
    };

    localStorage.setItem('card', JSON.stringify(saveCard));

    drawCard(saveCard);
});
