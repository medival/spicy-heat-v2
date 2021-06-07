import CONFIG from '../../global/config';

const createRestoDetailTemplate = (resto) => `
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

export { createRestoItemTemplate, createRestoDetailTemplate };
