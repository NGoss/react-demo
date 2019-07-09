import React, { Component } from 'react'

import 'styles/shared/ingredients-list.scss'

class IngredientsList extends Component {
	render() {
		const { ingredients, label } = this.props
		return (
			<ul className="ingredients-list">
				{
					ingredients.map((ingredient, index) => (
						<li key={index} className="ingredients-list__item">
							<input id={`${label}-${index}`} type="checkbox" className="ingredients-list__item__checkbox" />
							<label htmlFor={`${label}-${index}`} className="ingredients-list__item__description">
								{ingredient.amount} {ingredient.name}
								<span className="ingredients-list__item__description__qualifier">{ingredient.qualifier}</span>
							</label>
						</li>
					))
				}
			</ul>
		)
	}
}

export default IngredientsList