import { connect } from 'react-redux'

import { openRecipeModal } from 'reducers/actions'

import Recipe from 'components/product/recipe'

const mapStateToProps = (state, ownProps) => {
	return {
		recipe: ownProps.recipe
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		openRecipeModal(id) {
			dispatch(openRecipeModal(id))
		}
	}
}

const RecipeContainer = connect(mapStateToProps, mapDispatchToProps)(Recipe)

export default RecipeContainer