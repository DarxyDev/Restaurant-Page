const generateHome = () => {
    const content = document.createElement('div');
    content.appendChild(createSection_title());
    content.appendChild(_createSection_info());

    return content;
}

function createSection_title(){
    const section = document.createElement('section');
    section.classList.add("f-row");
    section.classList.add('title');

    const fire = document.createElement('img');
    fire.setAttribute('src', '../src/res/fire.png');
    fire.setAttribute('alt', 'fire image');
    fire.classList.add("img-title"); 

    const title = document.createElement('h1');
    title.textContent = 'Fire! Fire! Fire!';
    
    section.appendChild(fire);
    section.appendChild(title);
    section.appendChild(fire.cloneNode());

    return section;
}
export { generateHome, createSection_title };

function _createSection_info(){
    const section = document.createElement('section');

    const title = document.createElement('h3');
    title.textContent = 'Always hot!';

    const info = document.createElement('p');
    info.textContent = "Every meal is infused with the flame of our ancestors. Our highly trained and very poorly paid busboy delves deep into the jungle every morning to return with a piece of our families greatest treasure - the everlasting flame. You too can enjoy the heat of our family's legacy."
   
    section.appendChild(title);
    section.appendChild(info);
    return section;
}