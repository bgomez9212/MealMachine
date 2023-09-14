const express = require('express');
const router = express.Router();
const controller = require('./controllers.js');

router.get('/dinners', controller.getDinners);
router.get('/lunches', controller.getLunches);
router.get('/breakfast', controller.getBreakfast)
router.post('/addRecipe', controller.addRecipe)
router.get('/savedRecipes', controller.getSavedRecipes)
router.post('/savedIngredients', controller.addIngredients)
router.get('/savedIngredients', controller.getIngredients)
router.delete('/savedIngredients', controller.deleteIngredients)

module.exports = router;