import {subcategoryName} from './content.js';
import CreateHomePage from './homepage.js';
import CreateContentPage from './contentpage.js';

export default function CreateSubCategoriesPage(value) {
    const subcategoriesWrapper = document.createElement('div');
    subcategoriesWrapper.classList.add('top-content__home-wrapper');
    subcategoriesWrapper.id = 'subsubcategories-page';

    const subcategories = document.createElement('div');
    subcategories.classList.add('top-content__home');
    subcategories.classList.add('others-page');

    const titleH2 = document.createElement('h2');
    titleH2.classList.add('top-content__title');
    titleH2.innerHTML = value;

    const backArrow = document.createElement('div');
    backArrow.classList.add('top-content__back-arrow');
    backArrow.addEventListener('click', () => {
        const bgContent = document.querySelector('.top-content');
        bgContent.classList.remove('content-bg');
        bgContent.classList.add('home-bg');
        const boxProcedure = document.querySelector('#box-procedure');
        boxProcedure.innerHTML = '';
        boxProcedure.appendChild(CreateHomePage());
    })

    const backArrowImg = document.createElement('img');
    backArrowImg.src = 'img/icons/arrow_down.svg'
    backArrow.appendChild(backArrowImg);

    subcategoriesWrapper.appendChild(titleH2);
    subcategoriesWrapper.appendChild(backArrow);
    subcategoriesWrapper.appendChild(subcategories);


    subcategoryName.forEach(elem => {
        const homeBox = document.createElement('div');
        homeBox.classList.add('top-content__home-box');
        homeBox.addEventListener('click', () => {
        const boxProcedure = document.querySelector('#box-procedure');
        boxProcedure.innerHTML = '';
        boxProcedure.appendChild(CreateContentPage(elem, value));
    });
    const homeTitle = document.createElement('p');
    homeTitle.classList.add('top-content__home-title');
    homeTitle.innerHTML = elem;

    const homeImage = document.createElement('div');
    homeImage.classList.add('top-content__home-image');

    const image = document.createElement('img');
     image.src = 'img/icons/administ_post.svg';

    homeImage.appendChild(image);
    homeBox.appendChild(homeTitle);
    homeBox.appendChild(homeImage);
    subcategories.appendChild(homeBox);

    });
    return subcategoriesWrapper;
}
