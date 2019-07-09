export const loadRecipes = recipes => {
	return {
		type: 'LOAD_RECIPES',
		recipes
	}
}

export const openRecipeModal = id => {
	return {
		type: 'OPEN_DETAIL_MODAL',
		id
	}
}

export const resetOverlayRecipeId = () => {
	return {
		type: 'RESET_DETAIL_MODAL'
	}
}