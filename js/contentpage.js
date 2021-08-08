import {content} from './content.js';
import CreateHomePage from './homepage.js';
import CreateSubCategoriesPage from './subcategoriespage.js';

export default function CreateContentPage(contentValue, prevPageValue) {
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('top-content__home-wrapper');
    contentWrapper.id = 'subsubcategories-page';

    const subcategories = document.createElement('div');
    subcategories.classList.add('top-content__home');
    subcategories.classList.add('others-page');

    const titleH2 = document.createElement('h2');
    titleH2.classList.add('top-content__title');
    titleH2.innerHTML = contentValue;

    const backArrow = document.createElement('div');
    backArrow.classList.add('top-content__back-arrow');
    backArrow.addEventListener('click', () => {
        const boxProcedure = document.querySelector('#box-procedure');
        boxProcedure.innerHTML = '';
        boxProcedure.appendChild(CreateSubCategoriesPage(prevPageValue));
    })

    const backArrowImg = document.createElement('img');
    backArrowImg.src = 'img/icons/arrow_down.svg'
    backArrow.appendChild(backArrowImg);


    const homeButton = document.createElement('div');
    homeButton.classList.add('top-content__home-button');
    homeButton.addEventListener('click', () => {
        const bgContent = document.querySelector('.top-content');
        bgContent.classList.remove('content-bg');
        bgContent.classList.add('home-bg');
        const boxProcedure = document.querySelector('#box-procedure');
        boxProcedure.innerHTML = '';
        boxProcedure.appendChild(CreateHomePage());
    })

    const homeButtonImg = document.createElement('img');
    homeButtonImg.src = 'img/icons/home.svg'
    homeButton.appendChild(homeButtonImg);

    const contentText = document.createElement('p');
    contentText.classList.add('top-content__text-content');
    contentText.innerHTML = `${content.textContent}`;

    contentWrapper.appendChild(homeButton);
    contentWrapper.appendChild(titleH2);
    contentWrapper.appendChild(backArrow);
    contentWrapper.appendChild(contentText);

    return contentWrapper
}
