import "./styles.css";
import { createCard } from "./home";

let cards = document.createElement('div');
cards.className = 'cards';
let description = document.querySelector('div');
description.className = 'description';
description.textContent = 'Ресторан "Вкусные истории" предлагает уникальный опыт, позволяя гостям не только насладиться вкусной едой, но и узнать больше о культуре и традициях разных стран. Меню разнообразно и включает в себя как классические, так и современные блюда, что делает его привлекательным для широкой аудитории.';
cards.append(description);
cards.append(createCard('Тематика', 'Ресторан посвящен кулинарным традициям разных стран, предлагая блюда, которые рассказывают истории о культуре и кухне этих стран.', './interior.jpg'));
cards.append(createCard('Целевая аудитория', 'Ресторан ориентирован на любителей гастрономических путешествий: семьи, пары и туристы, желающие попробовать что-то новое и необычное.', './community.jpg'));
cards.append(createCard('Специальные мероприятия', 'Регулярные кулинарные мастер-классы, дегустации вин и тематические вечера, посвященные определенной стране или кухне.', './specialEvents.jpg'));

let content = document.querySelector('#content');

content.append(cards);