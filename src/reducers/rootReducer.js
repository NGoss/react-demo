const { set } = require('immutable')

export const rootReducer = (state = {}, action) => {
	switch(action.type) {
		case 'LOAD_RECIPES':
			return set(state, 'recipes', action.recipes)
		case 'OPEN_DETAIL_MODAL':
			return set(state, 'overlayRecipeId', action.id)
		case 'RESET_DETAIL_MODAL':
			return set(state, 'overlayRecipeId', null)
		default:
			return state
	}
}