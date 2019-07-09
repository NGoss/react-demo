import { connect } from 'react-redux'

import { resetOverlayRecipeId } from 'reducers/actions'

import RecipeDrawer from 'components/product/recipe-drawer'

const mapStateToProps = (state) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

const RecipeDrawerContainer = connect(
	mapStateToProps,
	mapDispatchToProps)(RecipeDrawer)

export default RecipeDrawerContainer