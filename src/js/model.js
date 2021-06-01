import { async } from "regenerator-runtime";
import { API_KEY, API_URL } from "./config.js";
import { AJAX } from "./helpers.js";

import { RESULTS_PER_PAGE } from "./config.js";

export const state =  {
    recipe: {},
    search: {
        query: '',
        results: [],
        currentPage: 0
    },
    bookmarks: []    
}

export const loadRecipe = async function(recipeId) {

    const data = await AJAX(`${API_URL}${recipeId}`)
    console.log(data.data);
    const {recipe} = data.data;
    state.recipe = _createRecipeObject(recipe);
    //  = {
    //     id: recipe.id,
    //     publisher: recipe.publisher,
    //     sourceUrl: recipe.source_url,
    //     imageUrl: recipe.image_url,
    //     title: recipe.title,
    //     servings: recipe.servings,
    //     cookingTine: recipe.cooking_time,
    //     ingredients: recipe.ingredients
    // };    

    if (state.bookmarks.some(bookmark => bookmark.id === recipeId)) {
        state.recipe.bookmarked = true;
    } else {
        state.recipe.bookmarked = false;
    }
    console.log(state.recipe);

}

export const getResultsPage = function(page) {
    state.search.currentPage = page;
    return state.search.results.slice((page - 1) * RESULTS_PER_PAGE, page * RESULTS_PER_PAGE);
}

export const loadSearchResults = async function(query) {
    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`); // Vunnerable to SQL injection?
    state.search = {
        query,
        results: data.data.recipes.map (recipe => {
            return {
                id: recipe.id,
                publisher: recipe.publisher,
                sourceUrl: recipe.source_url,
                imageUrl: recipe.image_url,
                title: recipe.title,
                ...(recipe.key && { key: recipe.key })
            }
        })        
    }
}

export const updateServings = function(newServings) {
    if (newServings < 1) return;

    const oldServings = state.recipe.servings;
    state.recipe.servings = newServings;
    state.recipe.ingredients.forEach(ingredient => {
        ingredient.quantity = (Number(ingredient.quantity) / oldServings * newServings);
        console.log(ingredient);
    });
}

const persistBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

const clearBookmarks = function() {
    localStorage.removeItem('bookmarks');
}

export const addBookmark = function(recipe) {
    state.bookmarks.push(recipe);
    if (recipe.id === state.recipe.id) {
        state.recipe.bookmarked = true;
        persistBookmarks();
    }
}

export const deleteBookmark = function(recipeId) {
    if (state.bookmarks.some(bookmark => bookmark.id === recipeId)) {
        state.bookmarks.splice(state.bookmarks.findIndex(element => element.id === recipeId));
        state.recipe.bookmarked = false;
        persistBookmarks();
    }
}

export const uploadRecipe = async function(newRecipe) {

    const recipe = {        
        publisher: newRecipe.publisher,
        source_url: newRecipe.sourceUrl,
        image_url: newRecipe.image,
        title: newRecipe.title,
        servings: newRecipe.servings,
        cooking_time: newRecipe.cookingTime,
        ingredients: Object.entries(newRecipe)
            .filter(entry => entry[0].startsWith("ingredient") && entry[1])
            .map(ingredient => {
                const ingArr = ingredient[1].split(',').map(el => el.trim());
                if (ingArr.length !== 3) throw new Error("'Wrong ingredient fromat! Please use the correct format :)'")
                const [quantity, unit, description] = ingArr;
                return {quantity: (quantity ? +quantity : null), unit, description};
            })
    }

    const createdRecipe = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = _createRecipeObject(createdRecipe.data.recipe);  
    addBookmark(state.recipe);    
    console.log(state.recipe);
}

const _createRecipeObject = function(data) {
    console.log("Creating recipe object:");
    console.log(data);
    return {
        id: data.id,
        publisher: data.publisher,
        sourceUrl: data.source_url,
        imageUrl: data.image_url,
        title: data.title,
        servings: data.servings,
        cookingTine: data.cooking_time,
        ingredients: data.ingredients,
        ...(data.key && { key: data.key })
    };    
}

const init = function () {
    clearBookmarks();
    const storage = localStorage.getItem('bookmarks');
    console.log(storage);
    if (storage) {
        state.bookmarks = JSON.parse(storage);
    }
};
init();