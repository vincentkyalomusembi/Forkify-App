import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js';
import 'regenerator-runtime';
const recipeContainer = document.querySelector('.recipe');
// recipeView.init(recipeContainer);

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    //loading recipe
    await model.loadRecipe(id);

    //Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError('we could not get the recipe 😊');
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
