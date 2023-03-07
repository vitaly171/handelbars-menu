import templateCardsMenu from '../src/templates/menu-cards.hbs';
import menuData from './db/menu.json';
import './sass/main.scss';

const cardsContainer = document.querySelector('.js-menu');
const cardsMarkup = templateCardsMenu(menuData);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.body;
const switchEl = document.querySelector('#theme-switch-toggle');

bodyEl.addEventListener('change', onClassList);
switchEl.addEventListener('change', onClassList);

function onClassList(evt) {
  if (evt.target.checked) {
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
  } else {
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
  }
}
const themeInTime = localStorage.getItem('theme');

if (themeInTime === Theme.DARK) {
  bodyEl.classList.add(Theme.DARK);
  switchEl.checked = true;
} else {
  bodyEl.classList.add(Theme.LIGHT);
}

cardsContainer.insertAdjacentHTML('afterbegin', cardsMarkup);
