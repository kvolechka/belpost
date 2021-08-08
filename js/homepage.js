import {categoryName} from './content.js';
import CreateSubCategoriesPage from './subcategoriespage.js';

export default function CreateHomePage() {
   const homeCategories = document.createElement('div');
   homeCategories.classList.add('top-content__home');
   homeCategories.id = 'home-page';

   categoryName.forEach(elem => {
      const homeBox = document.createElement('div');
      homeBox.classList.add('top-content__home-box');
      homeBox.addEventListener('click', () => {
         const bgContent = document.querySelector('.top-content');
         bgContent.classList.remove('home-bg');
         bgContent.classList.add('content-bg');
         const boxProcedure = document.querySelector('#box-procedure');
         boxProcedure.innerHTML = '';
         boxProcedure.appendChild(CreateSubCategoriesPage(elem));
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
      homeCategories.appendChild(homeBox);
   });
   return homeCategories
}
