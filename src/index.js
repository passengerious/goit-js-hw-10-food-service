import './styles.css';
import menu from './menu.json';
import menuCardsTpl from './templates/menu-cards.hbs';


const menuRef = document.querySelector('.js-menu');
const menuMarkup = menuCardsTpl(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeCheckbox = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
themeCheckbox.addEventListener('change', onThemeChange);

function onThemeChange(event) {
    const theme = event.currentTarget.checked ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem('pageTheme', theme);
    
    if (event.currentTarget.checked) {
        bodyEl.classList.remove(Theme.LIGHT);
        bodyEl.classList.add(Theme.DARK);
    } else {
        bodyEl.classList.remove(Theme.DARK);
        bodyEl.classList.add(Theme.LIGHT);
    };


};
    if (localStorage.getItem('pageTheme') === Theme.DARK) {
    themeCheckbox.setAttribute('checked', 'true');
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    
};




