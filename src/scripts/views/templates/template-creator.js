import CONFIG from '../../global/config';

const createHeroTemplate = (resto) => `
	<section class="hero">
	 <h1 class="hero__title"> ${resto.restaurant.name} </h1>
	 <h4 class="hero__subtitle"> ${resto.restaurant.city} • ⭐️ ${resto.restaurant.rating} • ${resto.restaurant.address} </h4>
	 <p class="hero__description"> ${resto.restaurant.description.substring(0, 200)} </p>
	   <img class="hero__image" src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" alt="${resto.name}">
	</section>
`;

const createRestoDetailTemplate = (resto) => `
	<section class="resto">
		<div class="resto__container">
		  <h2 class="resto__label"> Available Foods Menu </h2>
		  <div class="resto__list__menu">
				<figure class="resto__menu__food">
					<img src="https://image.freepik.com/free-vector/salmon-sushi-with-chopstick-plate-cartoon-icon-illustration-japanese-food-icon-concept-isolated-flat-cartoon-style_138676-1727.jpg" alt="Food-name">
					<h4 class="resto__info"> Food Name </h4>
					<h4 class="resto__about"> About </h4>
		    </figure>
		  </div>
		  <h2 class="resto__label"> Available Drinks Menu </h2>
		  <div class="resto__list__menu">
				<figure class="resto__menu__food">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMwcy4W3trzW4F4JrI2oT_skwzDmYugHzEg&usqp=CAU" alt="Food-name">
					<h4 class="resto__info"> Food Name </h4>
					<h4 class="resto__about"> About </h4>
				</figure>
		  </div>
		</div>
  </section>
`;

const createAvailableFoodsMenu = (food, foodsImages) => `
		<figure class="resto__menu__food">
			<img src="${foodsImages}" alt="${food.name}">
			<h4 class="resto__about"> ${food.name} </h4>
		</figure>
`;

const createAvailableDrinksMenu = (drink, drinkImages) => `
		<figure class="resto__menu__food">
			<img src="${drinkImages}" alt="${drink.name}">
			<h4 class="resto__about"> ${drink.name} </h4>
		</figure>
`;

const createCustomerReview = (review) => `
		<div class="reviewer">
		  <img src="https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png" alt="">
		  <div class="reviewer__name">
		    <p> ${review.name} </p>
		  </div>
		  <div class="reviewer__date">
		    <p> ${review.date} </p>
		  </div>
		  <div class="reviewer__comentar">
		      <textarea name="" id="" cols="18" rows="6" readonly>
${review.review}
		      </textarea>
		  </div>
		</div>
`;

const createRestoItemTemplate = (resto) => `
	<a href="#/detail/${resto.id}" class="resto__selector">
		<figure>
				<img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
				<h4 class="resto__info"> ${resto.city} • ⭐️ ${resto.rating} </h4>
				<h4 class="resto__about"> About </h4>
				<h3 class="resto__title" href="#/detail/${resto.id}"> ${resto.name} </h3>
				<p class="resto__description"> ${resto.description.substring(0, 150)} </p>
		</figure>
	</a>
`;

const createLikeButtonTemplate = () => `
	<button aria-label="like this resto" id="likeButton" class="like">
		<i class="fa fa-heart-o" aria-hidden="true"></i>
	</button>
`;

export {
	createHeroTemplate,
	createRestoItemTemplate,
	createRestoDetailTemplate,
	createAvailableFoodsMenu,
	createAvailableDrinksMenu,
	createCustomerReview,
	createLikeButtonTemplate
};
