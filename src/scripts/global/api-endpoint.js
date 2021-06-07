import CONFIG from './config';

const API_ENDPOINT = {
	HOME: `${CONFIG.BASE_URL}list`,
	DETAIL: (id) => `${CONFIG.BASE_IMAGE_URL}detail/${id}`,
};

export default API_ENDPOINT;
