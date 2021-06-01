
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from "./views/addRecipeView.js";

// if (module.hot) {
//     module.hot.accept();
// }

const controlRecipes = async function() {
    const recipeId = window.location.hash.slice(1);
    if (!recipeId) return;
            
    recipeView.renderSpinner();

    if (model.state.search.results?.length > 0) {
        resultsView.update(model.getResultsPage(model.state.search.currentPage));
    }
    try {
        await model.loadRecipe(recipeId);
        const recipe = model.state.recipe;

        console.log(`recipe = ${recipe}`);
        recipeView.render(recipe);
        bookmarksView.update(model.state.bookmarks);
    } catch (err) {
        console.log(err);
        recipeView.renderError()
    }
}

const controlSearchResults = async function() {
    const query = searchView.getQuery();
    if (!query) return; 

    resultsView.renderSpinner();
    try {
        await model.loadSearchResults(query);
        searchView.clearInput();
        console.log(`STATE = ${model.state.search}`);        
        const results = model.getResultsPage(1);
        resultsView.render(results);
        paginationView.render(model.state.search);
    } catch (err) {
        console.log(err);
        resultsView.renderError();
    }
}

const controlPagination = function(page) {
    const results = model.getResultsPage(page);
    resultsView.render(results);
    paginationView.render(model.state.search);
}

const controlServings = function(newServings) {
    model.updateServings(newServings);
    // recipeView.render(model.state.recipe);
    recipeView.update(model.state.recipe);
}

const controlBookmark = function() {
    if (model.state.recipe.bookmarked) {
        model.deleteBookmark(model.state.recipe.id);
    } else {
        model.addBookmark(model.state.recipe);
    }
    recipeView.update(model.state.recipe);
    bookmarksView.update(model.state.bookmarks);
}

const controlBookmarks = function() {
    bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = async function(newRecipe) {
    console.log(newRecipe);
    try {
        await model.uploadRecipe(newRecipe);
        recipeView.render(model.state.recipe);
        addRecipeView.renderMessage();
        bookmarksView.render(model.state.bookmarks);
        window.history.pushState(null, '', `#${model.state.recipe.id}`);

    } catch(err) {
        console.error(err);
        addRecipeView.renderError(err);
    }
}

const init = function() {
    recipeView.addHandlerRenderer(controlRecipes);
    recipeView.addHandlerServingsChange(controlServings);
    recipeView.addHandlerBookmark(controlBookmark);
    searchView.addHandlerSearch(controlSearchResults);    
    paginationView.addHandlerClick(controlPagination);
    bookmarksView.addHanderRender(controlBookmarks);
    addRecipeView.addHandlerSubmit(controlAddRecipe);
}
init();
