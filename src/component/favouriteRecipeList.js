
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './recipeItem';


class FavouriteRecipeList extends Component {
    render() {
        return (
            <div>
                <h4 className = 'link'><Link to = '/'>Home</Link></h4>
                <h4>Favourite recipes </h4>
                {
                    this.props.favouriteRecipes.map((recipe, index) => {
                      return (
                        <RecipeItem 
                          key={index} 
                          recipe={recipe}
                          favouriteButton = {false}
                        />
                      )
                    })
                  }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        favouriteRecipes: state.favouriteRecipes
    }
  }
  
  export default connect(mapStateToProps, null)(FavouriteRecipeList)
