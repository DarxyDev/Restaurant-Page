import { createSection_title } from "./generate_home";
const generateMenu = ()=>{
    const content = document.createElement('div');

    content.appendChild(createSection_title());
    content.appendChild(_createSection_meal('Fire', 'Hot!'));
    content.appendChild(_createSection_meal('Green Fire', 'Now with copper! Still hot!!!'));
    content.appendChild(_createSection_meal('Oxygen', 'Consider an add-on, makes it EXTRA HOT!!!'));
    return content;
}


export {generateMenu};


const _createSection_meal = (name, description)=>{
    const section = document.createElement('section');
    section.classList.add('menu-item');

    const title = document.createElement('h3');
    title.textContent = name;
    section.appendChild(title);

    const info = document.createElement('p');
    info.textContent = description;
    section.appendChild(info);


    return section;
}