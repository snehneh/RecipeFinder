import React, { Component } from 'react';
import SearchRecipes from './searchRecipes';
import RecipeList from './recipeList';
import '../styles/index.css'

class App extends Component {
    render() {
        return (
            <div>
                <h2>Recipe finder</h2>
                <SearchRecipes/>
                <RecipeList/>
            </div>
        )
    }
}

export default App;
