import { createSection_title } from "./generate_home";
const generateContact = ()=>{
    const content = document.createElement('div');
    content.appendChild(createSection_title());
    content.appendChild(_createSection_hours());
    content.appendChild(_createSection_contact());
    return content;
}

export {generateContact};

const _createSection_hours = ()=>{
    const section = document.createElement('section');

    const title = document.createElement('h3');
    title.textContent = 'Hours';
    section.appendChild(title);

    const info = document.createElement('p');
    info.textContent = 'We never close!!!';
    section.appendChild(info);

    return section;
}

const _createSection_contact = ()=>{
    const section = document.createElement('section');

    const title = document.createElement('h3');
    title.textContent = 'Phone? Fax? Telepathy?'
    section.appendChild(title);

    const info = document.createElement('p');
    info.textContent = 'What are these words?!? Just come on in, we never close!';
    section.appendChild(info);

    return section;
}