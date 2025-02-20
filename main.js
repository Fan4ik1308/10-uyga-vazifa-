
const userName = prompt("Введите ваше имя:");


const nameElement = document.createElement("div");
nameElement.textContent = `Ваше имя: ${userName}`;

const age = prompt("Введите ваш возраст:");
const ageElement = document.createElement("div");
ageElement.textContent = `Ваш возраст: ${age}`;


nameElement.classList.add("name-display");
ageElement.classList.add("age-display");

document.body.prepend(nameElement); 
document.body.appendChild(ageElement);


const style = document.createElement("style");
style.textContent = `
    .name-display, .age-display {
        font-size: 24px;
        color: white;
        background-color: #4CAF50;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        margin-top: 20px;
    }
`;
document.head.appendChild(style);