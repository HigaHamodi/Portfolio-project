document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            imgUrl: './assests/projectsimg/landingPage1.png',
            title: 'חופשה במרחק נגיעה',
            description: 'גלו את החופשה החלומית שלכם במרחק נגיעה עם חבילות הנופש שלנו...',
            projectLink: './projects/land01vaction/land01vaction.html', 
            downloadLink: './projects/land01vaction.rar'
        },
        {
            imgUrl: './assests/projectsimg/landingPage2.png',
            title: 'קפה טוב לבוקר טוב',
            description: 'התחילו את היום שלכם בצורה הכי טובה עם כוס קפה טעימה מתוך מבחר הקפה שלנו...',
            projectLink: './projects/land02coffee/land02coffee.html',
            downloadLink: './projects/land02coffee.rar'
        },
        {
            imgUrl: './assests/projectsimg/landingPage3.png',
            title: 'Here & Now',
            description: 'תיהנו ממגוון של מתנות ופינוקים. גלו את אוסף הפריטים הייחודיים שלנו...',
            projectLink: './projects/land03herenow/land03herenow.html',
            downloadLink: './projects/land03herenow.rar'
        },
        {
            imgUrl: './assests/projectsimg/landingPage4.png',
            title: 'להוביל אותך קדימה',
            description: 'עם צוות היועצים המומחים והטכנולוגיה המתקדמת שלנו...',
            projectLink: './projects/land04leadyou/land04leadyou.html',
            downloadLink: './projects/land04leadyou.rar'
        },
        {
            imgUrl: './assests/projectsimg/landingPage5.png',
            title: 'להוביל אותך קדימה',
            description: 'עם צוות היועצים המומחים והטכנולוגיה המתקדמת שלנו...',
            projectLink: './projects/land05forward/land05forward.html',
            downloadLink: './projects/land05forward.rar'
        },
        {
            imgUrl: './assests/projectsimg/landingPage6.png',
            title: 'צ\'ייסר חינם',
            description: 'הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך...',
            projectLink: './projects/land06drink/land06drink.html',
            downloadLink: './projects/land06drink.rar'
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
        const cardSection = document.getElementById('gallery');
        const cardContainer = cardSection.querySelector('.content');

        projects.forEach(project => {
            const card = createCard(project);
            cardContainer.appendChild(card);
        });
    }

    initialize();
});
