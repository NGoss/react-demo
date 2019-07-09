import React, { Component } from 'react'
import 'styles/product/recipe.scss'

import randomColor from 'randomcolor'

import Card from 'components/shared/card'
import IngredientsList from 'components/shared/ingredients-list'

import listIcon from 'resources/list-alt-regular.svg'

class Recipe extends Component {
	constructor(props) {
		super(props)
		this.backgroundColor = randomColor({format: 'rgba', alpha: 0.4, luminosity: 'dark'})
	}
	render() {
		const { recipe, index } = this.props
		const { title, imageUrl, blurb, ingredients } = recipe
		
		return (
			<Card>
				<div className="recipe__banner" style={{
						backgroundImage:`linear-gradient(
											${this.backgroundColor},
											${this.backgroundColor}
										 ), url(${imageUrl})`
					}}><h2>{title}</h2></div>
				<div className="recipe__blurb">{blurb}</div>
				<div className="recipe__ingredients-list">
					<IngredientsList label={`${index}-${title.replace(/ /g, '')}`} //remove whitespace from title as label
						ingredients={ingredients} />
				</div>
				<div className="recipe__action-footer" onClick={() => this.props.openRecipeModal(recipe.id)}>
					<img alt="" src={listIcon} className="recipe__action-footer__icon"/>
					<span className="recipe__action-footer__text">View Recipe</span>
				</div>
			</Card>
		)
	}
}

export default Recipe