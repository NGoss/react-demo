import axios from 'axios'

export default {
	fetchRecipes: () => {
		return axios.get('http://dynamicapi.foinse.io/recipes', {
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		});
	},
	deleteRecipe: (id) => {
		return axios.delete('http://dynamic.foinse.io/recipes/' + id, {
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		})
	}
}