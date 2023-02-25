import {generateHome} from './modules/generate_home.js';
import {generateContact} from './modules/generate_contact.js';
import {generateMenu} from './modules/generate_menu.js';
import{generateNav} from './modules/generate_nav.js';
import './styles.css';

const content = document.getElementById('content');
content.textContent = '';

const home = getContent(generateHome());
const contact = getContent(generateContact());
const menu = getContent(generateMenu());

const PAGE_HOME = 'home';
const PAGE_CONTACT = 'contact';
const PAGE_MENU = 'menu';

function getContent(element){
    element.classList.add('generated-page');
    return element;
}

const pages = {
    currentPage: home,
    pages: {
        home: home,
        contact: contact,
        menu: menu
    },
    setPage: (page)=>{
        content.removeChild(pages.currentPage);
        content.appendChild(page);
        pages.currentPage = page;
    }
};

export {pages};

const nav = generateNav();
content.appendChild(nav);
content.appendChild(home);