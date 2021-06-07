import API_ENDPOINT from '../global/api-endpoint';

class RestoDBSource {
	static async restoFoods() {
		const response = await fetch(API_ENDPOINT.HOME);
		const responseJson = await response.json()
		return responseJson.restaurants;
	}
	
	static async detailFoods(id) {
		const response = await fetch(API_ENDPOINT.DETAIL(id));
		return response.json();
	}
}

export default RestoDBSource;