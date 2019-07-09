import React, { Component } from 'react'
import 'styles/product/recipe-list.scss'

import recipeApi from 'api/recipe-api'

import CircularProgress from '@material-ui/core/CircularProgress'

import RecipeContainer from 'containers/recipe-container'

class RecipeList extends Component {
	render() {
		const { recipes, selectRecipe } = this.props
		if (!recipes) {
			return (
				<CircularProgress className="loading-spinner"
					color={'inherit'}
					size={100} />
			)
		}
		return (
			<ul className="recipe-list">
				{
					recipes.map((recipe, index) =>
						<RecipeContainer index={index}
								recipe={recipe}/>
					)
				}
			</ul>
		)
	}
	componentDidMount() {
		recipeApi.fetchRecipes().then(this.props.loadRecipesFromApiResponse).catch(
		  (error) => {
			console.log(error)
		  }
		)
	  }
}

export default RecipeList