import { connect } from 'react-redux'

import { loadRecipes } from 'reducers/actions'

import RecipeList from 'components/product/recipe-list'

const mapStateToProps = (state) => {
	return {
		recipes: state.recipes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadRecipesFromApiResponse(response) {
			dispatch(loadRecipes(response.data))
		}
	}
}

const RecipeListContainer = connect(
	mapStateToProps,
	mapDispatchToProps)(RecipeList)

export default RecipeListContainer