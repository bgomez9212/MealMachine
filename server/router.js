const express = require('express');
const router = express.Router();
const controller = require('./controllers.js');

router.get('/dinners', controller.getDinners);
router.get('/lunches', controller.getLunches);
router.get('/breakfast', controller.getBreakfast)
router.post('/savedRecipes', controller.addRecipe)
router.get('/savedRecipes', controller.getSavedRecipes)
router.post('/savedIngredients', controller.addIngredients)
router.get('/savedIngredients', controller.getIngredients)
router.delete('/savedIngredients', controller.deleteIngredients)
router.delete('/savedRecipes', controller.deleteRecipes)
router.get('/recipesByIngredients', controller.getRecipesByIngredients)
router.get('/recipe', controller.getRecipe)
router.get('/groceries', controller.getGroceries)
router.post('/groceries', controller.addGroceries)
router.delete('/groceries', controller.deleteGroceries)

module.exports = router;