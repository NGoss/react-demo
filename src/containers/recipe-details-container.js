import { connect } from 'react-redux'

import { resetOverlayRecipeId } from 'reducers/actions'

import RecipeDetails from 'components/product/recipe-details'

const mapStateToProps = (state) => {
	return {
		recipe: state.recipes ? state.recipes.find((recipe) => {
			return recipe.id === state.overlayRecipeId
		}) : null
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetOverlay() {
			dispatch(resetOverlayRecipeId())
		}
	}
}

const RecipeDetailsContainer = connect(
	mapStateToProps,
	mapDispatchToProps)(RecipeDetails)

export default RecipeDetailsContainer