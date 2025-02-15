import "./about.css";

function infoAbout(){
    const text = `Добро пожаловать в ресторан "Вкусные истории"! Мы — это не просто место, где вы можете насладиться вкусной едой, но и кулинарное путешествие, в котором каждая тарелка рассказывает свою уникальную историю.
    Наш шеф-повар, [Имя Шефа], имеет международный опыт и страсть к исследованию культурных традиций еды. Он собрал команду талантливых поваров, которые помогают создавать блюда, основанные на семейных рецептах и аутентичных методах приготовления со всего мира. Мы уверены, что каждая культура имеет свою неповторимую кухню, и мы гордимся тем, что можем предложить вам лучшие блюда из этих традиций.
    В нашем ресторане мы используем только свежие и качественные ингредиенты, многие из которых мы получаем от местных фермеров и производителей. Мы стремимся поддерживать экологические инициативы, выбирая сезонные продукты и минимизируя использование пластика. Забота о планете и здоровье наших гостей — это неотъемлемая часть нашей философии.
    "Вкусные истории" — это не просто ресторан, это место для встреч с друзьями, семейных обедов, романтических ужинов и празднования особых событий. Мы создаем атмосферу, в которой наши гости могут расслабиться, пообщаться и насладиться кулинарными шедеврами в окружении уютного интерьера.
    Особое внимание мы уделяем и нашим напиткам, в нашем баре представлена широкая коллекция вин, коктейлей и местных спиртных напитков, которые прекрасно дополнят ваше блюдо.
    Мы приглашаем вас присоединиться к нашему кулинарному путешествию! Откройте для себя новые вкусы, наслаждайтесь атмосферой и позвольте нам стать частью ваших гастрономических приключений.`;
    const info = document.createElement('p');
    info.textContent = text;
    info.className = 'info';
    return info

}

function hours(){
    const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const hours = ['11:00 - 22:00', '11:00 - 22:00', '11:00 - 22:00', '11:00 - 23:00','11:00 - 23:00', '12:00 - 23:00','12:00 - 21:00'];
    const time = document.createElement('div');
    const lst = document.createElement('ul');
    for (let i=0; i < 7; i++){
        const li = document.createElement('li');
        li.textContent = `${days[i]}: ${hours[i]}`;
        lst.appendChild(li)
    }
    time.append(lst);
    return time
}

function contacts(){
    const adressInfo = document.createElement('div');
    const lst = document.createElement('ul');
    const adress ={'Телефон': '+7 (912) 123-45-67', 'Email': 'info@vkusnyeistorii.ru', 'Адрес': 'г. Санкт-Петербург, ул. Ленина, д. 10, 2-й этаж, помещение 5A'};
    for (let key of Object.keys(adress)){
        const li = document.createElement('li');
        li.textContent = `${key}: ${adress[key]}`;
        lst.appendChild(li)
    }
    adressInfo.append(lst);
    return adressInfo
}

export { infoAbout, hours, contacts, }
