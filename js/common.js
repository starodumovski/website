const header = document.getElementById("header");
const footer = document.getElementById("footer");
const currentYear = new Date().getFullYear();

function setLang (l) {
    document.body.classList.toggle('ru',l==='ru');
    document.body.classList.toggle('en',l==='en');
    document.getElementById('btn-ru').classList.toggle('active',l==='ru');
    document.getElementById('btn-en').classList.toggle('active',l==='en');
    localStorage.setItem('lang',l);
};


window.addEventListener('load', function () {
    this.document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="css/common.css">');

    header.innerHTML = `
    <a href="index.html" class="header-logo"><span data-lang="en">Home</span><span data-lang="ru">Главная</span></a>
    <ul class="header-links">
        <li><a href="resume.html" class="active"><span data-lang="en">Resume</span><span data-lang="ru">Резюме</span></a></li>
        <li>
            <div class="lang-toggle">
                <button class="lang-btn" onclick="setLang('ru')" id="btn-ru">RU</button>
                <button class="lang-btn" onclick="setLang('en')" id="btn-en">EN</button>
            </div>
        </li>
    </ul>
    `;

    footer.innerHTML = `
    <div style="display:flex;gap:1.5rem;">
        <span>&copy; starodumovski 2026-${currentYear}</span>
    </div>
    `;

    setLang(localStorage.getItem('lang') || 'ru');
});