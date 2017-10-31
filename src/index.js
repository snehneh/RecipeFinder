import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './component/App';
import FavouriteRecipeList from './component/favouriteRecipeList'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import { setRecipes } from './actions';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));
<App/>
ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = {App}/>
                <Route path = '/favourites' component = {FavouriteRecipeList}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
     document.getElementById('root'));