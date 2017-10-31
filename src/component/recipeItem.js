import React, { Component } from 'react';
import { connect } from 'react-redux';
import {favouriteRecipe} from '../actions';

class RecipeItem extends Component {
    constructor(){
        super();
        this.state = {
            favorited: false
        }
    }

    favRecipe(recipe)  {
        this.props.favouriteRecipe(recipe);
        this.setState({favorited:true})
    }
    render() {
        let {recipe} = this.props;
        return (
            <div className = 'recipe-items'>
            { this.props.favouriteButton?
                    this.state.favorited ?
                    <div className = 'star'>
                        &#9733;
                    </div>
                    :
                    <div className = 'star'
                    onClick = {() => this.favRecipe(recipe)}>
                        &#9734;
                    </div>
                :
                <div></div>
            }
            <div className = 'recipe-text' >
            <a href = {recipe.title}>
                <h4 >{recipe.title}</h4>
            </a>
            <p>{recipe.ingredients}</p>
            <img
            src = {recipe.thumbnail}
            alt = {recipe.title}
            className = 'recipe-image'/>
            </div>
            </div>
        )
    }
}

export default connect(null, {favouriteRecipe})(RecipeItem)