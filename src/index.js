import "./styles.css";
import { createCard } from "./home";
import { menu, descriptionMenu, Food } from "./menu";
import { infoAbout, hours, contacts } from "./about";

function drawHome(){
    const cards = document.createElement('div');
    cards.className = 'cards';
    const description = document.createElement('div');
    description.className = 'description';
    description.textContent = 'Ресторан "Вкусные истории" предлагает уникальный опыт, позволяя гостям не только насладиться вкусной едой, но и узнать больше о культуре и традициях разных стран. Меню разнообразно и включает в себя как классические, так и современные блюда, что делает его привлекательным для широкой аудитории.';
    cards.append(createCard('Тематика', 'Ресторан посвящен кулинарным традициям разных стран, предлагая блюда, которые рассказывают истории о культуре и кухне этих стран.', './interior.jpg'));
    cards.append(createCard('Целевая аудитория', 'Ресторан ориентирован на любителей гастрономических путешествий: семьи, пары и туристы, желающие попробовать что-то новое и необычное.', './community.jpg'));
    cards.append(createCard('Специальные мероприятия', 'Регулярные кулинарные мастер-классы, дегустации вин и тематические вечера, посвященные определенной стране или кухне.', './specialEvents.jpg'));

    const content = document.querySelector('#content');
    content.append(description);

    content.append(cards);
}

function drawMenu(){
    const content = document.querySelector('#content');
    for (let i = 0; i < menu.length; i++){
        let item = new Food(menu[i], descriptionMenu[i]);
        content.appendChild(item.returnDish());
    }
}

function drawAbout(){
    const content = document.querySelector('#content');
    content.append(infoAbout(), hours(), contacts());
}

function clearPage(){
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

drawHome();

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', () => {
        clearPage();
        drawHome();
    });

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', () => {
    clearPage();
    drawMenu();
});

const aboutBtn = document.querySelector('#about');
aboutBtn.addEventListener('click', () => {
    clearPage();
    drawAbout();
})