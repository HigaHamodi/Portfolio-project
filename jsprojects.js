document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            imgUrl: './assests/jsimg/calculator.png',
            title: 'Calculator',
            description: 'A feature-rich calculator application for performing basic and advanced mathematical operations with ease.',
            projectLink: './jsprojects/calculator/index.html',
        },
        {
            imgUrl: './assests/jsimg/creidt.png',
            title: 'Credit Card',
            description: 'Manage your finances with ease and security using our Credit Card application.',
            projectLink: './jsprojects/creidtCard/index.html',
        },
        
        {
            imgUrl: './assests/jsimg/minigallery.png',
            title: 'Mini Gallery',
            description: 'Explore a unique collection of gifts and indulgent items in our beautifully curated mini gallery.',
            projectLink: './jsprojects/miniGallery/index.html',
        },
        {
            imgUrl: './assests/jsimg/quote.png',
            title: 'Quote & To-Do List',
            description: 'Effortlessly organize your tasks and get inspired with our Quote & To-Do List application.',
            projectLink: './jsprojects/Quote&todolist/index.html',
        },
        {
            imgUrl: './assests/jsimg/shopingCart.png',
            title: 'Shopping Cart',
            description: 'Shop confidently using our advanced Shopping Cart technology and expert product guidance.',
            projectLink: './jsprojects/shopingCart/index.html',
        },
        {
            imgUrl: './assests/jsimg/xo.png',
            title: 'Tic-Tac-Toe Game',
            description: 'Enjoy hours of fun and challenge your friends and family with our Tic-Tac-Toe game.',
            projectLink: './jsprojects/Xo/index.html',
        },
    ];
    

    function createCard(project) {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
        <div class="card-img">
          <img src="${project.imgUrl}" alt="Project Image">
        </div>
        <div class="card-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.projectLink}" class="btnproject"">מעבר לפרויקט</a>
        </div>
      `;

        return card;
    }

    function initialize() {
        const cardSection = document.getElementById('jsgallery');
        const cardContainer = cardSection.querySelector('.content');

        projects.forEach(project => {
            const card = createCard(project);
            cardContainer.appendChild(card);
        });
    }

    initialize();
});
