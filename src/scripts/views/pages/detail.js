import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/resto-source';
import EXTRA from '../../DATA';

import {
  createHeroTemplate,
  createRestoItemTemplate,
  createAvailableFoodsMenu,
  createAvailableDrinksMenu,
  createCustomerReview
} from '../templates/template-creator';

const Detail = {
  async render() {
     return `
      <div id="resto"> </div>
      <section class="resto">
        <div class="resto__container">
          <h2 class="resto__label"> Available Foods Menu </h2>
            <div class="resto__list__menu" id="foodsMenu">
            </div>
        </div>
        <div class="resto__container resto__container__drinks">
          <h2 class="resto__label"> Available Drinks Menu </h2>
          <div class="resto__list__menu" id="drinksMenu">
          </div>
        </div>
        <div class="resto__container">
          <h2 class="resto__label"> What people says about us! </h2>
          <div id="comentar">
            <div class="reviewer" id="review">
            </div>
          </div>
        </div>
      </section>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailResto = await RestoDBSource.detailResto(url.id);
    
    console.log(detailResto.restaurant.menus.foods);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML += createHeroTemplate(detailResto);
    
    const foodsMenuContainer = document.querySelector('#foodsMenu');
    detailResto.restaurant.menus.foods.forEach((food, index=0) => {
      foodsMenuContainer.innerHTML += createAvailableFoodsMenu(food, EXTRA.resto[index].food);
    });
    
    const drinksMenuContainer = document.querySelector('#drinksMenu');
    detailResto.restaurant.menus.drinks.forEach((drink, index=0) => {
      drinksMenuContainer.innerHTML += createAvailableDrinksMenu(drink, EXTRA.resto[index].drink);
    })
    
    const reviewerContainer = document.querySelector("#review");
    detailResto.restaurant.customerReviews.forEach((review) => {
      reviewerContainer.innerHTML += createCustomerReview(review);
    });
  },
};
 
export default Detail;