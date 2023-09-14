const axios = require('axios');
const { API } = process.env
const { Recipe, Ingredient } = require('./db/database.js')

module.exports = {
  getDinners: (req, res) => {
    let queryString = ''
    if (req.query.ingredients) {
        req.query.ingredients.forEach((ingredientObj) => {
            queryString += ingredientObj.name+','
        })
    }
    console.log(queryString)
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
  }
}