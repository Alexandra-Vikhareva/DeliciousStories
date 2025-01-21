import "./home.css";

function createCard(title, text, imageURL){
    let cardTitle = document.createElement('h3');
    let cardContet = document.createTextNode(text);
    let showContent = document.createElement('div');
    let fg = document.createElement('figcaption');
    let img = document.createElement('img');
    let after = document.createElement('span');
    let figure = document.createElement('figure');

    cardTitle.textContent = title;
    cardTitle.className = 'card-title';
    cardContet.className = 'card-content'
    showContent.className = 'show-content';
    showContent.append(cardTitle, cardContet);
    fg.append(showContent);
    img.src = imageURL;
    after.className = 'afetr';
    figure.append(img, fg, after);
    figure.classList.add('shape-box', 'shape-box_half');
    return figure
};

export {createCard, }