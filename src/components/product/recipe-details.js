import React, { Component } from 'react'
import 'styles/product/recipe-details.scss'

import Modal from 'components/shared/modal'
import IngredientsList from 'components/shared/ingredients-list'

class RecipeDetails extends Component {
	render() {
		if (!this.props.recipe) return null
		const { title, description, imageUrl, ingredients, steps} = this.props.recipe
		return (
			<Modal reset={this.props.resetOverlay}>
				<div className="details">
					<h1 className="details__title">{title}</h1>
					<div className="details__description">{description}</div>
					<div className="details__banner">
						<div className="details__banner__ingredients">
							<IngredientsList label={`fullrecipe-${title.replace(/ /g, '')}`} //remove whitespace from title as label
								ingredients={ingredients} />
						</div>
						<img src={imageUrl} className="details__banner__image" alt=""/>
					</div>
					<ul className="details__steps">
						<h2>Preparation</h2>
						{
							steps.map((step, index) => {
								return <li key={`step-${index}`} className="details__steps__step">{step}</li>
							})
						}
					</ul>
				</div>
			</Modal>
		)
	}
}

export default RecipeDetails