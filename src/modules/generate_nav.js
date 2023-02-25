import {pages} from '../index.js';
const generateNav = ()=>{
    const nav = document.createElement('nav');

    Object.entries(pages.pages).forEach(entry =>{
        const [name, page] = entry;
        const button = document.createElement('button');
        button.textContent = name;
        button.addEventListener('click',()=>{
            pages.setPage(page);
        });
        nav.appendChild(button);
    })

    return nav;
}
export{generateNav};