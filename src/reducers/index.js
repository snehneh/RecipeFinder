import {combineReducers} from 'redux';
import {SET_RECIPES, FAVOURITE_RECIPES} from '../actions';

function recipes(state = [], action){
    switch(action.type){
        case SET_RECIPES:
        return action.items;

        default:
        return state;

    }
}

function favouriteRecipes(state = [], action){
    switch(action.type){
        case FAVOURITE_RECIPES:
        state = [...state, action.items]
        return state;

        default:
        return state;
    }
}

const rootReducer = combineReducers({ recipes , favouriteRecipes});

export default rootReducer;