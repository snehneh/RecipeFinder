export const SET_RECIPES = 'SET_RECIPES';
export const FAVOURITE_RECIPES = 'FAVOURITE_RECIPES';

export function setRecipes(items){
    return {
        type: SET_RECIPES,
        items
    }

}

export function favouriteRecipe(items){
    return{
        type: FAVOURITE_RECIPES,
        items
    }
}