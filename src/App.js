import React, { Component } from 'react'
import './App.scss'

import RecipeListContainer from 'containers/recipe-list-container'
import Drawer from 'components/shared/drawer'
import AppBar from 'components/shared/app-bar'

import RecipeDetailsContainer from 'containers/recipe-details-container'

class App extends Component {
  render() {
    return (
      <div className="root-container">
        <AppBar />
        <Drawer />
        <div className="root-container__recipes-container">
          <RecipeListContainer />
        </div>
        <RecipeDetailsContainer />
      </div>
    )
  }
}

export default App
