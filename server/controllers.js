const axios = require('axios');
const { API } = process.env
const { Recipe, Ingredient } = require('./db/database.js')

module.exports = {
  getDinners: (req, res) => {
    // axios.get(`https://api.spoonacular.com/recipes/random?number=6&tags=dinner&apiKey=${API}`)
    //   .then(results => res.status(200).send(results.data.recipes))
    res.send([
        {
            "id": 715424,
            "title": "The Best Chili",
            "image": "https://spoonacular.com/recipeImages/715424-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715560,
            "title": "World’s Greatest Lasagna Roll Ups",
            "image": "https://spoonacular.com/recipeImages/715560-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 776505,
            "title": "Sausage & Pepperoni Stromboli",
            "image": "https://spoonacular.com/recipeImages/776505-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715467,
            "title": "Turkey Pot Pie",
            "image": "https://spoonacular.com/recipeImages/715467-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715419,
            "title": "Slow Cooker Spicy Hot Wings",
            "image": "https://spoonacular.com/recipeImages/715419-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 775585,
            "title": "Crockpot \"Refried\" Beans",
            "image": "https://spoonacular.com/recipeImages/775585-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716423,
            "title": "Grilled Zucchini with Goat Cheese and Balsamic-Honey Syrup",
            "image": "https://spoonacular.com/recipeImages/716423-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715421,
            "title": "Cheesy Chicken Enchilada Quinoa Casserole",
            "image": "https://spoonacular.com/recipeImages/715421-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715380,
            "title": "Sweet Potato Casserole Gourmet & Holiday Baking",
            "image": "https://spoonacular.com/recipeImages/715380-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715437,
            "title": "Homemade King Ranch Chicken Casserole",
            "image": "https://spoonacular.com/recipeImages/715437-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715394,
            "title": "Chicken Enchilada Casserole",
            "image": "https://spoonacular.com/recipeImages/715394-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715544,
            "title": "Brown Butter Twice Baked Sweet Potatoes",
            "image": "https://spoonacular.com/recipeImages/715544-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715455,
            "title": "Homemade Pecan Pie",
            "image": "https://spoonacular.com/recipeImages/715455-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715562,
            "title": "Loaded Baked Potato Soup",
            "image": "https://spoonacular.com/recipeImages/715562-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715527,
            "title": "Sweet and Sticky Chicken Strips",
            "image": "https://spoonacular.com/recipeImages/715527-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715521,
            "title": "Turkey Avocado BLT Salad",
            "image": "https://spoonacular.com/recipeImages/715521-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716426,
            "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
            "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715469,
            "title": "White Chocolate Christmas Holiday Pretzels and Santa’s Snack Mix",
            "image": "https://spoonacular.com/recipeImages/715469-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715541,
            "title": "Pink Lemonade Crinkle Cookies",
            "image": "https://spoonacular.com/recipeImages/715541-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715391,
            "title": "Slow Cooker Chicken Taco Soup",
            "image": "https://spoonacular.com/recipeImages/715391-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715545,
            "title": "How to Make the Best Chicken Jambalaya",
            "image": "https://spoonacular.com/recipeImages/715545-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715569,
            "title": "Strawberry Cheesecake Chocolate Crepes",
            "image": "https://spoonacular.com/recipeImages/715569-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715559,
            "title": "Easy Cheesy Garlic Bread",
            "image": "https://spoonacular.com/recipeImages/715559-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715415,
            "title": "Red Lentil Soup with Chicken and Turnips",
            "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716431,
            "title": "Crockpot Applesauce",
            "image": "https://spoonacular.com/recipeImages/716431-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715381,
            "title": "Creamy Lime Pie Square Bites",
            "image": "https://spoonacular.com/recipeImages/715381-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715563,
            "title": "Pierogi Casserole",
            "image": "https://spoonacular.com/recipeImages/715563-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715396,
            "title": "Cajun Louisiana Style Crawfish Etouffee",
            "image": "https://spoonacular.com/recipeImages/715396-312x231.jpg",
            "imageType": "jpg"
        }
    ])
  },
  getLunches: (req, res) => {
    // axios.get(`https://api.spoonacular.com/recipes/random?number=6&tags=lunch&apiKey=${API}`)
    //   .then(results => res.status(200).send(results.data.recipes))
    res.send([
        {
            "id": 782585,
            "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
            "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716426,
            "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
            "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715497,
            "title": "Berry Banana Breakfast Smoothie",
            "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715415,
            "title": "Red Lentil Soup with Chicken and Turnips",
            "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716406,
            "title": "Asparagus and Pea Soup: Real Convenience Food",
            "image": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 644387,
            "title": "Garlicky Kale",
            "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715446,
            "title": "Slow Cooker Beef Stew",
            "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 782601,
            "title": "Red Kidney Bean Jambalaya",
            "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 795751,
            "title": "Chicken Fajita Stuffed Bell Pepper",
            "image": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 766453,
            "title": "Hummus and Za'atar",
            "image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716627,
            "title": "Easy Homemade Rice and Beans",
            "image": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 664147,
            "title": "Tuscan White Bean Soup with Olive Oil and Rosemary",
            "image": "https://spoonacular.com/recipeImages/664147-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 640941,
            "title": "Crunchy Brussels Sprouts Side Dish",
            "image": "https://spoonacular.com/recipeImages/640941-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715495,
            "title": "Turkey Tomato Cheese Pizza",
            "image": "https://spoonacular.com/recipeImages/715495-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 794349,
            "title": "Broccoli and Chickpea Rice Salad",
            "image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716381,
            "title": "Nigerian Snail Stew",
            "image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 660306,
            "title": "Slow Cooker: Pork and Garbanzo Beans",
            "image": "https://spoonacular.com/recipeImages/660306-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 756814,
            "title": "Powerhouse Almond Matcha Superfood Smoothie",
            "image": "https://spoonacular.com/recipeImages/756814-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715769,
            "title": "Broccolini Quinoa Pilaf",
            "image": "https://spoonacular.com/recipeImages/715769-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 642129,
            "title": "Easy To Make Spring Rolls",
            "image": "https://spoonacular.com/recipeImages/642129-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 642605,
            "title": "Farro With Mushrooms and Asparagus",
            "image": "https://spoonacular.com/recipeImages/642605-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 636589,
            "title": "Butternut Squash Frittata",
            "image": "https://spoonacular.com/recipeImages/636589-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 646738,
            "title": "Herbivoracious' White Bean and Kale Soup",
            "image": "https://spoonacular.com/recipeImages/646738-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715540,
            "title": "Summer Berry Salad",
            "image": "https://spoonacular.com/recipeImages/715540-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 663559,
            "title": "Tomato and lentil soup",
            "image": "https://spoonacular.com/recipeImages/663559-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 662670,
            "title": "Swiss Chard Wraps",
            "image": "https://spoonacular.com/recipeImages/662670-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 640062,
            "title": "Corn Avocado Salsa",
            "image": "https://spoonacular.com/recipeImages/640062-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715421,
            "title": "Cheesy Chicken Enchilada Quinoa Casserole",
            "image": "https://spoonacular.com/recipeImages/715421-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 648320,
            "title": "Jade Buddha Salmon Tartare",
            "image": "https://spoonacular.com/recipeImages/648320-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716432,
            "title": "Finger Foods: Frittata Muffins",
            "image": "https://spoonacular.com/recipeImages/716432-312x231.jpg",
            "imageType": "jpg"
        }
    ])
  },
  getBreakfast: (req, res) => {
    // axios.get(`https://api.spoonacular.com/recipes/random?number=6&tags=breakfast&apiKey=${API}`)
    //   .then(results => res.status(200).send(results.data.recipes))
    res.send([
        {
            "id": 715497,
            "title": "Berry Banana Breakfast Smoothie",
            "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 756814,
            "title": "Powerhouse Almond Matcha Superfood Smoothie",
            "image": "https://spoonacular.com/recipeImages/756814-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 636589,
            "title": "Butternut Squash Frittata",
            "image": "https://spoonacular.com/recipeImages/636589-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716432,
            "title": "Finger Foods: Frittata Muffins",
            "image": "https://spoonacular.com/recipeImages/716432-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 782622,
            "title": "Chocolate Peanut Butter Cinnamon Smoothie",
            "image": "https://spoonacular.com/recipeImages/782622-312x231.png",
            "imageType": "png"
        },
        {
            "id": 716276,
            "title": "Doughnuts",
            "image": "https://spoonacular.com/recipeImages/716276-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 655235,
            "title": "Peanut Butter and Jelly Smoothie",
            "image": "https://spoonacular.com/recipeImages/655235-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 782619,
            "title": "Mushroom Goat Cheese Baked Eggs",
            "image": "https://spoonacular.com/recipeImages/782619-312x231.png",
            "imageType": "png"
        },
        {
            "id": 660368,
            "title": "Smoked Salmon Eggs Benedict With Lemon Dill Hollandaise",
            "image": "https://spoonacular.com/recipeImages/660368-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 655219,
            "title": "Peanut Butter And Chocolate Oatmeal",
            "image": "https://spoonacular.com/recipeImages/655219-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 645032,
            "title": "Goldilocks Chia Seed Porridge",
            "image": "https://spoonacular.com/recipeImages/645032-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 640275,
            "title": "Crab Cakes Eggs Benedict",
            "image": "https://spoonacular.com/recipeImages/640275-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 655186,
            "title": "Peaches And Cream Oatmeal",
            "image": "https://spoonacular.com/recipeImages/655186-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 660227,
            "title": "Skinny Green Monster Smoothie",
            "image": "https://spoonacular.com/recipeImages/660227-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 656481,
            "title": "Poached Egg With Spinach and Tomato",
            "image": "https://spoonacular.com/recipeImages/656481-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 638604,
            "title": "Chilled Swiss Oatmeal",
            "image": "https://spoonacular.com/recipeImages/638604-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 647043,
            "title": "Homemade Muesli Breakfast Cereal",
            "image": "https://spoonacular.com/recipeImages/647043-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 659081,
            "title": "Salmon Frittata",
            "image": "https://spoonacular.com/recipeImages/659081-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 644044,
            "title": "Protein Strawberry Smoothie",
            "image": "https://spoonacular.com/recipeImages/644044-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 662665,
            "title": "Swiss Bircher Muesli",
            "image": "https://spoonacular.com/recipeImages/662665-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 664054,
            "title": "Turkey Sausage, Chard & Sweet Potato Breakfast Scramble",
            "image": "https://spoonacular.com/recipeImages/664054-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 646515,
            "title": "Healthy Southwestern Oatmeal",
            "image": "https://spoonacular.com/recipeImages/646515-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 796873,
            "title": "Yogurt Parfait",
            "image": "https://spoonacular.com/recipeImages/796873-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 638257,
            "title": "Chicken Porridge",
            "image": "https://spoonacular.com/recipeImages/638257-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 635964,
            "title": "Bread Omlette",
            "image": "https://spoonacular.com/recipeImages/635964-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 647261,
            "title": "Honey Nut Raspberry Baked Oatmeal",
            "image": "https://spoonacular.com/recipeImages/647261-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 653775,
            "title": "Open-Face Egg Sandwich with Bacon, Asparagus, and Pesto",
            "image": "https://spoonacular.com/recipeImages/653775-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 657178,
            "title": "Protein Packed Carrot Muffins",
            "image": "https://spoonacular.com/recipeImages/657178-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 661886,
            "title": "Strawberry Shortcake Pancakes",
            "image": "https://spoonacular.com/recipeImages/661886-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 663845,
            "title": "TROPICAL BANANA GREEN SMOOTHIE",
            "image": "https://spoonacular.com/recipeImages/663845-312x231.jpg",
            "imageType": "jpg"
        }
    ])
  },
  addRecipe: (req, res) => {
    Recipe.create(req.body.params)
      .then(() => console.log('created'))
      .catch((err) => console.log(err))
  },
  getSavedRecipes: (req, res) => {
    Recipe
      .find({})
      .exec()
      .then((results) => res.send(results))
      .catch(() => console.log('there was an error'))
  },
  addIngredients: (req, res) => {
    req.body.params.ingredients.forEach((ingredient) => {
      Ingredient.create({name: ingredient})
        .then(() => console.log('created'))
        .catch(() => console.log('there was an error'))
    })
  },
  getIngredients: (req, res) => {
    Ingredient
      .find({})
      .exec()
      .then((results) => res.send(results))
      .catch(() => console.log('there was an error'))
  },
  deleteIngredients: (req, res) => {
    Ingredient
        .findByIdAndDelete(req.body.id)
        .then(() => res.status(204).send())
        .catch(() => console.log('unable to delete'))
  },
  deleteRecipes: (req, res) => {
    Recipe
        .deleteOne({id: req.body.id})
        .then(() => res.status(204).send())
        .catch(() => console.log('unable to delete'))
  },
  getRecipesByIngredients: (req, res) => {
    let queryString = '';
    if (req.query.ingredients) {
        req.query.ingredients.forEach((ingredientObj) => {
            queryString += ingredientObj.name+','
        })
    }
    // axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API}&ignorePantry=true&ingredients=${queryString}&ranking=1`)
    //   .then((results) => res.send(results))
    //   .catch((err) => console.log(err))
    res.send([
        {
            "id": 653810,
            "title": "Orange Banana Muffins With Pistachios",
            "image": "https://spoonacular.com/recipeImages/653810-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 3,
            "missedIngredientCount": 4,
            "missedIngredients": [
                {
                    "id": 19912,
                    "amount": 0.5,
                    "unit": "cup",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Ethnic Foods",
                    "name": "agave syrup",
                    "original": "1/2 cup agave syrup",
                    "originalName": "agave syrup",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/agave.png"
                },
                {
                    "id": 18369,
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "unitLong": "tablespoons",
                    "unitShort": "Tbsp",
                    "aisle": "Baking",
                    "name": "baking powder",
                    "original": "2 tablespoons baking powder",
                    "originalName": "baking powder",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                },
                {
                    "id": 12151,
                    "amount": 0.25,
                    "unit": "cup",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Savory Snacks",
                    "name": "pistachios",
                    "original": "1/4 cup chopped pistachios",
                    "originalName": "chopped pistachios",
                    "meta": [
                        "chopped"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/pistachios.jpg"
                },
                {
                    "id": 8402,
                    "amount": 2.0,
                    "unit": "cups",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Cereal",
                    "name": "cooking oats",
                    "original": "2 cups quick cooking oats",
                    "originalName": "quick cooking oats",
                    "meta": [
                        "quick"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 9040,
                    "amount": 3.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Produce",
                    "name": "bananas",
                    "original": "3 bananas, mashed",
                    "originalName": "bananas, mashed",
                    "meta": [
                        "mashed"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                },
                {
                    "id": 1123,
                    "amount": 2.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "eggs",
                    "original": "2 eggs",
                    "originalName": "eggs",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                },
                {
                    "id": 9200,
                    "amount": 2.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Produce",
                    "name": "oranges",
                    "original": "2 oranges",
                    "originalName": "oranges",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.png"
                }
            ],
            "unusedIngredients": [
                {
                    "id": 9003,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "apple",
                    "original": "apple",
                    "originalName": "apple",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                }
            ],
            "likes": 1
        },
        {
            "id": 634213,
            "title": "Banana, Cranberry and Apple Bread",
            "image": "https://spoonacular.com/recipeImages/634213-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 3,
            "missedIngredientCount": 5,
            "missedIngredients": [
                {
                    "id": 18369,
                    "amount": 1.5,
                    "unit": "teaspoons",
                    "unitLong": "teaspoons",
                    "unitShort": "tsp",
                    "aisle": "Baking",
                    "name": "baking powder",
                    "original": "1 1/2 teaspoons baking powder",
                    "originalName": "baking powder",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                },
                {
                    "id": 18372,
                    "amount": 1.5,
                    "unit": "teaspoons",
                    "unitLong": "teaspoons",
                    "unitShort": "tsp",
                    "aisle": "Baking",
                    "name": "baking soda",
                    "original": "1 1/2 teaspoons baking soda",
                    "originalName": "baking soda",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                },
                {
                    "id": 9078,
                    "amount": 1.0,
                    "unit": "cup",
                    "unitLong": "cup",
                    "unitShort": "cup",
                    "aisle": "Produce",
                    "name": "cranberry - 125g",
                    "original": "1 cup dried cranberry - 125g",
                    "originalName": "dried cranberry - 125g",
                    "meta": [
                        "dried"
                    ],
                    "extendedName": "dried cranberry - 125g",
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/cranberries.jpg"
                },
                {
                    "id": 1077,
                    "amount": 0.25,
                    "unit": "cup",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "milk",
                    "original": "1/4 cup milk",
                    "originalName": "milk",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                },
                {
                    "id": 1052050,
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "unitLong": "teaspoon",
                    "unitShort": "tsp",
                    "aisle": "Baking",
                    "name": "vanilla",
                    "original": "1 teaspoon Vanilla",
                    "originalName": "Vanilla",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 9040,
                    "amount": 3.0,
                    "unit": "large",
                    "unitLong": "larges",
                    "unitShort": "large",
                    "aisle": "Produce",
                    "name": "bananas - - 235g on",
                    "original": "3 large bananas – mashed - 235g skinless on",
                    "originalName": "bananas – mashed - 235g skinless on",
                    "meta": [
                        "skinless",
                        "mashed"
                    ],
                    "extendedName": "skinless bananas - - 235g on",
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                },
                {
                    "id": 1123,
                    "amount": 2.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "eggs",
                    "original": "2 Eggs",
                    "originalName": "Eggs",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                },
                {
                    "id": 1069003,
                    "amount": 1.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Produce",
                    "name": "apple",
                    "original": "1 apple – grated (green apple)",
                    "originalName": "apple – grated (green apple)",
                    "meta": [
                        "green",
                        "grated",
                        "( apple)"
                    ],
                    "extendedName": "green apple",
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png"
                }
            ],
            "unusedIngredients": [
                {
                    "id": 9200,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "orange",
                    "original": "orange",
                    "originalName": "orange",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.png"
                }
            ],
            "likes": 18
        },
        {
            "id": 645514,
            "title": "Green Salad With Fresh Orange Juice Dressing",
            "image": "https://spoonacular.com/recipeImages/645514-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 3,
            "missedIngredientCount": 5,
            "missedIngredients": [
                {
                    "id": 11124,
                    "amount": 0.5,
                    "unit": "cup",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Produce",
                    "name": "carrot",
                    "original": "1/2 cup shredded carrot",
                    "originalName": "shredded carrot",
                    "meta": [
                        "shredded"
                    ],
                    "extendedName": "shredded carrot",
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png"
                },
                {
                    "id": 11603,
                    "amount": 0.5,
                    "unit": "cup",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Produce",
                    "name": "jicama",
                    "original": "1/2 cup jicama",
                    "originalName": "jicama",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/jicama.jpg"
                },
                {
                    "id": 9159,
                    "amount": 1.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Produce",
                    "name": "lime",
                    "original": "1 lime",
                    "originalName": "lime",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/lime.jpg"
                },
                {
                    "id": 10111251,
                    "amount": 1.0,
                    "unit": "head",
                    "unitLong": "head",
                    "unitShort": "head",
                    "aisle": "Produce",
                    "name": "romaine lettuce",
                    "original": "1 head romaine lettuce",
                    "originalName": "romaine lettuce",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/romaine.jpg"
                },
                {
                    "id": 11529,
                    "amount": 1.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Produce",
                    "name": "tomato",
                    "original": "1 tomato",
                    "originalName": "tomato",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato.png"
                }
            ],
            "usedIngredients": [
                {
                    "id": 1129,
                    "amount": 2.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "hardboiled eggs",
                    "original": "2 hard boiled eggs",
                    "originalName": "hard boiled eggs",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/hard-boiled-egg.png"
                },
                {
                    "id": 1069003,
                    "amount": 1.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Produce",
                    "name": "apple",
                    "original": "1 green apple,wash and diced",
                    "originalName": "green apple,wash and diced",
                    "meta": [
                        "diced",
                        "green"
                    ],
                    "extendedName": "green diced apple",
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png"
                },
                {
                    "id": 9200,
                    "amount": 2.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Produce",
                    "name": "oranges",
                    "original": "2 fresh oranges",
                    "originalName": "fresh oranges",
                    "meta": [
                        "fresh"
                    ],
                    "extendedName": "fresh oranges",
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.png"
                }
            ],
            "unusedIngredients": [
                {
                    "id": 9040,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "banana",
                    "original": "banana",
                    "originalName": "banana",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                }
            ],
            "likes": 1
        },
        {
            "id": 157514,
            "title": "Nutella Banana Pancakes German Style",
            "image": "https://spoonacular.com/recipeImages/157514-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 2,
            "missedIngredientCount": 2,
            "missedIngredients": [
                {
                    "id": 1077,
                    "amount": 400.0,
                    "unit": "ml",
                    "unitLong": "milliliters",
                    "unitShort": "ml",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "milk",
                    "original": "400ml milk",
                    "originalName": "milk",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                },
                {
                    "id": 19125,
                    "amount": 4.0,
                    "unit": "tablespoons",
                    "unitLong": "tablespoons",
                    "unitShort": "Tbsp",
                    "aisle": "Nut butters, Jams, and Honey",
                    "name": "nutella",
                    "original": "4 tablespoons nutella",
                    "originalName": "nutella",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/hazelnut-chocolate-spread.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 9040,
                    "amount": 1.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Produce",
                    "name": "banana",
                    "original": "1 banana",
                    "originalName": "banana",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                },
                {
                    "id": 1123,
                    "amount": 4.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "eggs",
                    "original": "4 eggs",
                    "originalName": "eggs",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                }
            ],
            "unusedIngredients": [
                {
                    "id": 9003,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "apple",
                    "original": "apple",
                    "originalName": "apple",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                },
                {
                    "id": 9200,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "orange",
                    "original": "orange",
                    "originalName": "orange",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.png"
                }
            ],
            "likes": 0
        },
        {
            "id": 73420,
            "title": "Apple Or Peach Strudel",
            "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 2,
            "missedIngredientCount": 2,
            "missedIngredients": [
                {
                    "id": 18369,
                    "amount": 1.0,
                    "unit": "tsp",
                    "unitLong": "teaspoon",
                    "unitShort": "tsp",
                    "aisle": "Baking",
                    "name": "baking powder",
                    "original": "1 tsp baking powder",
                    "originalName": "baking powder",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                },
                {
                    "id": 2010,
                    "amount": 1.0,
                    "unit": "tsp",
                    "unitLong": "teaspoon",
                    "unitShort": "tsp",
                    "aisle": "Spices and Seasonings",
                    "name": "cinnamon",
                    "original": "1 tsp cinnamon",
                    "originalName": "cinnamon",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 9003,
                    "amount": 6.0,
                    "unit": "large",
                    "unitLong": "larges",
                    "unitShort": "large",
                    "aisle": "Produce",
                    "name": "baking apples",
                    "original": "6 large baking apples",
                    "originalName": "baking apples",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                },
                {
                    "id": 1123,
                    "amount": 1.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "egg",
                    "original": "1 egg",
                    "originalName": "egg",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                }
            ],
            "unusedIngredients": [
                {
                    "id": 9040,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "banana",
                    "original": "banana",
                    "originalName": "banana",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                },
                {
                    "id": 9200,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "orange",
                    "original": "orange",
                    "originalName": "orange",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.png"
                }
            ],
            "likes": 0
        },
        {
            "id": 634986,
            "title": "Bing's Banana Cake",
            "image": "https://spoonacular.com/recipeImages/634986-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 2,
            "missedIngredientCount": 3,
            "missedIngredients": [
                {
                    "id": 18369,
                    "amount": 1.5,
                    "unit": "teaspoons",
                    "unitLong": "teaspoons",
                    "unitShort": "tsp",
                    "aisle": "Baking",
                    "name": "baking powder",
                    "original": "1 & 1/2 teaspoons baking powder",
                    "originalName": "baking powder",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                },
                {
                    "id": 18372,
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "unitLong": "teaspoons",
                    "unitShort": "tsp",
                    "aisle": "Baking",
                    "name": "bicarbonate of soda",
                    "original": "1/2 teaspoon bicarbonate of soda",
                    "originalName": "bicarbonate of soda",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                },
                {
                    "id": 10112155,
                    "amount": 0.5,
                    "unit": "cup",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Baking",
                    "name": "optional: walnuts",
                    "original": "Optional: 1/2 cup finely chopped walnuts",
                    "originalName": "Optional: finely chopped walnuts",
                    "meta": [
                        "finely chopped"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/walnuts.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 9040,
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "unitLong": "teaspoon",
                    "unitShort": "tsp",
                    "aisle": "Produce",
                    "name": "banana flavoured essence",
                    "original": "1 teaspoon banana flavoured essence",
                    "originalName": "banana flavoured essence",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                },
                {
                    "id": 1123,
                    "amount": 2.0,
                    "unit": "large",
                    "unitLong": "larges",
                    "unitShort": "large",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "eggs",
                    "original": "2 large eggs",
                    "originalName": "eggs",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                }
            ],
            "unusedIngredients": [
                {
                    "id": 9003,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "apple",
                    "original": "apple",
                    "originalName": "apple",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                },
                {
                    "id": 9200,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "orange",
                    "original": "orange",
                    "originalName": "orange",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.png"
                }
            ],
            "likes": 6
        },
        {
            "id": 634006,
            "title": "Banana Bread",
            "image": "https://spoonacular.com/recipeImages/634006-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 2,
            "missedIngredientCount": 3,
            "missedIngredients": [
                {
                    "id": 1001,
                    "amount": 1.0,
                    "unit": "cup",
                    "unitLong": "cup",
                    "unitShort": "cup",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "butter",
                    "original": "cup melted butter",
                    "originalName": "melted butter",
                    "meta": [
                        "melted"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                },
                {
                    "id": 1052050,
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "unitLong": "teaspoon",
                    "unitShort": "tsp",
                    "aisle": "Baking",
                    "name": "vanilla",
                    "original": "1 teaspoon vanilla",
                    "originalName": "vanilla",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                },
                {
                    "id": 18372,
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "unitLong": "teaspoon",
                    "unitShort": "tsp",
                    "aisle": "Baking",
                    "name": "baking soda",
                    "original": "1 teaspoon baking soda",
                    "originalName": "baking soda",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 9040,
                    "amount": 3.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Produce",
                    "name": "bananas",
                    "original": "3 ripe bananas, smashed",
                    "originalName": "ripe bananas, smashed",
                    "meta": [
                        "ripe",
                        "smashed"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                },
                {
                    "id": 1123,
                    "amount": 1.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "egg",
                    "original": "1 egg, beaten",
                    "originalName": "egg, beaten",
                    "meta": [
                        "beaten"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                }
            ],
            "unusedIngredients": [
                {
                    "id": 9003,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "apple",
                    "original": "apple",
                    "originalName": "apple",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                },
                {
                    "id": 9200,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "orange",
                    "original": "orange",
                    "originalName": "orange",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.png"
                }
            ],
            "likes": 3
        },
        {
            "id": 662895,
            "title": "Tarte aux Pommes",
            "image": "https://spoonacular.com/recipeImages/662895-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 2,
            "missedIngredientCount": 3,
            "missedIngredients": [
                {
                    "id": 1053,
                    "amount": 1.0,
                    "unit": "cup",
                    "unitLong": "cup",
                    "unitShort": "cup",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "heavy whipping cream",
                    "original": "1 to 11/2 cup heavy whipping cream",
                    "originalName": "heavy whipping cream",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/fluid-cream.jpg"
                },
                {
                    "id": 18334,
                    "amount": 1.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Refrigerated",
                    "name": "pie crust already made and on your supermarket refrigerator section",
                    "original": "1 pie crust already made and on your supermarket refrigerator section.",
                    "originalName": "pie crust already made and on your supermarket refrigerator section",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/pie-crust.jpg"
                },
                {
                    "id": 2050,
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "unitLong": "teaspoon",
                    "unitShort": "tsp",
                    "aisle": "Baking",
                    "name": "vanilla extract",
                    "original": "1 teaspoon vanilla extract",
                    "originalName": "vanilla extract",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 9003,
                    "amount": 6.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Produce",
                    "name": "apples",
                    "original": "6 apples peeled, quartered and thinly sliced",
                    "originalName": "apples peeled, quartered and thinly sliced",
                    "meta": [
                        "peeled",
                        "thinly sliced",
                        "quartered"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                },
                {
                    "id": 1123,
                    "amount": 2.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "eggs",
                    "original": "2 eggs",
                    "originalName": "eggs",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                }
            ],
            "unusedIngredients": [
                {
                    "id": 9040,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "banana",
                    "original": "banana",
                    "originalName": "banana",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                },
                {
                    "id": 9200,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "orange",
                    "original": "orange",
                    "originalName": "orange",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.png"
                }
            ],
            "likes": 2
        },
        {
            "id": 634003,
            "title": "Banana Bread Muffins, Bisquick",
            "image": "https://spoonacular.com/recipeImages/634003-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 2,
            "missedIngredientCount": 3,
            "missedIngredients": [
                {
                    "id": 1052050,
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "unitLong": "teaspoons",
                    "unitShort": "tsp",
                    "aisle": "Baking",
                    "name": "vanilla",
                    "original": "1/2 teaspoon Vanilla",
                    "originalName": "Vanilla",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                },
                {
                    "id": 18010,
                    "amount": 1.0,
                    "unit": "cups",
                    "unitLong": "cup",
                    "unitShort": "cup",
                    "aisle": "Baking",
                    "name": "bisquick baking mix",
                    "original": "cups Bisquick Baking Mix",
                    "originalName": "Bisquick Baking Mix",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/buttermilk-biscuits.jpg"
                },
                {
                    "id": 12135,
                    "amount": 0.5,
                    "unit": "cup",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Nuts",
                    "name": "nuts",
                    "original": "1/2 cup Chopped Nuts",
                    "originalName": "Chopped Nuts",
                    "meta": [
                        "chopped"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/nuts-mixed.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 1009040,
                    "amount": 1.5,
                    "unit": "cups",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Produce",
                    "name": "bananas",
                    "original": "1 1/2 cups Mashed Bananas Ripe, Abt 3 Lg Bananas",
                    "originalName": "Mashed Bananas Ripe, Abt 3 Lg Bananas",
                    "meta": [
                        "ripe",
                        "mashed"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                },
                {
                    "id": 1123,
                    "amount": 3.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "eggs",
                    "original": "3 Eggs",
                    "originalName": "Eggs",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                }
            ],
            "unusedIngredients": [
                {
                    "id": 9003,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "apple",
                    "original": "apple",
                    "originalName": "apple",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                },
                {
                    "id": 9200,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "orange",
                    "original": "orange",
                    "originalName": "orange",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.png"
                }
            ],
            "likes": 1
        },
        {
            "id": 157103,
            "title": "Apple Cinnamon Blondies",
            "image": "https://spoonacular.com/recipeImages/157103-312x231.jpg",
            "imageType": "jpg",
            "usedIngredientCount": 2,
            "missedIngredientCount": 3,
            "missedIngredients": [
                {
                    "id": 1001,
                    "amount": 0.5,
                    "unit": "cup",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "butter",
                    "original": "1/2 cup butter, melted",
                    "originalName": "butter, melted",
                    "meta": [
                        "melted"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                },
                {
                    "id": 2010,
                    "amount": 1.0,
                    "unit": "tsp",
                    "unitLong": "teaspoon",
                    "unitShort": "tsp",
                    "aisle": "Spices and Seasonings",
                    "name": "cinnamon",
                    "original": "1 tsp. cinnamon",
                    "originalName": "cinnamon",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                },
                {
                    "id": 1052050,
                    "amount": 1.0,
                    "unit": "tsp",
                    "unitLong": "teaspoon",
                    "unitShort": "tsp",
                    "aisle": "Baking",
                    "name": "vanilla",
                    "original": "1 tsp. vanilla (paste or extract)",
                    "originalName": "vanilla (paste or extract)",
                    "meta": [
                        "(paste or extract)"
                    ],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                }
            ],
            "usedIngredients": [
                {
                    "id": 9003,
                    "amount": 0.5,
                    "unit": "cup",
                    "unitLong": "cups",
                    "unitShort": "cup",
                    "aisle": "Produce",
                    "name": "apple",
                    "original": "1/2 cup apple, finely diced",
                    "originalName": "apple, finely diced",
                    "meta": [
                        "diced",
                        "finely"
                    ],
                    "extendedName": "diced apple",
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                },
                {
                    "id": 1123,
                    "amount": 1.0,
                    "unit": "",
                    "unitLong": "",
                    "unitShort": "",
                    "aisle": "Milk, Eggs, Other Dairy",
                    "name": "egg",
                    "original": "1 egg",
                    "originalName": "egg",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                }
            ],
            "unusedIngredients": [
                {
                    "id": 9040,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "banana",
                    "original": "banana",
                    "originalName": "banana",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg"
                },
                {
                    "id": 9200,
                    "amount": 1.0,
                    "unit": "serving",
                    "unitLong": "serving",
                    "unitShort": "serving",
                    "aisle": "Produce",
                    "name": "orange",
                    "original": "orange",
                    "originalName": "orange",
                    "meta": [],
                    "image": "https://spoonacular.com/cdn/ingredients_100x100/orange.png"
                }
            ],
            "likes": 0
        }
    ])
  },
  getRecipe: (req, res) => {
    console.log(req.query)
  }
}