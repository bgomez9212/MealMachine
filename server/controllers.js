const axios = require('axios');
const { API } = process.env

module.exports = {
  getDinners: (req, res) => {
    // axios.get(`https://api.spoonacular.com/recipes/random?number=6&tags=dinner&apiKey=${API}`)
    //   .then(results => res.status(200).send(results.data.recipes))
    res.send([
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": false,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 7,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 18,
          "creditsText": "foodista.com",
          "sourceName": "foodista.com",
          "pricePerServing": 158.29,
          "extendedIngredients": [
              {
                  "id": 5662,
                  "aisle": "Meat",
                  "image": "meat-ground.jpg",
                  "consistency": "SOLID",
                  "name": "ground turkey",
                  "nameClean": "ground turkey",
                  "original": "1 pound lean ground beef or ground turkey",
                  "originalName": "lean ground beef or ground turkey",
                  "amount": 1.0,
                  "unit": "pound",
                  "meta": [
                      "lean"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "lb",
                          "unitLong": "pound"
                      },
                      "metric": {
                          "amount": 453.592,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 4053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "olive-oil.jpg",
                  "consistency": "LIQUID",
                  "name": "olive oil",
                  "nameClean": "olive oil",
                  "original": "1 teaspoon olive oil",
                  "originalName": "olive oil",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "SOLID",
                  "name": "onions",
                  "nameClean": "onion",
                  "original": "3 cups onions, chopped",
                  "originalName": "onions, chopped",
                  "amount": 3.0,
                  "unit": "cups",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 3.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 480.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11124,
                  "aisle": "Produce",
                  "image": "sliced-carrot.png",
                  "consistency": "SOLID",
                  "name": "carrots",
                  "nameClean": "carrot",
                  "original": "4 carrots, chopped",
                  "originalName": "carrots, chopped",
                  "amount": 4.0,
                  "unit": "",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 10111143,
                  "aisle": "Produce",
                  "image": "celery.jpg",
                  "consistency": "SOLID",
                  "name": "celery stalks",
                  "nameClean": "celery sticks",
                  "original": "4 celery stalks, chopped",
                  "originalName": "celery stalks, chopped",
                  "amount": 4.0,
                  "unit": "",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 10211215,
                  "aisle": "Produce",
                  "image": "garlic.jpg",
                  "consistency": "SOLID",
                  "name": "garlic cloves",
                  "nameClean": "whole garlic cloves",
                  "original": "2 garlic cloves, minced",
                  "originalName": "garlic cloves, minced",
                  "amount": 2.0,
                  "unit": "",
                  "meta": [
                      "minced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 10011693,
                  "aisle": "Canned and Jarred",
                  "image": "tomatoes-canned.png",
                  "consistency": "SOLID",
                  "name": "canned tomatoes",
                  "nameClean": "canned tomatoes",
                  "original": "1 can (28 oz) tomatoes, diced",
                  "originalName": "can tomatoes, diced",
                  "amount": 28.0,
                  "unit": "oz",
                  "meta": [
                      "diced",
                      "canned"
                  ],
                  "measures": {
                      "us": {
                          "amount": 28.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 793.787,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 10016034,
                  "aisle": "Canned and Jarred",
                  "image": "kidney-beans.jpg",
                  "consistency": "SOLID",
                  "name": "kidney beans",
                  "nameClean": "canned red kidney beans",
                  "original": "1 can (16 oz) red kidney beans, rinsed and drained",
                  "originalName": "can red kidney beans, rinsed and drained",
                  "amount": 16.0,
                  "unit": "oz",
                  "meta": [
                      "red",
                      "rinsed",
                      "drained",
                      "canned"
                  ],
                  "measures": {
                      "us": {
                          "amount": 16.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 453.592,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 10116034,
                  "aisle": "Canned and Jarred",
                  "image": "white-beans.jpg",
                  "consistency": "SOLID",
                  "name": "kidney beans",
                  "nameClean": "canned white kidney beans",
                  "original": "1 can (16 oz) white kidney beans, rinsed and drained",
                  "originalName": "can white kidney beans, rinsed and drained",
                  "amount": 16.0,
                  "unit": "oz",
                  "meta": [
                      "white",
                      "rinsed",
                      "drained",
                      "canned"
                  ],
                  "measures": {
                      "us": {
                          "amount": 16.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 453.592,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 16026,
                  "aisle": "Canned and Jarred",
                  "image": "white-beans.jpg",
                  "consistency": "SOLID",
                  "name": "great northern beans",
                  "nameClean": "canned great northern beans",
                  "original": "1 can (16 oz) great northern beans, rinsed and drained",
                  "originalName": "can great northern beans, rinsed and drained",
                  "amount": 16.0,
                  "unit": "oz",
                  "meta": [
                      "rinsed",
                      "drained",
                      "canned"
                  ],
                  "measures": {
                      "us": {
                          "amount": 16.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 453.592,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 10093741,
                  "aisle": "Canned and Jarred",
                  "image": "beef-broth.png",
                  "consistency": "LIQUID",
                  "name": "beef broth",
                  "nameClean": "low sodium beef broth",
                  "original": "3 cans (10 oz) reduced-sodium beef broth",
                  "originalName": "cans reduced-sodium beef broth",
                  "amount": 10.0,
                  "unit": "oz",
                  "meta": [
                      "reduced-sodium",
                      "canned"
                  ],
                  "measures": {
                      "us": {
                          "amount": 10.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 283.495,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 10011549,
                  "aisle": "Pasta and Rice",
                  "image": "tomato-sauce-or-pasta-sauce.jpg",
                  "consistency": "SOLID",
                  "name": "pasta sauce",
                  "nameClean": "pasta sauce",
                  "original": "1 jar (24 oz) spaghetti, marinara, or pasta sauce, we used Prego's Heart Smart",
                  "originalName": "jar spaghetti, marinara, or pasta sauce, we used Prego's Heart Smart",
                  "amount": 24.0,
                  "unit": "oz",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 24.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 680.389,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11477,
                  "aisle": "Produce",
                  "image": "zucchini.jpg",
                  "consistency": "SOLID",
                  "name": "zucchini",
                  "nameClean": "zucchini",
                  "original": "1 zucchini, chopped",
                  "originalName": "zucchini, chopped",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 1022027,
                  "aisle": "Spices and Seasonings",
                  "image": "dried-herbs.png",
                  "consistency": "SOLID",
                  "name": "seasoning blend",
                  "nameClean": "italian seasoning",
                  "original": "2 tablespoons Italian seasoning blend",
                  "originalName": "Italian seasoning blend",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [
                      "italian"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 1002030,
                  "aisle": "Spices and Seasonings",
                  "image": "pepper.jpg",
                  "consistency": "SOLID",
                  "name": "ground pepper or",
                  "nameClean": "black pepper",
                  "original": "2 teaspoons fresh ground pepper or to taste",
                  "originalName": "fresh ground pepper or to taste",
                  "amount": 2.0,
                  "unit": "teaspoons",
                  "meta": [
                      "fresh",
                      "to taste"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 99182,
                  "aisle": "Pasta and Rice",
                  "image": "whole-wheat-penne.jpg",
                  "consistency": "SOLID",
                  "name": "penne pasta",
                  "nameClean": "whole wheat penne",
                  "original": "6 ounces whole wheat penne pasta",
                  "originalName": "whole wheat penne pasta",
                  "amount": 6.0,
                  "unit": "ounces",
                  "meta": [
                      "whole wheat"
                  ],
                  "measures": {
                      "us": {
                          "amount": 6.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 170.097,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 1032,
                  "aisle": "Cheese",
                  "image": "parmesan.jpg",
                  "consistency": "LIQUID",
                  "name": "parmesan cheese",
                  "nameClean": "grated parmesan cheese",
                  "original": "Grated Parmesan cheese to top each bowl with, optional",
                  "originalName": "Grated Parmesan cheese to top each bowl with, optional",
                  "amount": 20.0,
                  "unit": "servings",
                  "meta": [
                      "grated",
                      "to top each bowl with, optional"
                  ],
                  "measures": {
                      "us": {
                          "amount": 20.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 20.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              }
          ],
          "id": 650654,
          "title": "Make Olive Garden’s Delicious Pasta Fagioli At Home",
          "readyInMinutes": 45,
          "servings": 20,
          "sourceUrl": "https://www.foodista.com/recipe/3Q2XBWRG/make-olive-gardens-delicious-pasta-fagioli-at-home",
          "image": "https://spoonacular.com/recipeImages/650654-556x370.jpg",
          "imageType": "jpg",
          "summary": "If you want to add more <b>Mediterranean</b> recipes to your recipe box, Make Olive Garden’s Delicious Pasta Fagioli At Home might be a recipe you should try. This recipe serves 20. One portion of this dish contains approximately <b>21g of protein</b>, <b>10g of fat</b>, and a total of <b>285 calories</b>. For <b>$1.58 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. It works well as a main course. Not a lot of people made this recipe, and 2 would say it hit the spot. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. If you have kidney beans, garlic cloves, excellent northern beans, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 62%</b>. This score is good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/olive-garden-pasta-e-fagioli-1347881\">Olive Garden Pastan e Fagioli</a>, <a href=\"https://spoonacular.com/recipes/olive-garden-pasta-e-fagioli-1228645\">Olive Garden Pastan e Fagioli</a>, and <a href=\"https://spoonacular.com/recipes/olive-garden-pasta-e-fagioli-990430\">Olive Garden Pastan e Fagioli</a>.",
          "cuisines": [
              "Mediterranean",
              "Italian",
              "European"
          ],
          "dishTypes": [
              "lunch",
              "soup",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [],
          "occasions": [],
          "instructions": "Brown beef in a large soup pot.  Drain in a colander in sink.\nIn the same pot, heat the olive oil.  Add the onions, carrots, celery, and garlic and cook for 2 minutes. Stir often.\nAdd the drained beef back to the pot.  Stir in the canned tomatoes, beans, beef broth, spaghetti sauce, zucchini, water, Italian seasonings and pepper.\nBring soup up to a boil.  Turn heat to a simmer, cover and let cook for 50 minutes.\nAdd pasta to the soup.  Cover and cook for about 10 minutes longer until pasta is ready.\nLadle soup into a small bowl or cup.  Top with grated Parmesan cheese, if desired\nMakes 20 cups",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Brown beef in a large soup pot.",
                          "ingredients": [
                              {
                                  "id": 23572,
                                  "name": "beef",
                                  "localizedName": "beef",
                                  "image": "beef-cubes-raw.png"
                              },
                              {
                                  "id": 0,
                                  "name": "soup",
                                  "localizedName": "soup",
                                  "image": ""
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404752,
                                  "name": "pot",
                                  "localizedName": "pot",
                                  "image": "stock-pot.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Drain in a colander in sink.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404639,
                                  "name": "colander",
                                  "localizedName": "colander",
                                  "image": "colander.jpg"
                              }
                          ]
                      },
                      {
                          "number": 3,
                          "step": "In the same pot, heat the olive oil.",
                          "ingredients": [
                              {
                                  "id": 4053,
                                  "name": "olive oil",
                                  "localizedName": "olive oil",
                                  "image": "olive-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404752,
                                  "name": "pot",
                                  "localizedName": "pot",
                                  "image": "stock-pot.jpg"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "Add the onions, carrots, celery, and garlic and cook for 2 minutes. Stir often.",
                          "ingredients": [
                              {
                                  "id": 11124,
                                  "name": "carrot",
                                  "localizedName": "carrot",
                                  "image": "sliced-carrot.png"
                              },
                              {
                                  "id": 11143,
                                  "name": "celery",
                                  "localizedName": "celery",
                                  "image": "celery.jpg"
                              },
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              },
                              {
                                  "id": 11282,
                                  "name": "onion",
                                  "localizedName": "onion",
                                  "image": "brown-onion.png"
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 2,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 5,
                          "step": "Add the drained beef back to the pot.  Stir in the canned tomatoes, beans, beef broth, spaghetti sauce, zucchini, water, Italian seasonings and pepper.",
                          "ingredients": [
                              {
                                  "id": 1022027,
                                  "name": "italian seasoning",
                                  "localizedName": "italian seasoning",
                                  "image": "dried-herbs.png"
                              },
                              {
                                  "id": 10011693,
                                  "name": "canned tomatoes",
                                  "localizedName": "canned tomatoes",
                                  "image": "tomatoes-canned.png"
                              },
                              {
                                  "id": 10011549,
                                  "name": "pasta sauce",
                                  "localizedName": "pasta sauce",
                                  "image": "tomato-sauce-or-pasta-sauce.jpg"
                              },
                              {
                                  "id": 6008,
                                  "name": "beef broth",
                                  "localizedName": "beef broth",
                                  "image": "beef-broth.png"
                              },
                              {
                                  "id": 11477,
                                  "name": "zucchini",
                                  "localizedName": "zucchini",
                                  "image": "zucchini.jpg"
                              },
                              {
                                  "id": 1002030,
                                  "name": "pepper",
                                  "localizedName": "pepper",
                                  "image": "pepper.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "beans",
                                  "localizedName": "beans",
                                  "image": "kidney-beans.jpg"
                              },
                              {
                                  "id": 14412,
                                  "name": "water",
                                  "localizedName": "water",
                                  "image": "water.png"
                              },
                              {
                                  "id": 23572,
                                  "name": "beef",
                                  "localizedName": "beef",
                                  "image": "beef-cubes-raw.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404752,
                                  "name": "pot",
                                  "localizedName": "pot",
                                  "image": "stock-pot.jpg"
                              }
                          ]
                      },
                      {
                          "number": 6,
                          "step": "Bring soup up to a boil.  Turn heat to a simmer, cover and let cook for 50 minutes.",
                          "ingredients": [
                              {
                                  "id": 0,
                                  "name": "soup",
                                  "localizedName": "soup",
                                  "image": ""
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 50,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 7,
                          "step": "Add pasta to the soup.  Cover and cook for about 10 minutes longer until pasta is ready.",
                          "ingredients": [
                              {
                                  "id": 20420,
                                  "name": "pasta",
                                  "localizedName": "pasta",
                                  "image": "fusilli.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "soup",
                                  "localizedName": "soup",
                                  "image": ""
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 10,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 8,
                          "step": "Ladle soup into a small bowl or cup.  Top with grated Parmesan cheese, if desired",
                          "ingredients": [
                              {
                                  "id": 1032,
                                  "name": "grated parmesan cheese",
                                  "localizedName": "grated parmesan cheese",
                                  "image": "parmesan.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "soup",
                                  "localizedName": "soup",
                                  "image": ""
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404630,
                                  "name": "ladle",
                                  "localizedName": "ladle",
                                  "image": "ladle.jpg"
                              },
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 9,
                          "step": "Makes 20 cups",
                          "ingredients": [],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularSourceUrl": "https://spoonacular.com/make-olive-gardens-delicious-pasta-fagioli-at-home-650654"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": false,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 11,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 13,
          "creditsText": "foodista.com",
          "sourceName": "foodista.com",
          "pricePerServing": 293.39,
          "extendedIngredients": [
              {
                  "id": 99209,
                  "aisle": "Refrigerated",
                  "image": "onion-dip.png",
                  "consistency": "SOLID",
                  "name": "gorgonzola dip",
                  "nameClean": "onion dip",
                  "original": "Gorgonzola Dip",
                  "originalName": "Gorgonzola Dip",
                  "amount": 8.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 8.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 8.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 1179,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "sour-cream.jpg",
                  "consistency": "SOLID",
                  "name": "cream",
                  "nameClean": "light sour cream",
                  "original": "1/2 cup reduced-fat sour cream",
                  "originalName": "reduced-fat sour cream",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [
                      "sour",
                      "reduced-fat"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 115.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 1256,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "plain-yogurt.jpg",
                  "consistency": "LIQUID",
                  "name": "greek yogurt",
                  "nameClean": "greek yogurt",
                  "original": "1/4 cup Greek yogurt",
                  "originalName": "Greek yogurt",
                  "amount": 0.25,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 50.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 1011004,
                  "aisle": "Cheese",
                  "image": "gorgonzola.jpg",
                  "consistency": "SOLID",
                  "name": "gorgonzola",
                  "nameClean": "gorgonzola",
                  "original": "1/2 cup crumbled gorgonzola",
                  "originalName": "crumbled gorgonzola",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [
                      "crumbled"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 56.5,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11215,
                  "aisle": "Produce",
                  "image": "garlic.png",
                  "consistency": "SOLID",
                  "name": "garlic pepper",
                  "nameClean": "garlic",
                  "original": "1 teaspoon garlic pepper (or your favorite house seasoning)",
                  "originalName": "garlic pepper (or your favorite house seasoning)",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [
                      "your favorite",
                      "(or house seasoning)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "SOLID",
                  "name": "salt",
                  "nameClean": "table salt",
                  "original": "1/2 teaspoon salt",
                  "originalName": "salt",
                  "amount": 0.5,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 2048,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "apple-cider-vinegar.jpg",
                  "consistency": "LIQUID",
                  "name": "apple cider vinegar",
                  "nameClean": "apple cider vinegar",
                  "original": "1 tablespoon apple cider vinegar",
                  "originalName": "apple cider vinegar",
                  "amount": 1.0,
                  "unit": "tablespoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 17330,
                  "aisle": "Meat",
                  "image": "fresh-ground-beef.jpg",
                  "consistency": "SOLID",
                  "name": "buffalo strips",
                  "nameClean": "bison",
                  "original": "Buffalo Strips",
                  "originalName": "Buffalo Strips",
                  "amount": 8.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 8.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 8.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 1055062,
                  "aisle": "Meat",
                  "image": "chicken-breasts.png",
                  "consistency": "SOLID",
                  "name": "chicken breasts",
                  "nameClean": "boneless skinless chicken breast",
                  "original": "1 pound boneless, skinless chicken breasts, cut into strips",
                  "originalName": "boneless, skinless chicken breasts, cut into strips",
                  "amount": 1.0,
                  "unit": "pound",
                  "meta": [
                      "boneless",
                      "skinless",
                      "cut into strips"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "lb",
                          "unitLong": "pound"
                      },
                      "metric": {
                          "amount": 453.592,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "SOLID",
                  "name": "salt",
                  "nameClean": "table salt",
                  "original": "2 teaspoons salt",
                  "originalName": "salt",
                  "amount": 2.0,
                  "unit": "teaspoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 93749,
                  "aisle": "Ethnic Foods",
                  "image": "chili-garlic-sauce.jpg",
                  "consistency": "LIQUID",
                  "name": "chili garlic sauce",
                  "nameClean": "chili garlic sauce",
                  "original": "2 teaspoons chili garlic sauce",
                  "originalName": "chili garlic sauce",
                  "amount": 2.0,
                  "unit": "teaspoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 98878,
                  "aisle": "Condiments",
                  "image": "hot-sauce-or-tabasco.png",
                  "consistency": "SOLID",
                  "name": "frank's",
                  "nameClean": "buffalo sauce",
                  "original": "2 tablespoons Frank's Red Hot",
                  "originalName": "Frank's Red Hot",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [
                      "red",
                      "hot"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 1088,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "buttermilk.jpg",
                  "consistency": "SOLID",
                  "name": "buttermilk",
                  "nameClean": "low fat buttermilk",
                  "original": "1 cup low fat buttermilk",
                  "originalName": "low fat buttermilk",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [
                      "low fat"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 240.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 10018079,
                  "aisle": "Baking",
                  "image": "panko.jpg",
                  "consistency": "SOLID",
                  "name": "panko crumbs",
                  "nameClean": "panko",
                  "original": "1 1/2 cups whole wheat panko crumbs",
                  "originalName": "whole wheat panko crumbs",
                  "amount": 1.5,
                  "unit": "cups",
                  "meta": [
                      "whole wheat"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.5,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 90.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 20080,
                  "aisle": "Baking",
                  "image": "flour.png",
                  "consistency": "SOLID",
                  "name": "flour",
                  "nameClean": "whole wheat flour",
                  "original": "8 tablespoons whole wheat flour",
                  "originalName": "whole wheat flour",
                  "amount": 8.0,
                  "unit": "tablespoons",
                  "meta": [
                      "whole wheat"
                  ],
                  "measures": {
                      "us": {
                          "amount": 8.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 8.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 1012028,
                  "aisle": "Spices and Seasonings",
                  "image": "paprika.jpg",
                  "consistency": "SOLID",
                  "name": "paprika",
                  "nameClean": "smoked paprika",
                  "original": "1 1/2 teaspoons smoked paprika",
                  "originalName": "smoked paprika",
                  "amount": 1.5,
                  "unit": "teaspoons",
                  "meta": [
                      "smoked"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 1.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 2031,
                  "aisle": "Spices and Seasonings",
                  "image": "chili-powder.jpg",
                  "consistency": "SOLID",
                  "name": "cayenne",
                  "nameClean": "ground cayenne pepper",
                  "original": "1 teaspoon cayenne",
                  "originalName": "cayenne",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "SOLID",
                  "name": "salt",
                  "nameClean": "table salt",
                  "original": "1 1/2 teaspoons salt",
                  "originalName": "salt",
                  "amount": 1.5,
                  "unit": "teaspoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 1.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 98878,
                  "aisle": "Condiments",
                  "image": "hot-sauce-or-tabasco.png",
                  "consistency": "SOLID",
                  "name": "frank's",
                  "nameClean": "buffalo sauce",
                  "original": "1/4 cup Frank's Red Hot",
                  "originalName": "Frank's Red Hot",
                  "amount": 0.25,
                  "unit": "cup",
                  "meta": [
                      "red",
                      "hot"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 60.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              }
          ],
          "id": 635657,
          "title": "Boneless Buffalo Strips",
          "readyInMinutes": 45,
          "servings": 8,
          "sourceUrl": "https://www.foodista.com/recipe/Q7TVWWX2/boneless-buffalo-strips",
          "image": "https://spoonacular.com/recipeImages/635657-556x370.jpg",
          "imageType": "jpg",
          "summary": "Boneless Buffalo Strips requires around <b>45 minutes</b> from start to finish. One serving contains <b>389 calories</b>, <b>34g of protein</b>, and <b>20g of fat</b>. This recipe serves 8 and costs $2.93 per serving. Only a few people made this recipe, and 2 would say it hit the spot. It is brought to you by Foodista. A mixture of chicken breasts, cream, flour, and a handful of other ingredients are all it takes to make this recipe so tasty. It works well as a main course. With a spoonacular <b>score of 41%</b>, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/boneless-buffalo-strips-1312765\">Boneless Buffalo Strips</a>, <a href=\"https://spoonacular.com/recipes/boneless-buffalo-strips-1249767\">Boneless Buffalo Strips</a>, and <a href=\"https://spoonacular.com/recipes/boneless-buffalo-strips-1636439\">Boneless Buffalo Strips</a>.",
          "cuisines": [],
          "dishTypes": [
              "lunch",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [],
          "occasions": [],
          "instructions": "Whisk together buttermilk, chili-garlic sauce, Franks, buttermilk, vinegar and salt.  Add chicken and marinate overnight.\nPreheat oven to 450 degrees.  Spray wire rack with cooking spray.\nCombine panko, flour, paprika, cayenne and salt in a large bowl.\nDredge chicken in flour mixture, shake of access and place on wire rack.  Repeat with all chicken  pieces.\nSpray chicken breasts with cooking spray, making sure to hit all parts of the chicken.\nCook for 10 minutes.  Take out, turn chicken pieces over, spray again, and return to oven for another 5 minutes, or until all pieces are golden brown and chicken reaches 155 degrees.\nMeanwhile, in a small food processor add ingredients for gorgonzola dip.  Process until smooth.\nWhen chicken strips are done, with a pastry brush, brush strips with Franks Red Hot.  Serve with gorgonzola sauce and carrot and celery sticks.",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Whisk together buttermilk, chili-garlic sauce, Franks, buttermilk, vinegar and salt.",
                          "ingredients": [
                              {
                                  "id": 93749,
                                  "name": "chili garlic sauce",
                                  "localizedName": "chili garlic sauce",
                                  "image": "chili-garlic-sauce.jpg"
                              },
                              {
                                  "id": 1230,
                                  "name": "buttermilk",
                                  "localizedName": "buttermilk",
                                  "image": "buttermilk.jpg"
                              },
                              {
                                  "id": 2053,
                                  "name": "vinegar",
                                  "localizedName": "vinegar",
                                  "image": "vinegar-(white).jpg"
                              },
                              {
                                  "id": 21118,
                                  "name": "hot dogs",
                                  "localizedName": "hot dogs",
                                  "image": "hotdogs.png"
                              },
                              {
                                  "id": 2047,
                                  "name": "salt",
                                  "localizedName": "salt",
                                  "image": "salt.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404661,
                                  "name": "whisk",
                                  "localizedName": "whisk",
                                  "image": "whisk.png"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Add chicken and marinate overnight.",
                          "ingredients": [
                              {
                                  "id": 5006,
                                  "name": "whole chicken",
                                  "localizedName": "whole chicken",
                                  "image": "whole-chicken.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 3,
                          "step": "Preheat oven to 450 degrees.  Spray wire rack with cooking spray.",
                          "ingredients": [
                              {
                                  "id": 4679,
                                  "name": "cooking spray",
                                  "localizedName": "cooking spray",
                                  "image": "cooking-spray.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 405900,
                                  "name": "wire rack",
                                  "localizedName": "wire rack",
                                  "image": "wire-rack.jpg"
                              },
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "Combine panko, flour, paprika, cayenne and salt in a large bowl.",
                          "ingredients": [
                              {
                                  "id": 2031,
                                  "name": "ground cayenne pepper",
                                  "localizedName": "ground cayenne pepper",
                                  "image": "chili-powder.jpg"
                              },
                              {
                                  "id": 2028,
                                  "name": "paprika",
                                  "localizedName": "paprika",
                                  "image": "paprika.jpg"
                              },
                              {
                                  "id": 20081,
                                  "name": "all purpose flour",
                                  "localizedName": "all purpose flour",
                                  "image": "flour.png"
                              },
                              {
                                  "id": 10018079,
                                  "name": "panko",
                                  "localizedName": "panko",
                                  "image": "panko.jpg"
                              },
                              {
                                  "id": 2047,
                                  "name": "salt",
                                  "localizedName": "salt",
                                  "image": "salt.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 5,
                          "step": "Dredge chicken in flour mixture, shake of access and place on wire rack.  Repeat with all chicken  pieces.",
                          "ingredients": [
                              {
                                  "id": 5006,
                                  "name": "whole chicken",
                                  "localizedName": "whole chicken",
                                  "image": "whole-chicken.jpg"
                              },
                              {
                                  "id": 20081,
                                  "name": "all purpose flour",
                                  "localizedName": "all purpose flour",
                                  "image": "flour.png"
                              },
                              {
                                  "id": 0,
                                  "name": "shake",
                                  "localizedName": "shake",
                                  "image": ""
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 405900,
                                  "name": "wire rack",
                                  "localizedName": "wire rack",
                                  "image": "wire-rack.jpg"
                              }
                          ]
                      },
                      {
                          "number": 6,
                          "step": "Spray chicken breasts with cooking spray, making sure to hit all parts of the chicken.",
                          "ingredients": [
                              {
                                  "id": 5062,
                                  "name": "chicken breast",
                                  "localizedName": "chicken breast",
                                  "image": "chicken-breasts.png"
                              },
                              {
                                  "id": 4679,
                                  "name": "cooking spray",
                                  "localizedName": "cooking spray",
                                  "image": "cooking-spray.png"
                              },
                              {
                                  "id": 5006,
                                  "name": "whole chicken",
                                  "localizedName": "whole chicken",
                                  "image": "whole-chicken.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 7,
                          "step": "Cook for 10 minutes.  Take out, turn chicken pieces over, spray again, and return to oven for another 5 minutes, or until all pieces are golden brown and chicken reaches 155 degrees.",
                          "ingredients": [
                              {
                                  "id": 1005006,
                                  "name": "chicken pieces",
                                  "localizedName": "chicken pieces",
                                  "image": "chicken-parts.jpg"
                              },
                              {
                                  "id": 5006,
                                  "name": "whole chicken",
                                  "localizedName": "whole chicken",
                                  "image": "whole-chicken.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ],
                          "length": {
                              "number": 15,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 8,
                          "step": "Meanwhile, in a small food processor add ingredients for gorgonzola dip.  Process until smooth.",
                          "ingredients": [
                              {
                                  "id": 1011004,
                                  "name": "gorgonzola",
                                  "localizedName": "gorgonzola",
                                  "image": "gorgonzola.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "dip",
                                  "localizedName": "dip",
                                  "image": ""
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404771,
                                  "name": "food processor",
                                  "localizedName": "food processor",
                                  "image": "food-processor.png"
                              }
                          ]
                      },
                      {
                          "number": 9,
                          "step": "When chicken strips are done, with a pastry brush, brush strips with Franks Red Hot.",
                          "ingredients": [
                              {
                                  "id": 1015062,
                                  "name": "chicken tenders",
                                  "localizedName": "chicken tenders",
                                  "image": "chicken-tenders-or-fingers.png"
                              },
                              {
                                  "id": 21118,
                                  "name": "hot dogs",
                                  "localizedName": "hot dogs",
                                  "image": "hotdogs.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404764,
                                  "name": "pastry brush",
                                  "localizedName": "pastry brush",
                                  "image": "pastry-brush.jpg"
                              }
                          ]
                      },
                      {
                          "number": 10,
                          "step": "Serve with gorgonzola sauce and carrot and celery sticks.",
                          "ingredients": [
                              {
                                  "id": 10111143,
                                  "name": "celery rib",
                                  "localizedName": "celery sticks",
                                  "image": "celery.jpg"
                              },
                              {
                                  "id": 1011004,
                                  "name": "gorgonzola",
                                  "localizedName": "gorgonzola",
                                  "image": "gorgonzola.jpg"
                              },
                              {
                                  "id": 11124,
                                  "name": "carrot",
                                  "localizedName": "carrot",
                                  "image": "sliced-carrot.png"
                              },
                              {
                                  "id": 0,
                                  "name": "sauce",
                                  "localizedName": "sauce",
                                  "image": ""
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularSourceUrl": "https://spoonacular.com/boneless-buffalo-strips-635657"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 57,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 11,
          "healthScore": 34,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 418.4,
          "extendedIngredients": [
              {
                  "id": 10010088,
                  "aisle": "Meat",
                  "image": "raw-pork-ribs.jpg",
                  "consistency": "SOLID",
                  "name": "pork spare ribs",
                  "nameClean": "pork spare ribs",
                  "original": "2 lbs. pork spare ribs",
                  "originalName": "pork spare ribs",
                  "amount": 2.0,
                  "unit": "lbs",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "lb",
                          "unitLong": "pounds"
                      },
                      "metric": {
                          "amount": 907.185,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 1001,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "butter-sliced.jpg",
                  "consistency": "SOLID",
                  "name": "butter",
                  "nameClean": "butter",
                  "original": "1 Tbsp. butter",
                  "originalName": "butter",
                  "amount": 1.0,
                  "unit": "Tbsp",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "SOLID",
                  "name": "onions",
                  "nameClean": "onion",
                  "original": "2 onions, diced",
                  "originalName": "onions, diced",
                  "amount": 2.0,
                  "unit": "",
                  "meta": [
                      "diced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 11935,
                  "aisle": "Condiments",
                  "image": "ketchup.png",
                  "consistency": "LIQUID",
                  "name": "ketchup",
                  "nameClean": "ketchup",
                  "original": "¾ cup ketchup",
                  "originalName": "ketchup",
                  "amount": 0.75,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.75,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 180.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 6150,
                  "aisle": "Condiments",
                  "image": "barbecue-sauce.jpg",
                  "consistency": "SOLID",
                  "name": "barbecue sauce",
                  "nameClean": "barbecue sauce",
                  "original": "¼ cup barbecue sauce",
                  "originalName": "barbecue sauce",
                  "amount": 0.25,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 71.5,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 2053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "vinegar-(white).jpg",
                  "consistency": "LIQUID",
                  "name": "vinegar",
                  "nameClean": "distilled white vinegar",
                  "original": "½ cup white vinegar",
                  "originalName": "white vinegar",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [
                      "white"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 127.5,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 10019334,
                  "aisle": "Baking",
                  "image": "dark-brown-sugar.png",
                  "consistency": "SOLID",
                  "name": "brown sugar",
                  "nameClean": "dark brown sugar",
                  "original": "2 Tbsp. dark brown sugar",
                  "originalName": "dark brown sugar",
                  "amount": 2.0,
                  "unit": "Tbsp",
                  "meta": [
                      "dark"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 1002024,
                  "aisle": "Spices and Seasonings",
                  "image": "dry-mustard.jpg",
                  "consistency": "SOLID",
                  "name": "mustard powder",
                  "nameClean": "mustard powder",
                  "original": "½ Tsp. dry mustard powder",
                  "originalName": "dry mustard powder",
                  "amount": 0.5,
                  "unit": "Tsp",
                  "meta": [
                      "dry"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 1022020,
                  "aisle": "Spices and Seasonings",
                  "image": "garlic-powder.png",
                  "consistency": "SOLID",
                  "name": "garlic powder",
                  "nameClean": "garlic powder",
                  "original": "1 Tsp. garlic powder",
                  "originalName": "garlic powder",
                  "amount": 1.0,
                  "unit": "Tsp",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 6971,
                  "aisle": "Condiments",
                  "image": "dark-sauce.jpg",
                  "consistency": "LIQUID",
                  "name": "worcestershire sauce",
                  "nameClean": "worcestershire sauce",
                  "original": "2 Tbsp. Worcestershire sauce",
                  "originalName": "Worcestershire sauce",
                  "amount": 2.0,
                  "unit": "Tbsp",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 1102047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt-and-pepper.jpg",
                  "consistency": "SOLID",
                  "name": "salt and pepper",
                  "nameClean": "salt and pepper",
                  "original": "salt and pepper to taste",
                  "originalName": "salt and pepper to taste",
                  "amount": 2.0,
                  "unit": "servings",
                  "meta": [
                      "to taste"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              }
          ],
          "id": 662442,
          "title": "Sweet and Sour BBQ Spare Ribs",
          "readyInMinutes": 45,
          "servings": 2,
          "sourceUrl": "https://www.foodista.com/recipe/WKRKBQCW/sweet-and-sour-bbq-spare-ribs",
          "image": "https://spoonacular.com/recipeImages/662442-556x370.jpg",
          "imageType": "jpg",
          "summary": "You can never have too many main course recipes, so give Sweet and Sour BBQ Spare Ribs a try. One portion of this dish contains approximately <b>73g of protein</b>, <b>113g of fat</b>, and a total of <b>1582 calories</b>. This gluten free recipe serves 2 and costs <b>$4.18 per serving</b>. 11 person were glad they tried this recipe. If you have pork spare ribs, barbecue sauce, salt and pepper, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. Overall, this recipe earns an <b>excellent spoonacular score of 82%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/sweet-and-sour-bbq-spare-ribs-1249439\">Sweet and Sour BBQ Spare Ribs</a>, <a href=\"https://spoonacular.com/recipes/dinner-tonight-sweet-and-sour-spare-ribs-207751\">Dinner Tonight: Sweet and Sour Spare Ribs</a>, and <a href=\"https://spoonacular.com/recipes/chinese-takeout-style-sweet-and-sour-spare-ribs-202918\">Chinese Takeout-Style Sweet and Sour Spare Ribs</a>.",
          "cuisines": [],
          "dishTypes": [
              "lunch",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [
              "gluten free"
          ],
          "occasions": [],
          "instructions": "Preheat oven to 250\nIn a bowl, whisk together ketchup, barbecue sauce, vinegar, brown sugar, mustard powder, garlic powder, and Worcestershire sauce. Salt and pepper to taste. Set aside.\nIn a large skillet, melt butter over medium high heat. Add ribs and brown on both sides. Place ribs, meat side down, in a 913 inch baking pan. Add diced onions to dish and cover with sauce.\nCover baking dish with tin foil and bake in the oven for 4  4  hours until meat is tender and easily falls off the bone.\nserves 2-3",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "In a bowl, whisk together ketchup, barbecue sauce, vinegar, brown sugar, mustard powder, garlic powder, and Worcestershire sauce. Salt and pepper to taste. Set aside.",
                          "ingredients": [
                              {
                                  "id": 6971,
                                  "name": "worcestershire sauce",
                                  "localizedName": "worcestershire sauce",
                                  "image": "dark-sauce.jpg"
                              },
                              {
                                  "id": 1102047,
                                  "name": "salt and pepper",
                                  "localizedName": "salt and pepper",
                                  "image": "salt-and-pepper.jpg"
                              },
                              {
                                  "id": 6150,
                                  "name": "barbecue sauce",
                                  "localizedName": "barbecue sauce",
                                  "image": "barbecue-sauce.jpg"
                              },
                              {
                                  "id": 1002024,
                                  "name": "mustard powder",
                                  "localizedName": "mustard powder",
                                  "image": "dry-mustard.jpg"
                              },
                              {
                                  "id": 1022020,
                                  "name": "garlic powder",
                                  "localizedName": "garlic powder",
                                  "image": "garlic-powder.png"
                              },
                              {
                                  "id": 19334,
                                  "name": "brown sugar",
                                  "localizedName": "brown sugar",
                                  "image": "dark-brown-sugar.png"
                              },
                              {
                                  "id": 11935,
                                  "name": "ketchup",
                                  "localizedName": "ketchup",
                                  "image": "ketchup.png"
                              },
                              {
                                  "id": 2053,
                                  "name": "vinegar",
                                  "localizedName": "vinegar",
                                  "image": "vinegar-(white).jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404661,
                                  "name": "whisk",
                                  "localizedName": "whisk",
                                  "image": "whisk.png"
                              },
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 3,
                          "step": "In a large skillet, melt butter over medium high heat.",
                          "ingredients": [
                              {
                                  "id": 1001,
                                  "name": "butter",
                                  "localizedName": "butter",
                                  "image": "butter-sliced.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "Add ribs and brown on both sides.",
                          "ingredients": [
                              {
                                  "id": 23236,
                                  "name": "ribs",
                                  "localizedName": "ribs",
                                  "image": "ribs.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 5,
                          "step": "Place ribs, meat side down, in a 913 inch baking pan.",
                          "ingredients": [
                              {
                                  "id": 1065062,
                                  "name": "meat",
                                  "localizedName": "meat",
                                  "image": "whole-chicken.jpg"
                              },
                              {
                                  "id": 23236,
                                  "name": "ribs",
                                  "localizedName": "ribs",
                                  "image": "ribs.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404646,
                                  "name": "baking pan",
                                  "localizedName": "baking pan",
                                  "image": "roasting-pan.jpg"
                              }
                          ]
                      },
                      {
                          "number": 6,
                          "step": "Add diced onions to dish and cover with sauce.",
                          "ingredients": [
                              {
                                  "id": 11282,
                                  "name": "onion",
                                  "localizedName": "onion",
                                  "image": "brown-onion.png"
                              },
                              {
                                  "id": 0,
                                  "name": "sauce",
                                  "localizedName": "sauce",
                                  "image": ""
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 7,
                          "step": "Cover baking dish with tin foil and bake in the oven for 4  4  hours until meat is tender and easily falls off the bone.",
                          "ingredients": [
                              {
                                  "id": 0,
                                  "name": "bone",
                                  "localizedName": "bone",
                                  "image": ""
                              },
                              {
                                  "id": 1065062,
                                  "name": "meat",
                                  "localizedName": "meat",
                                  "image": "whole-chicken.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404646,
                                  "name": "baking pan",
                                  "localizedName": "baking pan",
                                  "image": "roasting-pan.jpg"
                              },
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              },
                              {
                                  "id": 404765,
                                  "name": "aluminum foil",
                                  "localizedName": "aluminum foil",
                                  "image": "aluminum-foil.png"
                              }
                          ]
                      },
                      {
                          "number": 8,
                          "step": "serves 2-3",
                          "ingredients": [],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularSourceUrl": "https://spoonacular.com/sweet-and-sour-bbq-spare-ribs-662442"
      },
      {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": false,
          "dairyFree": false,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 133,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 90,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 1566.24,
          "extendedIngredients": [
              {
                  "id": 6170,
                  "aisle": "Canned and Jarred",
                  "image": "beef-broth.png",
                  "consistency": "LIQUID",
                  "name": "beef stock",
                  "nameClean": "beef stock",
                  "original": "4 cups - Beef Stock",
                  "originalName": "Beef Stock",
                  "amount": 4.0,
                  "unit": "cups",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 960.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 1001,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "butter-sliced.jpg",
                  "consistency": "SOLID",
                  "name": "butter",
                  "nameClean": "butter",
                  "original": "8 Tbs. - Butter",
                  "originalName": "Butter",
                  "amount": 8.0,
                  "unit": "Tbs",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 8.0,
                          "unitShort": "Tbs",
                          "unitLong": "Tbs"
                      },
                      "metric": {
                          "amount": 8.0,
                          "unitShort": "Tbs",
                          "unitLong": "Tbs"
                      }
                  }
              },
              {
                  "id": 6172,
                  "aisle": "Canned and Jarred",
                  "image": "chicken-broth.png",
                  "consistency": "LIQUID",
                  "name": "chicken stock",
                  "nameClean": "chicken stock",
                  "original": "4 cups - Chicken Stock",
                  "originalName": "Chicken Stock",
                  "amount": 4.0,
                  "unit": "cups",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 960.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 1001025,
                  "aisle": "Cheese",
                  "image": "shredded-cheese-white.jpg",
                  "consistency": "SOLID",
                  "name": "colby & monterey jack cheese",
                  "nameClean": "monterey jack cheese",
                  "original": "1 cup - Shredded Colby & Monterey Jack Cheese",
                  "originalName": "Shredded Colby & Monterey Jack Cheese",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [
                      "shredded"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 113.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 20027,
                  "aisle": "Baking",
                  "image": "white-powder.jpg",
                  "consistency": "SOLID",
                  "name": "corn starch to thicken soup",
                  "nameClean": "corn starch",
                  "original": "Corn Starch to thicken soup",
                  "originalName": "Corn Starch to thicken soup",
                  "amount": 1.0,
                  "unit": "serving",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "serving",
                          "unitLong": "serving"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "serving",
                          "unitLong": "serving"
                      }
                  }
              },
              {
                  "id": 18029,
                  "aisle": "Bakery/Bread",
                  "image": "crusty-bread.jpg",
                  "consistency": "SOLID",
                  "name": "bread",
                  "nameClean": "french bread",
                  "original": "8 Slices - French Bread (1 inch)",
                  "originalName": "French Bread (1 inch)",
                  "amount": 8.0,
                  "unit": "Slices",
                  "meta": [
                      "french",
                      "(1 inch)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 8.0,
                          "unitShort": "slice",
                          "unitLong": "slices"
                      },
                      "metric": {
                          "amount": 8.0,
                          "unitShort": "slice",
                          "unitLong": "slices"
                      }
                  }
              },
              {
                  "id": 11215,
                  "aisle": "Produce",
                  "image": "garlic.png",
                  "consistency": "SOLID",
                  "name": "johnny's garlic seasoning",
                  "nameClean": "garlic",
                  "original": "2 Tbs. - Johnny's Garlic Seasoning",
                  "originalName": "Johnny's Garlic Seasoning",
                  "amount": 2.0,
                  "unit": "Tbs",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbs",
                          "unitLong": "Tbs"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbs",
                          "unitLong": "Tbs"
                      }
                  }
              },
              {
                  "id": 1022034,
                  "aisle": "Spices and Seasonings",
                  "image": "seasoning.png",
                  "consistency": "SOLID",
                  "name": "montreal steak seasoning",
                  "nameClean": "montreal steak seasoning",
                  "original": "1 Tbs. - Montreal Steak Seasoning",
                  "originalName": "Montreal Steak Seasoning",
                  "amount": 1.0,
                  "unit": "Tbs",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbs",
                          "unitLong": "Tb"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbs",
                          "unitLong": "Tb"
                      }
                  }
              },
              {
                  "id": 4582,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "vegetable-oil.jpg",
                  "consistency": "LIQUID",
                  "name": "oil",
                  "nameClean": "cooking oil",
                  "original": "2 Tbs. - Oil",
                  "originalName": "Oil",
                  "amount": 2.0,
                  "unit": "Tbs",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbs",
                          "unitLong": "Tbs"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbs",
                          "unitLong": "Tbs"
                      }
                  }
              },
              {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "SOLID",
                  "name": "onion",
                  "nameClean": "onion",
                  "original": "1 Large Onion (diced)",
                  "originalName": "Large Onion (diced)",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [
                      "diced",
                      "()"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 10211821,
                  "aisle": "Produce",
                  "image": "yellow-bell-pepper.jpg",
                  "consistency": "SOLID",
                  "name": "bell pepper",
                  "nameClean": "bell pepper",
                  "original": "Pepper to taste",
                  "originalName": "Pepper to taste",
                  "amount": 1.0,
                  "unit": "serving",
                  "meta": [
                      "to taste"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "serving",
                          "unitLong": "serving"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "serving",
                          "unitLong": "serving"
                      }
                  }
              },
              {
                  "id": 10211821,
                  "aisle": "Produce",
                  "image": "bell-pepper-orange.png",
                  "consistency": "SOLID",
                  "name": "bell pepper",
                  "nameClean": "bell pepper",
                  "original": "Pepper to taste",
                  "originalName": "Pepper to taste",
                  "amount": 1.0,
                  "unit": "serving",
                  "meta": [
                      "to taste"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "serving",
                          "unitLong": "serving"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "serving",
                          "unitLong": "serving"
                      }
                  }
              },
              {
                  "id": 1001026,
                  "aisle": "Cheese",
                  "image": "shredded-cheese-white.jpg",
                  "consistency": "SOLID",
                  "name": "mozzarella cheese",
                  "nameClean": "shredded mozzarella",
                  "original": "1 cup - Shredded Mozzarella Cheese",
                  "originalName": "Shredded Mozzarella Cheese",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [
                      "shredded"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 112.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              }
          ],
          "id": 641744,
          "title": "Dunkin French Onion Soup",
          "readyInMinutes": 45,
          "servings": 1,
          "sourceUrl": "http://www.foodista.com/recipe/GP7MVTJK/dunkin-french-onion-soup",
          "image": "https://spoonacular.com/recipeImages/641744-556x370.jpg",
          "imageType": "jpg",
          "summary": "Dunkin French Onion Soup might be a good recipe to expand your main course recipe box. This recipe serves 1. For <b>$15.66 per serving</b>, this recipe <b>covers 80%</b> of your daily requirements of vitamins and minerals. One serving contains <b>3786 calories</b>, <b>155g of protein</b>, and <b>205g of fat</b>. Not a lot of people really liked this Mediterranean dish. Head to the store and pick up montreal steak seasoning, oil, mozzarella cheese, and a few other things to make it today. This recipe is liked by 2 foodies and cooks. It will be a hit at your <b>Autumn</b> event. It is brought to you by Foodista. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 87%</b>, which is super. <a href=\"https://spoonacular.com/recipes/french-onion-soup-topped-french-bread-pizzas-and-salad-with-dijon-vinaigrette-312082\">French Onion Soup Topped French Bread Pizzas and Salad with Dijon Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/crockpot-french-onion-soup-with-cheesy-french-toast-1320489\">Crockpot French Onion Soup with Cheesy French Toast</a>, and <a href=\"https://spoonacular.com/recipes/crockpot-french-onion-soup-with-cheesy-french-toast-685740\">Crockpot French Onion Soup with Cheesy French Toast</a> are very similar to this recipe.",
          "cuisines": [
              "Mediterranean",
              "French",
              "European"
          ],
          "dishTypes": [
              "lunch",
              "soup",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [
              "lacto ovo vegetarian"
          ],
          "occasions": [
              "fall",
              "winter"
          ],
          "instructions": "<ol><li>In a soup pot melt the 4 Tbs. Of the butter with the oil, saut the onions until just slightly caramelized, this will take about 20 minutes. When tender and a golden rich color add in the chicken and beef stock along with the pepper, Montreal steak seasoning and 1  Tbs. of the Johnny's garlic, simmer the soup for another 15 minutes. In the mean time use the remaining butter and Johnny's to turn your French bread into garlic bread, place onto a baking sheet and cook in a 350 degree oven just until the butter mixture has melted. Once the bread is ready remove the tray from the oven and turn the oven to broil, top each slice of bread </li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "In a soup pot melt the 4 Tbs. Of the butter with the oil, saut the onions until just slightly caramelized, this will take about 20 minutes. When tender and a golden rich color add in the chicken and beef stock along with the pepper, Montreal steak seasoning and 1  Tbs. of the Johnny's garlic, simmer the soup for another 15 minutes. In the mean time use the remaining butter and Johnny's to turn your French bread into garlic bread, place onto a baking sheet and cook in a 350 degree oven just until the butter mixture has melted. Once the bread is ready remove the tray from the oven and turn the oven to broil, top each slice of bread",
                          "ingredients": [
                              {
                                  "id": 1022034,
                                  "name": "montreal steak seasoning",
                                  "localizedName": "montreal steak seasoning",
                                  "image": "seasoning.png"
                              },
                              {
                                  "id": 18029,
                                  "name": "french bread",
                                  "localizedName": "french bread",
                                  "image": "crusty-bread.jpg"
                              },
                              {
                                  "id": 6170,
                                  "name": "beef stock",
                                  "localizedName": "beef stock",
                                  "image": "beef-broth.png"
                              },
                              {
                                  "id": 5006,
                                  "name": "whole chicken",
                                  "localizedName": "whole chicken",
                                  "image": "whole-chicken.jpg"
                              },
                              {
                                  "id": 1001,
                                  "name": "butter",
                                  "localizedName": "butter",
                                  "image": "butter-sliced.jpg"
                              },
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              },
                              {
                                  "id": 11282,
                                  "name": "onion",
                                  "localizedName": "onion",
                                  "image": "brown-onion.png"
                              },
                              {
                                  "id": 1002030,
                                  "name": "pepper",
                                  "localizedName": "pepper",
                                  "image": "pepper.jpg"
                              },
                              {
                                  "id": 18064,
                                  "name": "bread",
                                  "localizedName": "bread",
                                  "image": "white-bread.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "soup",
                                  "localizedName": "soup",
                                  "image": ""
                              },
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404727,
                                  "name": "baking sheet",
                                  "localizedName": "baking sheet",
                                  "image": "baking-sheet.jpg"
                              },
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              },
                              {
                                  "id": 404752,
                                  "name": "pot",
                                  "localizedName": "pot",
                                  "image": "stock-pot.jpg"
                              }
                          ],
                          "length": {
                              "number": 35,
                              "unit": "minutes"
                          }
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularSourceUrl": "https://spoonacular.com/dunkin-french-onion-soup-641744"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 15,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 36,
          "creditsText": "foodista.com",
          "sourceName": "foodista.com",
          "pricePerServing": 206.4,
          "extendedIngredients": [
              {
                  "id": 4053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "olive-oil.jpg",
                  "consistency": "LIQUID",
                  "name": "olive oil",
                  "nameClean": "olive oil",
                  "original": "2 teaspoons olive oil",
                  "originalName": "olive oil",
                  "amount": 2.0,
                  "unit": "teaspoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 7036,
                  "aisle": "Meat",
                  "image": "raw-pork-sausage.png",
                  "consistency": "SOLID",
                  "name": "ground turkey sausage",
                  "nameClean": "italian sausage",
                  "original": "1 1/4 pounds ground turkey Italian sausage",
                  "originalName": "ground turkey Italian sausage",
                  "amount": 1.25,
                  "unit": "pounds",
                  "meta": [
                      "italian"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.25,
                          "unitShort": "lb",
                          "unitLong": "pounds"
                      },
                      "metric": {
                          "amount": 566.99,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11352,
                  "aisle": "Produce",
                  "image": "potatoes-yukon-gold.png",
                  "consistency": "SOLID",
                  "name": "potatoes",
                  "nameClean": "potato",
                  "original": "1 1/4 pounds potatoes",
                  "originalName": "potatoes",
                  "amount": 1.25,
                  "unit": "pounds",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.25,
                          "unitShort": "lb",
                          "unitLong": "pounds"
                      },
                      "metric": {
                          "amount": 566.99,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "SOLID",
                  "name": "onion",
                  "nameClean": "onion",
                  "original": "1 medium onion, chopped",
                  "originalName": "onion, chopped",
                  "amount": 1.0,
                  "unit": "medium",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "medium",
                          "unitLong": "medium"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "medium",
                          "unitLong": "medium"
                      }
                  }
              },
              {
                  "id": 11215,
                  "aisle": "Produce",
                  "image": "garlic.png",
                  "consistency": "SOLID",
                  "name": "garlic",
                  "nameClean": "garlic",
                  "original": "3 cloves garlic, minced",
                  "originalName": "garlic, minced",
                  "amount": 3.0,
                  "unit": "cloves",
                  "meta": [
                      "minced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 3.0,
                          "unitShort": "cloves",
                          "unitLong": "cloves"
                      },
                      "metric": {
                          "amount": 3.0,
                          "unitShort": "cloves",
                          "unitLong": "cloves"
                      }
                  }
              },
              {
                  "id": 11233,
                  "aisle": "Produce",
                  "image": "kale.jpg",
                  "consistency": "SOLID",
                  "name": "kale",
                  "nameClean": "kale",
                  "original": "1 bunch kale washed, stems removed and chopped into pieces",
                  "originalName": "kale washed, stems removed and chopped into pieces",
                  "amount": 1.0,
                  "unit": "bunch",
                  "meta": [
                      "washed",
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "bunch",
                          "unitLong": "bunch"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "bunch",
                          "unitLong": "bunch"
                      }
                  }
              },
              {
                  "id": 6970,
                  "aisle": "Canned and Jarred",
                  "image": "chicken-broth.png",
                  "consistency": "LIQUID",
                  "name": "chicken broth",
                  "nameClean": "low sodium chicken broth",
                  "original": "6 cups low-sodium chicken broth",
                  "originalName": "low-sodium chicken broth",
                  "amount": 6.0,
                  "unit": "cups",
                  "meta": [
                      "low-sodium"
                  ],
                  "measures": {
                      "us": {
                          "amount": 6.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 1.416,
                          "unitShort": "l",
                          "unitLong": "liters"
                      }
                  }
              },
              {
                  "id": 2003,
                  "aisle": "Spices and Seasonings",
                  "image": "basil.jpg",
                  "consistency": "SOLID",
                  "name": "basil",
                  "nameClean": "dried basil",
                  "original": "2 teaspoons dried basil",
                  "originalName": "dried basil",
                  "amount": 2.0,
                  "unit": "teaspoons",
                  "meta": [
                      "dried"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 2027,
                  "aisle": "Produce",
                  "image": "oregano.jpg",
                  "consistency": "SOLID",
                  "name": "oregano",
                  "nameClean": "oregano",
                  "original": "2 teaspoons dried oregano",
                  "originalName": "dried oregano",
                  "amount": 2.0,
                  "unit": "teaspoons",
                  "meta": [
                      "dried"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 2018,
                  "aisle": "Spices and Seasonings",
                  "image": "fennel-seeds.jpg",
                  "consistency": "SOLID",
                  "name": "fennel seed",
                  "nameClean": "fennel seeds",
                  "original": "2 teaspoons crushed fennel seed",
                  "originalName": "crushed fennel seed",
                  "amount": 2.0,
                  "unit": "teaspoons",
                  "meta": [
                      "crushed"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 1088,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "buttermilk.jpg",
                  "consistency": "SOLID",
                  "name": "buttermilk",
                  "nameClean": "low fat buttermilk",
                  "original": "1/2 cup low-fat buttermilk",
                  "originalName": "low-fat buttermilk",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [
                      "low-fat"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 120.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 1002030,
                  "aisle": "Spices and Seasonings",
                  "image": "pepper.jpg",
                  "consistency": "SOLID",
                  "name": "ground pepper",
                  "nameClean": "black pepper",
                  "original": "fresh ground pepper to taste",
                  "originalName": "fresh ground pepper to taste",
                  "amount": 6.0,
                  "unit": "servings",
                  "meta": [
                      "fresh",
                      "to taste"
                  ],
                  "measures": {
                      "us": {
                          "amount": 6.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 6.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 11233,
                  "aisle": "Produce",
                  "image": "kale.jpg",
                  "consistency": "SOLID",
                  "name": "kale",
                  "nameClean": "kale",
                  "original": "Kale",
                  "originalName": "Kale",
                  "amount": 6.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 6.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 6.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": -1,
                  "aisle": "?",
                  "image": null,
                  "consistency": "SOLID",
                  "name": "to",
                  "nameClean": null,
                  "original": "1/4 cup to ½ shredded pecorino",
                  "originalName": "to ½ shredded pecorino",
                  "amount": 0.25,
                  "unit": "cup",
                  "meta": [
                      "shredded"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 59.147,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": -1,
                  "aisle": "?",
                  "image": null,
                  "consistency": "SOLID",
                  "name": "to",
                  "nameClean": null,
                  "original": "1/4 cup to ½ shredded pecorino",
                  "originalName": "to ½ shredded pecorino",
                  "amount": 0.25,
                  "unit": "cup",
                  "meta": [
                      "shredded"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 59.147,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              }
          ],
          "id": 648155,
          "title": "Italian Kale and Potato Soup",
          "readyInMinutes": 45,
          "servings": 6,
          "sourceUrl": "https://www.foodista.com/recipe/54VL6QJD/italian-kale-and-potato-soup",
          "image": "https://spoonacular.com/recipeImages/648155-556x370.jpg",
          "imageType": "jpg",
          "summary": "Italian Kale and Potato Soup is a <b>gluten free and whole 30</b> recipe with 6 servings. This main course has <b>480 calories</b>, <b>22g of protein</b>, and <b>33g of fat</b> per serving. For <b>$2.06 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. 2 people have made this recipe and would make it again. If you have oregano, ground turkey sausage, chicken broth, and a few other ingredients on hand, you can make it. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. Not a lot of people really liked this Mediterranean dish. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 80%</b>. This score is great. Similar recipes are <a href=\"https://spoonacular.com/recipes/italian-kale-and-potato-soup-1353063\">Italian Kale and Potato Soup</a>, <a href=\"https://spoonacular.com/recipes/zuppa-vegana-italian-potato-bean-and-kale-soup-158767\">Zuppa Vegana: Italian Potato, Bean, and Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/zuppa-toscana-creamy-potato-kale-soup-with-italian-sausage-618107\">Zuppa Toscana {Creamy Potato & Kale Soup with Italian Sausage}</a>.",
          "cuisines": [
              "Mediterranean",
              "Italian",
              "European"
          ],
          "dishTypes": [
              "lunch",
              "soup",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [
              "gluten free",
              "whole 30"
          ],
          "occasions": [
              "fall",
              "winter"
          ],
          "instructions": "In a large sauce pan, heat oil over medium-high heat. Add sausage, crumble and brown.\nAdd onion and garlic and saute until onions are just tender, about three minutes.\nMeanwhile, create a bouquet garni in cheese cloth with the basil, oregano and fennel. Add it and all remaining ingredients except the kale and buttermilk, bring to a boil, reduce heat, cover and simmer until potatoes are cooked, 10-15 minutes.\nAdd kale and simmer until it is just tender, less than 5 minutes. Remove from heat and stir in buttermilk. Add pepper to taste, you shouldn't need salt. Top with about a tablespoon of cheese.\nServe with a warm, crusty bread.",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "In a large sauce pan, heat oil over medium-high heat.",
                          "ingredients": [
                              {
                                  "id": 0,
                                  "name": "sauce",
                                  "localizedName": "sauce",
                                  "image": ""
                              },
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404669,
                                  "name": "sauce pan",
                                  "localizedName": "sauce pan",
                                  "image": "sauce-pan.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Add sausage, crumble and brown.",
                          "ingredients": [
                              {
                                  "id": 1017063,
                                  "name": "sausage",
                                  "localizedName": "sausage",
                                  "image": "raw-pork-sausage.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 3,
                          "step": "Add onion and garlic and saute until onions are just tender, about three minutes.",
                          "ingredients": [
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              },
                              {
                                  "id": 11282,
                                  "name": "onion",
                                  "localizedName": "onion",
                                  "image": "brown-onion.png"
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 3,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 4,
                          "step": "Meanwhile, create a bouquet garni in cheese cloth with the basil, oregano and fennel.",
                          "ingredients": [
                              {
                                  "id": 1012023,
                                  "name": "bouquet garni",
                                  "localizedName": "bouquet garni",
                                  "image": "mixed-fresh-herbs.jpg"
                              },
                              {
                                  "id": 2027,
                                  "name": "oregano",
                                  "localizedName": "oregano",
                                  "image": "oregano.jpg"
                              },
                              {
                                  "id": 1041009,
                                  "name": "cheese",
                                  "localizedName": "cheese",
                                  "image": "cheddar-cheese.png"
                              },
                              {
                                  "id": 11957,
                                  "name": "fennel",
                                  "localizedName": "fennel",
                                  "image": "fennel.png"
                              },
                              {
                                  "id": 2044,
                                  "name": "basil",
                                  "localizedName": "basil",
                                  "image": "basil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404647,
                                  "name": "cheesecloth",
                                  "localizedName": "cheesecloth",
                                  "image": "cheesecloth.jpg"
                              }
                          ]
                      },
                      {
                          "number": 5,
                          "step": "Add it and all remaining ingredients except the kale and buttermilk, bring to a boil, reduce heat, cover and simmer until potatoes are cooked, 10-15 minutes.",
                          "ingredients": [
                              {
                                  "id": 1230,
                                  "name": "buttermilk",
                                  "localizedName": "buttermilk",
                                  "image": "buttermilk.jpg"
                              },
                              {
                                  "id": 11352,
                                  "name": "potato",
                                  "localizedName": "potato",
                                  "image": "potatoes-yukon-gold.png"
                              },
                              {
                                  "id": 11233,
                                  "name": "kale",
                                  "localizedName": "kale",
                                  "image": "kale.jpg"
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 15,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 6,
                          "step": "Add kale and simmer until it is just tender, less than 5 minutes.",
                          "ingredients": [
                              {
                                  "id": 11233,
                                  "name": "kale",
                                  "localizedName": "kale",
                                  "image": "kale.jpg"
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 5,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 7,
                          "step": "Remove from heat and stir in buttermilk.",
                          "ingredients": [
                              {
                                  "id": 1230,
                                  "name": "buttermilk",
                                  "localizedName": "buttermilk",
                                  "image": "buttermilk.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 8,
                          "step": "Add pepper to taste, you shouldn't need salt. Top with about a tablespoon of cheese.",
                          "ingredients": [
                              {
                                  "id": 1041009,
                                  "name": "cheese",
                                  "localizedName": "cheese",
                                  "image": "cheddar-cheese.png"
                              },
                              {
                                  "id": 1002030,
                                  "name": "pepper",
                                  "localizedName": "pepper",
                                  "image": "pepper.jpg"
                              },
                              {
                                  "id": 2047,
                                  "name": "salt",
                                  "localizedName": "salt",
                                  "image": "salt.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 9,
                          "step": "Serve with a warm, crusty bread.",
                          "ingredients": [
                              {
                                  "id": 10018029,
                                  "name": "crusty bread",
                                  "localizedName": "crusty bread",
                                  "image": "crusty-bread.jpg"
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularSourceUrl": "https://spoonacular.com/italian-kale-and-potato-soup-648155"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 5,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 4,
          "creditsText": "foodista.com",
          "sourceName": "foodista.com",
          "pricePerServing": 205.34,
          "extendedIngredients": [
              {
                  "id": 11011,
                  "aisle": "Produce",
                  "image": "asparagus.png",
                  "consistency": "SOLID",
                  "name": "asparagus spears",
                  "nameClean": "asparagus",
                  "original": "8 ounces of Asparagus Spears, Cut into Thirds",
                  "originalName": "Asparagus Spears, Cut into Thirds",
                  "amount": 8.0,
                  "unit": "ounces",
                  "meta": [
                      "cut into thirds"
                  ],
                  "measures": {
                      "us": {
                          "amount": 8.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 226.796,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 10123,
                  "aisle": "Meat",
                  "image": "raw-bacon.png",
                  "consistency": "SOLID",
                  "name": "bacon",
                  "nameClean": "applewood smoked bacon",
                  "original": "3 slices of Bacon",
                  "originalName": "Bacon",
                  "amount": 3.0,
                  "unit": "slices",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 3.0,
                          "unitShort": "slice",
                          "unitLong": "slices"
                      },
                      "metric": {
                          "amount": 3.0,
                          "unitShort": "slice",
                          "unitLong": "slices"
                      }
                  }
              },
              {
                  "id": 1006615,
                  "aisle": "Canned and Jarred",
                  "image": "chicken-broth.png",
                  "consistency": "LIQUID",
                  "name": "seafood broth",
                  "nameClean": "stock",
                  "original": "2 cups seafood broth",
                  "originalName": "seafood broth",
                  "amount": 2.0,
                  "unit": "cups",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 470.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 1032028,
                  "aisle": "Ethnic Foods",
                  "image": "chili-powder.jpg",
                  "consistency": "SOLID",
                  "name": "cajun spice",
                  "nameClean": "cajun seasoning",
                  "original": "1 tablespoon of Cajun Spice",
                  "originalName": "Cajun Spice",
                  "amount": 1.0,
                  "unit": "tablespoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 11168,
                  "aisle": "Produce",
                  "image": "corn.png",
                  "consistency": "SOLID",
                  "name": "corn",
                  "nameClean": "corn",
                  "original": "1 cup of Corn",
                  "originalName": "Corn",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 154.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11215,
                  "aisle": "Produce",
                  "image": "garlic.png",
                  "consistency": "SOLID",
                  "name": "garlic",
                  "nameClean": "garlic",
                  "original": "3 cloves of garlic, crushed",
                  "originalName": "garlic, crushed",
                  "amount": 3.0,
                  "unit": "cloves",
                  "meta": [
                      "crushed"
                  ],
                  "measures": {
                      "us": {
                          "amount": 3.0,
                          "unitShort": "cloves",
                          "unitLong": "cloves"
                      },
                      "metric": {
                          "amount": 3.0,
                          "unitShort": "cloves",
                          "unitLong": "cloves"
                      }
                  }
              },
              {
                  "id": 1053,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "fluid-cream.jpg",
                  "consistency": "LIQUID",
                  "name": "heavy cream",
                  "nameClean": "cream",
                  "original": "1/2 cup of Heavy Cream",
                  "originalName": "Heavy Cream",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 119.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 1012030,
                  "aisle": "Spices and Seasonings",
                  "image": "seasoning.png",
                  "consistency": "SOLID",
                  "name": "lemon pepper",
                  "nameClean": "lemon pepper",
                  "original": "1 teaspoon of Lemon Pepper",
                  "originalName": "Lemon Pepper",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 1052034,
                  "aisle": "Spices and Seasonings",
                  "image": "seasoning.png",
                  "consistency": "SOLID",
                  "name": "old bay seasoning",
                  "nameClean": "old bay seasoning",
                  "original": "1/2 teaspoon of Old Bay Seasoning",
                  "originalName": "Old Bay Seasoning",
                  "amount": 0.5,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "SOLID",
                  "name": "onion",
                  "nameClean": "onion",
                  "original": "1 Small Onion, Chopped",
                  "originalName": "Small Onion, Chopped",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 1102047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt-and-pepper.jpg",
                  "consistency": "SOLID",
                  "name": "salt and pepper",
                  "nameClean": "salt and pepper",
                  "original": "Salt and Pepper to Taste",
                  "originalName": "Salt and Pepper to Taste",
                  "amount": 8.0,
                  "unit": "servings",
                  "meta": [
                      "to taste"
                  ],
                  "measures": {
                      "us": {
                          "amount": 8.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 8.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 15270,
                  "aisle": "Seafood",
                  "image": "shrimp.png",
                  "consistency": "SOLID",
                  "name": "shrimp",
                  "nameClean": "shrimp",
                  "original": "1 pound Peeled and Cooked Shrimp",
                  "originalName": "Peeled and Cooked Shrimp",
                  "amount": 1.0,
                  "unit": "pound",
                  "meta": [
                      "cooked",
                      "peeled"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "lb",
                          "unitLong": "pound"
                      },
                      "metric": {
                          "amount": 453.592,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11529,
                  "aisle": "Produce",
                  "image": "tomato.png",
                  "consistency": "SOLID",
                  "name": "tomatoes",
                  "nameClean": "tomato",
                  "original": "14 1/2 Oz. Can of Diced Tomatoes",
                  "originalName": "Diced Tomatoes",
                  "amount": 14.5,
                  "unit": "Oz",
                  "meta": [
                      "diced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 14.5,
                          "unitShort": "Oz",
                          "unitLong": "Ozs"
                      },
                      "metric": {
                          "amount": 14.5,
                          "unitShort": "Oz",
                          "unitLong": "Ozs"
                      }
                  }
              }
          ],
          "id": 636742,
          "title": "Cajun Shrimp Chowder",
          "readyInMinutes": 30,
          "servings": 8,
          "sourceUrl": "http://www.foodista.com/recipe/B5XRTYLQ/cajun-shrimp-chowda",
          "image": "https://spoonacular.com/recipeImages/636742-556x370.jpg",
          "imageType": "jpg",
          "summary": "Cajun Shrimp Chowder is a Cajun recipe that serves 8. For <b>$2.05 per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. Watching your figure? This gluten free recipe has <b>180 calories</b>, <b>15g of protein</b>, and <b>10g of fat</b> per serving. This recipe from Foodista requires lemon pepper, tomatoes, shrimp, and cajun spice. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Only a few people made this recipe, and 2 would say it hit the spot. It works well as a main course. With a spoonacular <b>score of 38%</b>, this dish is rather bad. Try <a href=\"https://spoonacular.com/recipes/cajun-shrimp-chowder-1614053\">Cajun Shrimp Chowder</a>, <a href=\"https://spoonacular.com/recipes/cajun-shrimp-and-corn-chowder-961024\">Cajun Shrimp and Corn Chowder</a>, and <a href=\"https://spoonacular.com/recipes/cajun-sweet-potato-seafood-chowder-859560\">Cajun Sweet Potato Seafood Chowder</a> for similar recipes.",
          "cuisines": [
              "Creole",
              "Cajun"
          ],
          "dishTypes": [
              "lunch",
              "soup",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [
              "gluten free"
          ],
          "occasions": [],
          "instructions": "<ol><li>Grab up your frying pan and cook up the three strips of bacon. When they're cooked up, pull them out, chop them up, and drain the bacon fat, reserving about a tablespoon. Turn your heat up to medium and add in your asparagus, onion, and garlic. Cook it up for 2 to 3 minutes.</li><li>Add in the corn and tomatoes.</li><li>Mix it together, give it a minute or two to warm up and then add in the broth, the chopped bacon and your spices; the old bay, cajun, lemon pepper, and salt and pepper to taste.</li><li>Let the whole kit and kaboodle heat up for a good five minutes and then add in your cream.</li><li>And last but most definitely not least, grab up your shrimp and pop them into the pan.</li><li>Give the whole pan a swirl or two and allow the soup a couple minutes to heat back up.</li><li>Serve with green onions sprinkled over the top.</li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Grab up your frying pan and cook up the three strips of bacon. When they're cooked up, pull them out, chop them up, and drain the bacon fat, reserving about a tablespoon. Turn your heat up to medium and add in your asparagus, onion, and garlic. Cook it up for 2 to 3 minutes.",
                          "ingredients": [
                              {
                                  "id": 11011,
                                  "name": "asparagus",
                                  "localizedName": "asparagus",
                                  "image": "asparagus.png"
                              },
                              {
                                  "id": 4609,
                                  "name": "bacon drippings",
                                  "localizedName": "bacon drippings",
                                  "image": "raw-bacon.png"
                              },
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              },
                              {
                                  "id": 10123,
                                  "name": "bacon",
                                  "localizedName": "bacon",
                                  "image": "raw-bacon.png"
                              },
                              {
                                  "id": 11282,
                                  "name": "onion",
                                  "localizedName": "onion",
                                  "image": "brown-onion.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ],
                          "length": {
                              "number": 2,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 2,
                          "step": "Add in the corn and tomatoes.",
                          "ingredients": [
                              {
                                  "id": 11529,
                                  "name": "tomato",
                                  "localizedName": "tomato",
                                  "image": "tomato.png"
                              },
                              {
                                  "id": 11168,
                                  "name": "corn",
                                  "localizedName": "corn",
                                  "image": "corn.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 3,
                          "step": "Mix it together, give it a minute or two to warm up and then add in the broth, the chopped bacon and your spices; the old bay, cajun, lemon pepper, and salt and pepper to taste.",
                          "ingredients": [
                              {
                                  "id": 1102047,
                                  "name": "salt and pepper",
                                  "localizedName": "salt and pepper",
                                  "image": "salt-and-pepper.jpg"
                              },
                              {
                                  "id": 1012030,
                                  "name": "lemon pepper",
                                  "localizedName": "lemon pepper",
                                  "image": "seasoning.png"
                              },
                              {
                                  "id": 2035,
                                  "name": "spices",
                                  "localizedName": "spices",
                                  "image": "spices.png"
                              },
                              {
                                  "id": 10123,
                                  "name": "bacon",
                                  "localizedName": "bacon",
                                  "image": "raw-bacon.png"
                              },
                              {
                                  "id": 1006615,
                                  "name": "broth",
                                  "localizedName": "broth",
                                  "image": "chicken-broth.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 4,
                          "step": "Let the whole kit and kaboodle heat up for a good five minutes and then add in your cream.And last but most definitely not least, grab up your shrimp and pop them into the pan.Give the whole pan a swirl or two and allow the soup a couple minutes to heat back up.",
                          "ingredients": [
                              {
                                  "id": 15270,
                                  "name": "shrimp",
                                  "localizedName": "shrimp",
                                  "image": "shrimp.png"
                              },
                              {
                                  "id": 1053,
                                  "name": "cream",
                                  "localizedName": "cream",
                                  "image": "fluid-cream.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "soup",
                                  "localizedName": "soup",
                                  "image": ""
                              },
                              {
                                  "id": 0,
                                  "name": "pop",
                                  "localizedName": "soft drink",
                                  "image": ""
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ],
                          "length": {
                              "number": 5,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 5,
                          "step": "Serve with green onions sprinkled over the top.",
                          "ingredients": [
                              {
                                  "id": 11291,
                                  "name": "green onions",
                                  "localizedName": "green onions",
                                  "image": "spring-onions.jpg"
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularSourceUrl": "https://spoonacular.com/cajun-shrimp-chowder-636742"
      }
  ])
  },
  getLunches: (req, res) => {
    res.send([
          {
              "vegetarian": false,
              "vegan": false,
              "glutenFree": false,
              "dairyFree": false,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": false,
              "weightWatcherSmartPoints": 41,
              "gaps": "no",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 8,
              "healthScore": 53,
              "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              "license": "CC BY 3.0",
              "sourceName": "Foodista",
              "pricePerServing": 617.9,
              "extendedIngredients": [
                  {
                      "id": 10011457,
                      "aisle": "Produce",
                      "image": "spinach.jpg",
                      "consistency": "SOLID",
                      "name": "spinach",
                      "nameClean": "spinach",
                      "original": "250g fresh spinach, cleaned",
                      "originalName": "fresh spinach, cleaned",
                      "amount": 250.0,
                      "unit": "g",
                      "meta": [
                          "fresh",
                          "cleaned"
                      ],
                      "measures": {
                          "us": {
                              "amount": 8.818,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 250.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 11260,
                      "aisle": "Produce",
                      "image": "mushrooms.png",
                      "consistency": "SOLID",
                      "name": "mushrooms",
                      "nameClean": "fresh mushrooms",
                      "original": "4 large mushrooms (about 400g), stems separated from caps",
                      "originalName": "large mushrooms (about , stems separated from caps",
                      "amount": 400.0,
                      "unit": "g",
                      "meta": [
                          "separated"
                      ],
                      "measures": {
                          "us": {
                              "amount": 14.11,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 400.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 11260,
                      "aisle": "Produce",
                      "image": "mushrooms-white.jpg",
                      "consistency": "SOLID",
                      "name": "mushrooms",
                      "nameClean": "fresh mushrooms",
                      "original": "4 large mushrooms (about 400g), stems separated from caps",
                      "originalName": "large mushrooms (about , stems separated from caps",
                      "amount": 400.0,
                      "unit": "g",
                      "meta": [
                          "separated"
                      ],
                      "measures": {
                          "us": {
                              "amount": 14.11,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 400.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 1001,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "butter-sliced.jpg",
                      "consistency": "SOLID",
                      "name": "butter",
                      "nameClean": "butter",
                      "original": "½ Tbs butter",
                      "originalName": "butter",
                      "amount": 0.5,
                      "unit": "Tbs",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          },
                          "metric": {
                              "amount": 0.5,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          }
                      }
                  },
                  {
                      "id": 11282,
                      "aisle": "Produce",
                      "image": "brown-onion.png",
                      "consistency": "SOLID",
                      "name": "onion",
                      "nameClean": "onion",
                      "original": "½ onion, chopped",
                      "originalName": "onion, chopped",
                      "amount": 0.5,
                      "unit": "",
                      "meta": [
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 0.5,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 1036,
                      "aisle": "Cheese",
                      "image": "ricotta.png",
                      "consistency": "SOLID",
                      "name": "ricotta cheese",
                      "nameClean": "ricotta cheese",
                      "original": "250g ricotta cheese",
                      "originalName": "ricotta cheese",
                      "amount": 250.0,
                      "unit": "g",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 8.818,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 250.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 1004,
                      "aisle": "Cheese",
                      "image": "blue-cheese.png",
                      "consistency": "SOLID",
                      "name": "cheese",
                      "nameClean": "blue cheese",
                      "original": "50 g blue cheese",
                      "originalName": "blue cheese",
                      "amount": 50.0,
                      "unit": "g",
                      "meta": [
                          "blue"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.764,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 50.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 1002030,
                      "aisle": "Spices and Seasonings",
                      "image": "pepper.jpg",
                      "consistency": "SOLID",
                      "name": "pepper",
                      "nameClean": "black pepper",
                      "original": "¼ tsp black pepper",
                      "originalName": "black pepper",
                      "amount": 0.25,
                      "unit": "tsp",
                      "meta": [
                          "black"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.25,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 0.25,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 11156,
                      "aisle": "Produce",
                      "image": "fresh-chives.jpg",
                      "consistency": "SOLID",
                      "name": "chives",
                      "nameClean": "chives",
                      "original": "Fresh chives, chopped",
                      "originalName": "Fresh chives, chopped",
                      "amount": 2.0,
                      "unit": "servings",
                      "meta": [
                          "fresh",
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "servings",
                              "unitLong": "servings"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "servings",
                              "unitLong": "servings"
                          }
                      }
                  },
                  {
                      "id": 18079,
                      "aisle": "Pasta and Rice",
                      "image": "breadcrumbs.jpg",
                      "consistency": "SOLID",
                      "name": "breadcrumbs",
                      "nameClean": "breadcrumbs",
                      "original": "2 Tbs homemade breadcrumbs",
                      "originalName": "homemade breadcrumbs",
                      "amount": 2.0,
                      "unit": "Tbs",
                      "meta": [
                          "homemade"
                      ],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          }
                      }
                  },
                  {
                      "id": 1033,
                      "aisle": "Cheese",
                      "image": "parmesan.jpg",
                      "consistency": "SOLID",
                      "name": "parmesan cheese",
                      "nameClean": "parmesan",
                      "original": "2 Tbs Parmesan cheese, grated",
                      "originalName": "Parmesan cheese, grated",
                      "amount": 2.0,
                      "unit": "Tbs",
                      "meta": [
                          "grated"
                      ],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          }
                      }
                  },
                  {
                      "id": 4053,
                      "aisle": "Oil, Vinegar, Salad Dressing",
                      "image": "olive-oil.jpg",
                      "consistency": "LIQUID",
                      "name": "olive oil",
                      "nameClean": "olive oil",
                      "original": "2 Tbs olive oil",
                      "originalName": "olive oil",
                      "amount": 2.0,
                      "unit": "Tbs",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          }
                      }
                  },
                  {
                      "id": 93803,
                      "aisle": "Ethnic Foods",
                      "image": "dry-udon-noodles.png",
                      "consistency": "SOLID",
                      "name": "rice pasta",
                      "nameClean": "chow mein noodles",
                      "original": "400g Chow Mein Noodles or rice pasta",
                      "originalName": "Chow Mein Noodles or rice pasta",
                      "amount": 400.0,
                      "unit": "g",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 14.11,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 400.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 11215,
                      "aisle": "Produce",
                      "image": "garlic.png",
                      "consistency": "SOLID",
                      "name": "garlic",
                      "nameClean": "garlic",
                      "original": "3 cloves garlic, crushed",
                      "originalName": "garlic, crushed",
                      "amount": 3.0,
                      "unit": "cloves",
                      "meta": [
                          "crushed"
                      ],
                      "measures": {
                          "us": {
                              "amount": 3.0,
                              "unitShort": "cloves",
                              "unitLong": "cloves"
                          },
                          "metric": {
                              "amount": 3.0,
                              "unitShort": "cloves",
                              "unitLong": "cloves"
                          }
                      }
                  },
                  {
                      "id": 1056,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "sour-cream.jpg",
                      "consistency": "SOLID",
                      "name": "cream",
                      "nameClean": "sour cream",
                      "original": "2 Tbs sour cream",
                      "originalName": "sour cream",
                      "amount": 2.0,
                      "unit": "Tbs",
                      "meta": [
                          "sour"
                      ],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          }
                      }
                  },
                  {
                      "id": 1012047,
                      "aisle": "Spices and Seasonings",
                      "image": "salt.jpg",
                      "consistency": "SOLID",
                      "name": "sea salt",
                      "nameClean": "coarse sea salt",
                      "original": "¼ tsp sea salt",
                      "originalName": "sea salt",
                      "amount": 0.25,
                      "unit": "tsp",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.25,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 0.25,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 11297,
                      "aisle": "Produce",
                      "image": "parsley.jpg",
                      "consistency": "SOLID",
                      "name": "parsley",
                      "nameClean": "parsley",
                      "original": "Parsley for sprinkling, chopped",
                      "originalName": "Parsley for sprinkling, chopped",
                      "amount": 2.0,
                      "unit": "servings",
                      "meta": [
                          "chopped",
                          "for sprinkling, "
                      ],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "servings",
                              "unitLong": "servings"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "servings",
                              "unitLong": "servings"
                          }
                      }
                  }
              ],
              "id": 662054,
              "title": "Stuffed mushrooms and Chow Mein noodles",
              "readyInMinutes": 45,
              "servings": 2,
              "sourceUrl": "https://www.foodista.com/recipe/JFLYX2JY/stuffed-mushrooms-and-chow-mein-noodles",
              "image": "https://spoonacular.com/recipeImages/662054-556x370.jpg",
              "imageType": "jpg",
              "summary": "You can never have too many main course recipes, so give Stuffed mushrooms and Chow Mein noodles a try. This recipe makes 2 servings with <b>1345 calories</b>, <b>62g of protein</b>, and <b>49g of fat</b> each. For <b>$6.18 per serving</b>, this recipe <b>covers 51%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 8 fans. Only a few people really liked this Chinese dish. Head to the store and pick up pepper, olive oil, chives, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. With a spoonacular <b>score of 88%</b>, this dish is excellent. Similar recipes are <a href=\"https://spoonacular.com/recipes/chicken-chow-mein-with-noodles-111260\">Chicken Chow Mein With Noodles</a>, <a href=\"https://spoonacular.com/recipes/easy-chicken-chow-mein-noodles-841416\">Easy Chicken Chow Mein Noodles</a>, and <a href=\"https://spoonacular.com/recipes/turkey-casserole-with-chow-mein-noodles-381477\">Turkey Casserole with Chow Mein Noodles</a>.",
              "cuisines": [
                  "Chinese",
                  "Asian"
              ],
              "dishTypes": [
                  "side dish",
                  "lunch",
                  "main course",
                  "main dish",
                  "dinner"
              ],
              "diets": [],
              "occasions": [],
              "instructions": "Blanch the spinach in a very little water in the microwave oven for 3 minutes on MAX. Drain and coarsely chop. Chop mushroom stems in a blender.\nMelt the butter over low heat, add the onion and cook for 1 minute. Add chopped mushroom stems, and saut for 4-5 minutes, stirring often.\nAdd chopped spinach; stir well and saut 2 more minutes. Remove from the heat.\nMix and combine with a fork in a separate bowl ricotta, blue cheese, chives and pepper into a fine mixture, almost a paste.\nAdd chopped stalks and spinach mixture, stir and combine thoroughly.\nUsing a small teaspoon, place mounds of filling on the top of each mushroom cap, pressing slightly to get it down into the cavity.\nMix breadcrumbs and grated Parmesan cheese, sprinkle evenly over each mushroom. Drizzle each filled cap with olive oil.\nPlace the mushroom caps on a baking sheet lined with parchment paper or silicon sheet, and bake in the oven at 180C for 20 minutes or until the cheese browns a little. Allow to cool for 5 minutes or so before serving.\nMeanwhile cook the Chow Mein or rice noodles as directed on the package; drain.\nMix and combine garlic, sour cream and salt and stir into the cooked pasta.\nSprinkle with chopped parsley and served with stuffed mushrooms.",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "Blanch the spinach in a very little water in the microwave oven for 3 minutes on MAX.",
                              "ingredients": [
                                  {
                                      "id": 10011457,
                                      "name": "spinach",
                                      "localizedName": "spinach",
                                      "image": "spinach.jpg"
                                  },
                                  {
                                      "id": 14412,
                                      "name": "water",
                                      "localizedName": "water",
                                      "image": "water.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404762,
                                      "name": "microwave",
                                      "localizedName": "microwave",
                                      "image": "microwave.jpg"
                                  },
                                  {
                                      "id": 404784,
                                      "name": "oven",
                                      "localizedName": "oven",
                                      "image": "oven.jpg"
                                  }
                              ],
                              "length": {
                                  "number": 3,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 2,
                              "step": "Drain and coarsely chop. Chop mushroom stems in a blender.",
                              "ingredients": [
                                  {
                                      "id": 11260,
                                      "name": "mushrooms",
                                      "localizedName": "mushrooms",
                                      "image": "mushrooms.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404726,
                                      "name": "blender",
                                      "localizedName": "blender",
                                      "image": "blender.png"
                                  }
                              ]
                          },
                          {
                              "number": 3,
                              "step": "Melt the butter over low heat, add the onion and cook for 1 minute.",
                              "ingredients": [
                                  {
                                      "id": 1001,
                                      "name": "butter",
                                      "localizedName": "butter",
                                      "image": "butter-sliced.jpg"
                                  },
                                  {
                                      "id": 11282,
                                      "name": "onion",
                                      "localizedName": "onion",
                                      "image": "brown-onion.png"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 1,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 4,
                              "step": "Add chopped mushroom stems, and saut for 4-5 minutes, stirring often.",
                              "ingredients": [
                                  {
                                      "id": 11260,
                                      "name": "mushrooms",
                                      "localizedName": "mushrooms",
                                      "image": "mushrooms.png"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 5,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 5,
                              "step": "Add chopped spinach; stir well and saut 2 more minutes.",
                              "ingredients": [
                                  {
                                      "id": 10011457,
                                      "name": "spinach",
                                      "localizedName": "spinach",
                                      "image": "spinach.jpg"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 2,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 6,
                              "step": "Remove from the heat.",
                              "ingredients": [],
                              "equipment": []
                          },
                          {
                              "number": 7,
                              "step": "Mix and combine with a fork in a separate bowl ricotta, blue cheese, chives and pepper into a fine mixture, almost a paste.",
                              "ingredients": [
                                  {
                                      "id": 1004,
                                      "name": "blue cheese",
                                      "localizedName": "blue cheese",
                                      "image": "blue-cheese.png"
                                  },
                                  {
                                      "id": 1036,
                                      "name": "ricotta cheese",
                                      "localizedName": "ricotta cheese",
                                      "image": "ricotta.png"
                                  },
                                  {
                                      "id": 11156,
                                      "name": "chives",
                                      "localizedName": "chives",
                                      "image": "fresh-chives.jpg"
                                  },
                                  {
                                      "id": 1002030,
                                      "name": "pepper",
                                      "localizedName": "pepper",
                                      "image": "pepper.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404783,
                                      "name": "bowl",
                                      "localizedName": "bowl",
                                      "image": "bowl.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 8,
                              "step": "Add chopped stalks and spinach mixture, stir and combine thoroughly.",
                              "ingredients": [
                                  {
                                      "id": 10011457,
                                      "name": "spinach",
                                      "localizedName": "spinach",
                                      "image": "spinach.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 9,
                              "step": "Using a small teaspoon, place mounds of filling on the top of each mushroom cap, pressing slightly to get it down into the cavity.",
                              "ingredients": [
                                  {
                                      "id": 11260,
                                      "name": "mushrooms",
                                      "localizedName": "mushrooms",
                                      "image": "mushrooms.png"
                                  },
                                  {
                                      "id": 19142,
                                      "name": "mounds bar",
                                      "localizedName": "mounds bar",
                                      "image": "almond-joy.png"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 10,
                              "step": "Mix breadcrumbs and grated Parmesan cheese, sprinkle evenly over each mushroom.",
                              "ingredients": [
                                  {
                                      "id": 1032,
                                      "name": "grated parmesan cheese",
                                      "localizedName": "grated parmesan cheese",
                                      "image": "parmesan.jpg"
                                  },
                                  {
                                      "id": 18079,
                                      "name": "breadcrumbs",
                                      "localizedName": "breadcrumbs",
                                      "image": "breadcrumbs.jpg"
                                  },
                                  {
                                      "id": 11260,
                                      "name": "mushrooms",
                                      "localizedName": "mushrooms",
                                      "image": "mushrooms.png"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 11,
                              "step": "Drizzle each filled cap with olive oil.",
                              "ingredients": [
                                  {
                                      "id": 4053,
                                      "name": "olive oil",
                                      "localizedName": "olive oil",
                                      "image": "olive-oil.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 12,
                              "step": "Place the mushroom caps on a baking sheet lined with parchment paper or silicon sheet, and bake in the oven at 180C for 20 minutes or until the cheese browns a little. Allow to cool for 5 minutes or so before serving.",
                              "ingredients": [
                                  {
                                      "id": 11260,
                                      "name": "mushrooms",
                                      "localizedName": "mushrooms",
                                      "image": "mushrooms.png"
                                  },
                                  {
                                      "id": 1041009,
                                      "name": "cheese",
                                      "localizedName": "cheese",
                                      "image": "cheddar-cheese.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404770,
                                      "name": "baking paper",
                                      "localizedName": "baking paper",
                                      "image": "baking-paper.jpg"
                                  },
                                  {
                                      "id": 404727,
                                      "name": "baking sheet",
                                      "localizedName": "baking sheet",
                                      "image": "baking-sheet.jpg"
                                  },
                                  {
                                      "id": 404784,
                                      "name": "oven",
                                      "localizedName": "oven",
                                      "image": "oven.jpg",
                                      "temperature": {
                                          "number": 180.0,
                                          "unit": "Celsius"
                                      }
                                  }
                              ],
                              "length": {
                                  "number": 25,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 13,
                              "step": "Meanwhile cook the Chow Mein or rice noodles as directed on the package; drain.",
                              "ingredients": [
                                  {
                                      "id": 20133,
                                      "name": "rice noodles",
                                      "localizedName": "rice noodles",
                                      "image": "dried-rice-noodles.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 14,
                              "step": "Mix and combine garlic, sour cream and salt and stir into the cooked pasta.",
                              "ingredients": [
                                  {
                                      "id": 20421,
                                      "name": "cooked pasta",
                                      "localizedName": "cooked pasta",
                                      "image": "fusilli.jpg"
                                  },
                                  {
                                      "id": 1056,
                                      "name": "sour cream",
                                      "localizedName": "sour cream",
                                      "image": "sour-cream.jpg"
                                  },
                                  {
                                      "id": 11215,
                                      "name": "garlic",
                                      "localizedName": "garlic",
                                      "image": "garlic.png"
                                  },
                                  {
                                      "id": 2047,
                                      "name": "salt",
                                      "localizedName": "salt",
                                      "image": "salt.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 15,
                              "step": "Sprinkle with chopped parsley and served with stuffed mushrooms.",
                              "ingredients": [
                                  {
                                      "id": 11260,
                                      "name": "mushrooms",
                                      "localizedName": "mushrooms",
                                      "image": "mushrooms.png"
                                  },
                                  {
                                      "id": 11297,
                                      "name": "parsley",
                                      "localizedName": "parsley",
                                      "image": "parsley.jpg"
                                  }
                              ],
                              "equipment": []
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/stuffed-mushrooms-and-chow-mein-noodles-662054"
          },
          {
              "vegetarian": false,
              "vegan": false,
              "glutenFree": true,
              "dairyFree": true,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": false,
              "weightWatcherSmartPoints": 11,
              "gaps": "no",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 2,
              "healthScore": 41,
              "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              "license": "CC BY 3.0",
              "sourceName": "Foodista",
              "pricePerServing": 259.03,
              "extendedIngredients": [
                  {
                      "id": 23232,
                      "aisle": "Meat",
                      "image": "ribeye-raw.jpg",
                      "consistency": "SOLID",
                      "name": "beef steak",
                      "nameClean": "steak",
                      "original": "12 ounces beef steak, very thinly sliced",
                      "originalName": "beef steak, very thinly sliced",
                      "amount": 12.0,
                      "unit": "ounces",
                      "meta": [
                          "very thinly sliced"
                      ],
                      "measures": {
                          "us": {
                              "amount": 12.0,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 340.194,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 10011090,
                      "aisle": "Produce",
                      "image": "broccoli.jpg",
                      "consistency": "SOLID",
                      "name": "broccoli florets",
                      "nameClean": "broccoli florets",
                      "original": "4 cups broccoli florets",
                      "originalName": "broccoli florets",
                      "amount": 4.0,
                      "unit": "cups",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 4.0,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 364.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 4047,
                      "aisle": "Baking",
                      "image": "oil-coconut.jpg",
                      "consistency": "LIQUID",
                      "name": "coconut oil",
                      "nameClean": "coconut oil",
                      "original": "1 tablespoon coconut oil",
                      "originalName": "coconut oil",
                      "amount": 1.0,
                      "unit": "tablespoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          }
                      }
                  },
                  {
                      "id": 6194,
                      "aisle": "Canned and Jarred",
                      "image": "chicken-broth.png",
                      "consistency": "LIQUID",
                      "name": "chicken broth",
                      "nameClean": "chicken broth",
                      "original": "3/4 cup low fat chicken broth",
                      "originalName": "low fat chicken broth",
                      "amount": 0.75,
                      "unit": "cup",
                      "meta": [
                          "low fat"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.75,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 176.25,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 20027,
                      "aisle": "Baking",
                      "image": "white-powder.jpg",
                      "consistency": "SOLID",
                      "name": "cornstarch",
                      "nameClean": "corn starch",
                      "original": "1 tablespoon cornstarch",
                      "originalName": "cornstarch",
                      "amount": 1.0,
                      "unit": "tablespoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          }
                      }
                  },
                  {
                      "id": 16124,
                      "aisle": "Condiments",
                      "image": "soy-sauce.jpg",
                      "consistency": "LIQUID",
                      "name": "soy sauce",
                      "nameClean": "soy sauce",
                      "original": "2 tablespoons soy sauce",
                      "originalName": "soy sauce",
                      "amount": 2.0,
                      "unit": "tablespoons",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          }
                      }
                  },
                  {
                      "id": 1022053,
                      "aisle": "Ethnic Foods",
                      "image": "rice-vinegar.png",
                      "consistency": "LIQUID",
                      "name": "rice vinegar",
                      "nameClean": "rice vinegar",
                      "original": "2 tablespoons rice vinegar",
                      "originalName": "rice vinegar",
                      "amount": 2.0,
                      "unit": "tablespoons",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          }
                      }
                  },
                  {
                      "id": 93830,
                      "aisle": "Ethnic Foods",
                      "image": "mirin.jpg",
                      "consistency": "SOLID",
                      "name": "mirin",
                      "nameClean": "mirin",
                      "original": "2 tablespoons mirin",
                      "originalName": "mirin",
                      "amount": 2.0,
                      "unit": "tablespoons",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          }
                      }
                  },
                  {
                      "id": 4058,
                      "aisle": "Ethnic Foods",
                      "image": "sesame-oil.png",
                      "consistency": "LIQUID",
                      "name": "sesame oil",
                      "nameClean": "sesame oil",
                      "original": "1/2 teaspoon sesame oil",
                      "originalName": "sesame oil",
                      "amount": 0.5,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 19335,
                      "aisle": "Baking",
                      "image": "sugar-in-bowl.png",
                      "consistency": "SOLID",
                      "name": "sugar",
                      "nameClean": "sugar",
                      "original": "1 tablespoon sugar",
                      "originalName": "sugar",
                      "amount": 1.0,
                      "unit": "tablespoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          }
                      }
                  },
                  {
                      "id": 6972,
                      "aisle": "Ethnic Foods",
                      "image": "tomato-sauce-or-pasta-sauce.jpg",
                      "consistency": "SOLID",
                      "name": "asian chili sauce",
                      "nameClean": "chili sauce",
                      "original": "2 teaspoons Asian Chili sauce",
                      "originalName": "Asian Chili sauce",
                      "amount": 2.0,
                      "unit": "teaspoons",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 20041,
                      "aisle": "Pasta and Rice",
                      "image": "rice-brown-cooked.png",
                      "consistency": "SOLID",
                      "name": "brown rice",
                      "nameClean": "cooked brown rice",
                      "original": "2 cups brown rice, cooked",
                      "originalName": "brown rice, cooked",
                      "amount": 2.0,
                      "unit": "cups",
                      "meta": [
                          "cooked"
                      ],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 390.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  }
              ],
              "id": 638549,
              "title": "Chili and Garlic Spiced Beef and Broccoli Stir Fry",
              "readyInMinutes": 45,
              "servings": 4,
              "sourceUrl": "https://www.foodista.com/recipe/4HJ5M7RQ/chili-and-garlic-spiced-beef-and-broccoli-stir-fry",
              "image": "https://spoonacular.com/recipeImages/638549-556x370.jpg",
              "imageType": "jpg",
              "summary": "Chili and Garlic Spiced Beef and Broccoli Stir Fry is a <b>gluten free and dairy free</b> recipe with 4 servings. For <b>$2.59 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. One serving contains <b>394 calories</b>, <b>23g of protein</b>, and <b>17g of fat</b>. It works well as an American main course. This recipe from Foodista requires rice vinegar, sesame oil, mirin, and chicken broth. 2 people were impressed by this recipe. It will be a hit at your <b>The Super Bowl</b> event. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns a <b>good spoonacular score of 75%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/chili-and-garlic-spiced-beef-and-broccoli-stir-fry-1375755\">Chili and Garlic Spiced Beef and Broccoli Stir Fry</a>, <a href=\"https://spoonacular.com/recipes/chili-and-garlic-spiced-beef-and-broccoli-stir-fry-1616473\">Chili and Garlic Spiced Beef and Broccoli Stir Fry</a>, and <a href=\"https://spoonacular.com/recipes/garlic-beef-broccoli-cauliflower-stir-fry-530686\">Garlic Beef, Broccoli & Cauliflower Stir Fry</a>.",
              "cuisines": [
                  "American"
              ],
              "dishTypes": [
                  "lunch",
                  "main course",
                  "main dish",
                  "dinner"
              ],
              "diets": [
                  "gluten free",
                  "dairy free"
              ],
              "occasions": [
                  "super bowl"
              ],
              "instructions": "Combine chicken broth, cornstarch, soy sauce, rice vinegar, Mirin, sesame oil, sugar and Asian chili sauce in a small bowl.\nPreheat non-skillet over medium high heat with 1/2 tablespoon coconut oil. Add beef and stir fry until beef is cooked through, 3  4 minutes. Remove from pan.\nAdd remaining coconut oil and saute broccoli for 3  4 minutes until crisp-tender. Add chicken broth or water as needed to keep pan from becoming too dry.\nAdd beef and sauce into the pan with the broccoli and stir until sauce thickens, 4  5 minutes.\nServe over rice.",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "Combine chicken broth, cornstarch, soy sauce, rice vinegar, Mirin, sesame oil, sugar and Asian chili sauce in a small bowl.",
                              "ingredients": [
                                  {
                                      "id": 6194,
                                      "name": "chicken broth",
                                      "localizedName": "chicken broth",
                                      "image": "chicken-broth.png"
                                  },
                                  {
                                      "id": 1022053,
                                      "name": "rice vinegar",
                                      "localizedName": "rice vinegar",
                                      "image": "rice-vinegar.png"
                                  },
                                  {
                                      "id": 6972,
                                      "name": "chili sauce",
                                      "localizedName": "chili sauce",
                                      "image": "tomato-sauce-or-pasta-sauce.jpg"
                                  },
                                  {
                                      "id": 20027,
                                      "name": "corn starch",
                                      "localizedName": "corn starch",
                                      "image": "white-powder.jpg"
                                  },
                                  {
                                      "id": 4058,
                                      "name": "sesame oil",
                                      "localizedName": "sesame oil",
                                      "image": "sesame-oil.png"
                                  },
                                  {
                                      "id": 16124,
                                      "name": "soy sauce",
                                      "localizedName": "soy sauce",
                                      "image": "soy-sauce.jpg"
                                  },
                                  {
                                      "id": 93830,
                                      "name": "mirin",
                                      "localizedName": "mirin",
                                      "image": "mirin.jpg"
                                  },
                                  {
                                      "id": 19335,
                                      "name": "sugar",
                                      "localizedName": "sugar",
                                      "image": "sugar-in-bowl.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404783,
                                      "name": "bowl",
                                      "localizedName": "bowl",
                                      "image": "bowl.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 2,
                              "step": "Preheat non-skillet over medium high heat with 1/2 tablespoon coconut oil.",
                              "ingredients": [
                                  {
                                      "id": 4047,
                                      "name": "coconut oil",
                                      "localizedName": "coconut oil",
                                      "image": "oil-coconut.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ]
                          },
                          {
                              "number": 3,
                              "step": "Add beef and stir fry until beef is cooked through, 3  4 minutes.",
                              "ingredients": [
                                  {
                                      "id": 23572,
                                      "name": "beef",
                                      "localizedName": "beef",
                                      "image": "beef-cubes-raw.png"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 4,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 4,
                              "step": "Remove from pan.",
                              "ingredients": [],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ]
                          },
                          {
                              "number": 5,
                              "step": "Add remaining coconut oil and saute broccoli for 3  4 minutes until crisp-tender.",
                              "ingredients": [
                                  {
                                      "id": 4047,
                                      "name": "coconut oil",
                                      "localizedName": "coconut oil",
                                      "image": "oil-coconut.jpg"
                                  },
                                  {
                                      "id": 11090,
                                      "name": "broccoli",
                                      "localizedName": "broccoli",
                                      "image": "broccoli.jpg"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 4,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 6,
                              "step": "Add chicken broth or water as needed to keep pan from becoming too dry.",
                              "ingredients": [
                                  {
                                      "id": 6194,
                                      "name": "chicken broth",
                                      "localizedName": "chicken broth",
                                      "image": "chicken-broth.png"
                                  },
                                  {
                                      "id": 14412,
                                      "name": "water",
                                      "localizedName": "water",
                                      "image": "water.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ]
                          },
                          {
                              "number": 7,
                              "step": "Add beef and sauce into the pan with the broccoli and stir until sauce thickens, 4  5 minutes.",
                              "ingredients": [
                                  {
                                      "id": 11090,
                                      "name": "broccoli",
                                      "localizedName": "broccoli",
                                      "image": "broccoli.jpg"
                                  },
                                  {
                                      "id": 0,
                                      "name": "sauce",
                                      "localizedName": "sauce",
                                      "image": ""
                                  },
                                  {
                                      "id": 23572,
                                      "name": "beef",
                                      "localizedName": "beef",
                                      "image": "beef-cubes-raw.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ],
                              "length": {
                                  "number": 5,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 8,
                              "step": "Serve over rice.",
                              "ingredients": [
                                  {
                                      "id": 20444,
                                      "name": "rice",
                                      "localizedName": "rice",
                                      "image": "uncooked-white-rice.png"
                                  }
                              ],
                              "equipment": []
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/chili-and-garlic-spiced-beef-and-broccoli-stir-fry-638549"
          },
          {
              "vegetarian": false,
              "vegan": false,
              "glutenFree": true,
              "dairyFree": true,
              "veryHealthy": true,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": false,
              "weightWatcherSmartPoints": 34,
              "gaps": "no",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 2,
              "healthScore": 94,
              "creditsText": "foodista.com",
              "sourceName": "foodista.com",
              "pricePerServing": 1127.28,
              "extendedIngredients": [
                  {
                      "id": 4053,
                      "aisle": "Oil, Vinegar, Salad Dressing",
                      "image": "olive-oil.jpg",
                      "consistency": "LIQUID",
                      "name": "¼ olive oil",
                      "nameClean": "olive oil",
                      "original": "cup ¼ olive oil",
                      "originalName": "¼ olive oil",
                      "amount": 1.0,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "cup",
                              "unitLong": "cup"
                          },
                          "metric": {
                              "amount": 216.0,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 9160,
                      "aisle": "Produce",
                      "image": "lime-juice.png",
                      "consistency": "LIQUID",
                      "name": "¼ lime juice",
                      "nameClean": "lime juice",
                      "original": "cup ¼ fresh lime juice",
                      "originalName": "¼ fresh lime juice",
                      "amount": 1.0,
                      "unit": "cup",
                      "meta": [
                          "fresh"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "cup",
                              "unitLong": "cup"
                          },
                          "metric": {
                              "amount": 242.0,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 9206,
                      "aisle": "Beverages",
                      "image": "orange-juice.jpg",
                      "consistency": "LIQUID",
                      "name": "orange juice",
                      "nameClean": "orange juice",
                      "original": "2 tbs orange juice",
                      "originalName": "orange juice",
                      "amount": 2.0,
                      "unit": "Tbs",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          }
                      }
                  },
                  {
                      "id": 10211215,
                      "aisle": "Produce",
                      "image": "garlic.jpg",
                      "consistency": "SOLID",
                      "name": "garlic cloves",
                      "nameClean": "whole garlic cloves",
                      "original": "4 garlic cloves",
                      "originalName": "garlic cloves",
                      "amount": 4.0,
                      "unit": "",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 4.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 4.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 14412,
                      "aisle": "Beverages",
                      "image": "water.png",
                      "consistency": "LIQUID",
                      "name": "water",
                      "nameClean": "water",
                      "original": "2 tbs water",
                      "originalName": "water",
                      "amount": 2.0,
                      "unit": "Tbs",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          }
                      }
                  },
                  {
                      "id": 1002014,
                      "aisle": "Spices and Seasonings",
                      "image": "ground-cumin.jpg",
                      "consistency": "SOLID",
                      "name": "½ cumin",
                      "nameClean": "cumin",
                      "original": "teaspoon ½ cumin",
                      "originalName": "½ cumin",
                      "amount": 1.0,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 2047,
                      "aisle": "Spices and Seasonings",
                      "image": "salt.jpg",
                      "consistency": "SOLID",
                      "name": "½ salt",
                      "nameClean": "table salt",
                      "original": "teaspoon ½ salt",
                      "originalName": "½ salt",
                      "amount": 1.0,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 1002030,
                      "aisle": "Spices and Seasonings",
                      "image": "pepper.jpg",
                      "consistency": "SOLID",
                      "name": "½ pepper",
                      "nameClean": "black pepper",
                      "original": "teaspoon ½ black pepper",
                      "originalName": "½ black pepper",
                      "amount": 1.0,
                      "unit": "teaspoon",
                      "meta": [
                          "black"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 2027,
                      "aisle": "Produce",
                      "image": "oregano.jpg",
                      "consistency": "SOLID",
                      "name": "½ oregano",
                      "nameClean": "oregano",
                      "original": "teaspoon ½ dried oregano",
                      "originalName": "½ dried oregano",
                      "amount": 1.0,
                      "unit": "teaspoon",
                      "meta": [
                          "dried"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 11165,
                      "aisle": "Produce",
                      "image": "cilantro.png",
                      "consistency": "SOLID",
                      "name": "hand full of cilantro",
                      "nameClean": "cilantro",
                      "original": "Hand full of fresh cilantro",
                      "originalName": "Hand full of fresh cilantro",
                      "amount": 1.0,
                      "unit": "serving",
                      "meta": [
                          "fresh"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "serving",
                              "unitLong": "serving"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "serving",
                              "unitLong": "serving"
                          }
                      }
                  },
                  {
                      "id": 23657,
                      "aisle": "Meat",
                      "image": "flank-steak.jpg",
                      "consistency": "SOLID",
                      "name": "flank steak",
                      "nameClean": "flank steak",
                      "original": "1 flank steak",
                      "originalName": "flank steak",
                      "amount": 1.0,
                      "unit": "",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 9037,
                      "aisle": "Produce",
                      "image": "avocado.jpg",
                      "consistency": "SOLID",
                      "name": "avocado",
                      "nameClean": "avocado",
                      "original": "1 avocado, chopped",
                      "originalName": "avocado, chopped",
                      "amount": 1.0,
                      "unit": "",
                      "meta": [
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 11529,
                      "aisle": "Produce",
                      "image": "tomato.png",
                      "consistency": "SOLID",
                      "name": "tomato",
                      "nameClean": "tomato",
                      "original": "1 tomato, chopped",
                      "originalName": "tomato, chopped",
                      "amount": 1.0,
                      "unit": "",
                      "meta": [
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 10011282,
                      "aisle": "Produce",
                      "image": "red-onion.png",
                      "consistency": "SOLID",
                      "name": "onion",
                      "nameClean": "red onion",
                      "original": "4 tbs finely chopped red onion",
                      "originalName": "finely chopped red onion",
                      "amount": 4.0,
                      "unit": "Tbs",
                      "meta": [
                          "red",
                          "finely chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 4.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          },
                          "metric": {
                              "amount": 4.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          }
                      }
                  }
              ],
              "id": 640990,
              "title": "Cuban Flank Steak With Avocado and Tomato Salad",
              "readyInMinutes": 45,
              "servings": 1,
              "sourceUrl": "https://www.foodista.com/recipe/LK3QZ85C/cuban-flank-steak-with-avocado-and-tomato-salad",
              "image": "https://spoonacular.com/recipeImages/640990-556x370.jpg",
              "imageType": "jpg",
              "summary": "The recipe Cuban Flank Steak With Avocado and Tomato Salad can be made <b>in about 45 minutes</b>. One portion of this dish contains approximately <b>57g of protein</b>, <b>85g of fat</b>, and a total of <b>1163 calories</b>. For <b>$11.27 per serving</b>, this recipe <b>covers 57%</b> of your daily requirements of vitamins and minerals. This recipe serves 1. It is brought to you by Foodista. 2 people have made this recipe and would make it again. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and primal</b> diet. <b>valentin day</b> will be even more special with this recipe. If you have hand full of cilantro, garlic cloves, ½ cumin, and a few other ingredients on hand, you can make it. Only a few people really liked this main course. All things considered, we decided this recipe <b>deserves a spoonacular score of 87%</b>. This score is amazing. <a href=\"https://spoonacular.com/recipes/flank-steak-with-tomato-avocado-salsa-81684\">Flank Steak with Tomato-Avocado Salsa</a>, <a href=\"https://spoonacular.com/recipes/grilled-flank-steak-with-avocado-and-two-tomato-salsa-198781\">Grilled Flank Steak with Avocado and Two-Tomato Salsa</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-cuban-flank-steak-175898\">Slow-Cooker Cuban Flank Steak</a> are very similar to this recipe.",
              "cuisines": [],
              "dishTypes": [
                  "lunch",
                  "main course",
                  "main dish",
                  "dinner"
              ],
              "diets": [
                  "gluten free",
                  "dairy free",
                  "paleolithic",
                  "primal",
                  "whole 30"
              ],
              "occasions": [
                  "valentine's day",
                  "father's day"
              ],
              "instructions": "Place all of the Mojo Sauce ingredients in a small food processor, or blender.  I have a Bullet which I love and is perfect for making the mojo sauce.\nPlace the flank steak in a zip lock bag or shallow dish.  Add the sauce; l let marinate in refrigerator for 2 hour to overnight.\nRemove the flank steak from the marinade; place remaining marinade in saucepan.  Let steak stand at room temperature for 30 minutes.\nGrill the flank steak to your desired doneness.  As you can see from the picture, we like ours on the rare side.  Let the cooked steak stand for 10 minutes before thinly slicing across the grain.\nBring the marinade in the saucepan to a boil.  Let it cook for several minutes; it will begin to thicken.\nPlace the avocado, tomato and onion into a bowl.  Add the heated mojo sauce to the salad.  Serve on the side of the steak, or on top.  Your preference.",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "Place all of the Mojo Sauce ingredients in a small food processor, or blender.  I have a Bullet which I love and is perfect for making the mojo sauce.",
                              "ingredients": [
                                  {
                                      "id": 0,
                                      "name": "sauce",
                                      "localizedName": "sauce",
                                      "image": ""
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404771,
                                      "name": "food processor",
                                      "localizedName": "food processor",
                                      "image": "food-processor.png"
                                  },
                                  {
                                      "id": 404726,
                                      "name": "blender",
                                      "localizedName": "blender",
                                      "image": "blender.png"
                                  }
                              ]
                          },
                          {
                              "number": 2,
                              "step": "Place the flank steak in a zip lock bag or shallow dish.",
                              "ingredients": [
                                  {
                                      "id": 23657,
                                      "name": "flank steak",
                                      "localizedName": "flank steak",
                                      "image": "flank-steak.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 3,
                              "step": "Add the sauce; l let marinate in refrigerator for 2 hour to overnight.",
                              "ingredients": [
                                  {
                                      "id": 0,
                                      "name": "sauce",
                                      "localizedName": "sauce",
                                      "image": ""
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 120,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 4,
                              "step": "Remove the flank steak from the marinade; place remaining marinade in saucepan.",
                              "ingredients": [
                                  {
                                      "id": 23657,
                                      "name": "flank steak",
                                      "localizedName": "flank steak",
                                      "image": "flank-steak.jpg"
                                  },
                                  {
                                      "id": 0,
                                      "name": "marinade",
                                      "localizedName": "marinade",
                                      "image": "seasoning.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404669,
                                      "name": "sauce pan",
                                      "localizedName": "sauce pan",
                                      "image": "sauce-pan.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 5,
                              "step": "Let steak stand at room temperature for 30 minutes.",
                              "ingredients": [
                                  {
                                      "id": 23232,
                                      "name": "steak",
                                      "localizedName": "steak",
                                      "image": "ribeye-raw.jpg"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 30,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 6,
                              "step": "Grill the flank steak to your desired doneness.  As you can see from the picture, we like ours on the rare side.",
                              "ingredients": [
                                  {
                                      "id": 23657,
                                      "name": "flank steak",
                                      "localizedName": "flank steak",
                                      "image": "flank-steak.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404706,
                                      "name": "grill",
                                      "localizedName": "grill",
                                      "image": "grill.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 7,
                              "step": "Let the cooked steak stand for 10 minutes before thinly slicing across the grain.",
                              "ingredients": [
                                  {
                                      "id": 0,
                                      "name": "grains",
                                      "localizedName": "grains",
                                      "image": ""
                                  },
                                  {
                                      "id": 23232,
                                      "name": "steak",
                                      "localizedName": "steak",
                                      "image": "ribeye-raw.jpg"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 10,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 8,
                              "step": "Bring the marinade in the saucepan to a boil.",
                              "ingredients": [
                                  {
                                      "id": 0,
                                      "name": "marinade",
                                      "localizedName": "marinade",
                                      "image": "seasoning.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404669,
                                      "name": "sauce pan",
                                      "localizedName": "sauce pan",
                                      "image": "sauce-pan.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 9,
                              "step": "Let it cook for several minutes; it will begin to thicken.",
                              "ingredients": [],
                              "equipment": []
                          },
                          {
                              "number": 10,
                              "step": "Place the avocado, tomato and onion into a bowl.",
                              "ingredients": [
                                  {
                                      "id": 9037,
                                      "name": "avocado",
                                      "localizedName": "avocado",
                                      "image": "avocado.jpg"
                                  },
                                  {
                                      "id": 11529,
                                      "name": "tomato",
                                      "localizedName": "tomato",
                                      "image": "tomato.png"
                                  },
                                  {
                                      "id": 11282,
                                      "name": "onion",
                                      "localizedName": "onion",
                                      "image": "brown-onion.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404783,
                                      "name": "bowl",
                                      "localizedName": "bowl",
                                      "image": "bowl.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 11,
                              "step": "Add the heated mojo sauce to the salad.",
                              "ingredients": [
                                  {
                                      "id": 0,
                                      "name": "sauce",
                                      "localizedName": "sauce",
                                      "image": ""
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 12,
                              "step": "Serve on the side of the steak, or on top.  Your preference.",
                              "ingredients": [
                                  {
                                      "id": 23232,
                                      "name": "steak",
                                      "localizedName": "steak",
                                      "image": "ribeye-raw.jpg"
                                  }
                              ],
                              "equipment": []
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/cuban-flank-steak-with-avocado-and-tomato-salad-640990"
          },
          {
              "vegetarian": false,
              "vegan": false,
              "glutenFree": false,
              "dairyFree": true,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": false,
              "weightWatcherSmartPoints": 10,
              "gaps": "no",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 6,
              "healthScore": 56,
              "creditsText": "foodista.com",
              "sourceName": "foodista.com",
              "pricePerServing": 532.09,
              "extendedIngredients": [
                  {
                      "id": 15270,
                      "aisle": "Seafood",
                      "image": "shrimp.png",
                      "consistency": "SOLID",
                      "name": "shrimp",
                      "nameClean": "shrimp",
                      "original": "2 pounds fresh or frozen medium-size shrimp, in shells if possible, for stock",
                      "originalName": "fresh or frozen medium-size shrimp, in shells if possible, for stock",
                      "amount": 2.0,
                      "unit": "pounds",
                      "meta": [
                          "fresh",
                          "for stock"
                      ],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "lb",
                              "unitLong": "pounds"
                          },
                          "metric": {
                              "amount": 907.185,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 15143,
                      "aisle": "Seafood",
                      "image": "crabmeat.jpg",
                      "consistency": "SOLID",
                      "name": "crabs",
                      "nameClean": "dungeness crab",
                      "original": "1 dozen fresh or frozen blue crabs, cleaned and shells removed (substitute: 2 pounds fresh crabmeat, crawfish, oyster, or turtle)",
                      "originalName": "fresh or frozen blue crabs, cleaned and shells removed (substitute: 2 pounds fresh crabmeat, crawfish, oyster, or turtle)",
                      "amount": 12.0,
                      "unit": "",
                      "meta": [
                          "fresh",
                          "blue",
                          "cleaned",
                          "(substitute: 2 pounds crabmeat, crawfish, oyster, or turtle)"
                      ],
                      "measures": {
                          "us": {
                              "amount": 12.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 12.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 11143,
                      "aisle": "Produce",
                      "image": "celery.jpg",
                      "consistency": "SOLID",
                      "name": "celery",
                      "nameClean": "celery",
                      "original": "4 stalks celery, chopped",
                      "originalName": "celery, chopped",
                      "amount": 4.0,
                      "unit": "stalks",
                      "meta": [
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 4.0,
                              "unitShort": "stalks",
                              "unitLong": "stalks"
                          },
                          "metric": {
                              "amount": 4.0,
                              "unitShort": "stalks",
                              "unitLong": "stalks"
                          }
                      }
                  },
                  {
                      "id": 11297,
                      "aisle": "Produce",
                      "image": "parsley.jpg",
                      "consistency": "SOLID",
                      "name": "parsley",
                      "nameClean": "parsley",
                      "original": "½ cup chopped parsley",
                      "originalName": "chopped parsley",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 30.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 11333,
                      "aisle": "Produce",
                      "image": "green-pepper.jpg",
                      "consistency": "SOLID",
                      "name": "peppers",
                      "nameClean": "green pepper",
                      "original": "2 green peppers, chopped",
                      "originalName": "green peppers, chopped",
                      "amount": 2.0,
                      "unit": "",
                      "meta": [
                          "green",
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 11282,
                      "aisle": "Produce",
                      "image": "brown-onion.png",
                      "consistency": "SOLID",
                      "name": "onion",
                      "nameClean": "onion",
                      "original": "1 large onion, chopped",
                      "originalName": "onion, chopped",
                      "amount": 1.0,
                      "unit": "large",
                      "meta": [
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "large",
                              "unitLong": "large"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "large",
                              "unitLong": "large"
                          }
                      }
                  },
                  {
                      "id": 11291,
                      "aisle": "Produce",
                      "image": "spring-onions.jpg",
                      "consistency": "SOLID",
                      "name": "green onions",
                      "nameClean": "spring onions",
                      "original": "1 cup chopped green onions",
                      "originalName": "chopped green onions",
                      "amount": 1.0,
                      "unit": "cup",
                      "meta": [
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "cup",
                              "unitLong": "cup"
                          },
                          "metric": {
                              "amount": 100.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 11215,
                      "aisle": "Produce",
                      "image": "garlic.png",
                      "consistency": "SOLID",
                      "name": "garlic",
                      "nameClean": "garlic",
                      "original": "4 cloves garlic, chopped",
                      "originalName": "garlic, chopped",
                      "amount": 4.0,
                      "unit": "cloves",
                      "meta": [
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 4.0,
                              "unitShort": "cloves",
                              "unitLong": "cloves"
                          },
                          "metric": {
                              "amount": 4.0,
                              "unitShort": "cloves",
                              "unitLong": "cloves"
                          }
                      }
                  },
                  {
                      "id": 2004,
                      "aisle": "Produce",
                      "image": "bay-leaves.jpg",
                      "consistency": "SOLID",
                      "name": "bay leaves",
                      "nameClean": "bay leaves",
                      "original": "3 bay leaves",
                      "originalName": "bay leaves",
                      "amount": 3.0,
                      "unit": "",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 3.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 3.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 11887,
                      "aisle": "Pasta and Rice",
                      "image": "tomato-paste.jpg",
                      "consistency": "SOLID",
                      "name": "tomato paste",
                      "nameClean": "tomato paste",
                      "original": "1 ounce tomato paste",
                      "originalName": "tomato paste",
                      "amount": 1.0,
                      "unit": "ounce",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "oz",
                              "unitLong": "ounce"
                          },
                          "metric": {
                              "amount": 28.35,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 4669,
                      "aisle": "Oil, Vinegar, Salad Dressing",
                      "image": "vegetable-oil.jpg",
                      "consistency": "LIQUID",
                      "name": "vegetable oil",
                      "nameClean": "vegetable oil",
                      "original": "4 teaspoons vegetable oil or shortening",
                      "originalName": "vegetable oil or shortening",
                      "amount": 4.0,
                      "unit": "teaspoons",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 4.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 4.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 20081,
                      "aisle": "Baking",
                      "image": "flour.png",
                      "consistency": "SOLID",
                      "name": "flour",
                      "nameClean": "wheat flour",
                      "original": "½ cup flour",
                      "originalName": "flour",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 62.5,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 2047,
                      "aisle": "Spices and Seasonings",
                      "image": "salt.jpg",
                      "consistency": "SOLID",
                      "name": "salt",
                      "nameClean": "table salt",
                      "original": "2 teaspoons salt",
                      "originalName": "salt",
                      "amount": 2.0,
                      "unit": "teaspoons",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 1002030,
                      "aisle": "Spices and Seasonings",
                      "image": "pepper.jpg",
                      "consistency": "SOLID",
                      "name": "ground pepper",
                      "nameClean": "black pepper",
                      "original": "2 teaspoons ground black pepper",
                      "originalName": "ground black pepper",
                      "amount": 2.0,
                      "unit": "teaspoons",
                      "meta": [
                          "black"
                      ],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 2042,
                      "aisle": "Spices and Seasonings",
                      "image": "thyme.jpg",
                      "consistency": "SOLID",
                      "name": "thyme",
                      "nameClean": "dried thyme",
                      "original": "½ teaspoon dried thyme",
                      "originalName": "dried thyme",
                      "amount": 0.5,
                      "unit": "teaspoon",
                      "meta": [
                          "dried"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 6971,
                      "aisle": "Condiments",
                      "image": "dark-sauce.jpg",
                      "consistency": "LIQUID",
                      "name": "worcestershire sauce",
                      "nameClean": "worcestershire sauce",
                      "original": "1 teaspoon Worcestershire sauce",
                      "originalName": "Worcestershire sauce",
                      "amount": 1.0,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 10011531,
                      "aisle": "Canned and Jarred",
                      "image": "tomatoes-canned.png",
                      "consistency": "SOLID",
                      "name": "canned tomatoes",
                      "nameClean": "canned whole tomatoes",
                      "original": "1 can whole peeled tomatoes, chopped",
                      "originalName": "whole peeled tomatoes, chopped",
                      "amount": 1.0,
                      "unit": "can",
                      "meta": [
                          "whole",
                          "peeled",
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "can",
                              "unitLong": "can"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "can",
                              "unitLong": "can"
                          }
                      }
                  },
                  {
                      "id": 1026168,
                      "aisle": "Condiments",
                      "image": "hot-sauce-or-tabasco.png",
                      "consistency": "LIQUID",
                      "name": "all the tabasco sauce you handle",
                      "nameClean": "tabasco sauce",
                      "original": "All the Tabasco sauce you can handle",
                      "originalName": "All the Tabasco sauce you handle",
                      "amount": 1.0,
                      "unit": "can",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "can",
                              "unitLong": "can"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "can",
                              "unitLong": "can"
                          }
                      }
                  },
                  {
                      "id": 1002031,
                      "aisle": "Spices and Seasonings",
                      "image": "chili-powder.jpg",
                      "consistency": "SOLID",
                      "name": "creole seasoning",
                      "nameClean": "creole seasoning",
                      "original": "Creole seasoning to taste",
                      "originalName": "Creole seasoning to taste",
                      "amount": 9.0,
                      "unit": "servings",
                      "meta": [
                          "to taste"
                      ],
                      "measures": {
                          "us": {
                              "amount": 9.0,
                              "unitShort": "servings",
                              "unitLong": "servings"
                          },
                          "metric": {
                              "amount": 9.0,
                              "unitShort": "servings",
                              "unitLong": "servings"
                          }
                      }
                  },
                  {
                      "id": 7916,
                      "aisle": "Meat",
                      "image": "smoked-sausage.jpg",
                      "consistency": "SOLID",
                      "name": "andouille",
                      "nameClean": "smoked sausage",
                      "original": "1 pound andouille, turkey, kielbasa or smoked sausage, cubed",
                      "originalName": "andouille, turkey, kielbasa or smoked sausage, cubed",
                      "amount": 1.0,
                      "unit": "pound",
                      "meta": [
                          "smoked",
                          "cubed"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "lb",
                              "unitLong": "pound"
                          },
                          "metric": {
                              "amount": 453.592,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 11311111,
                      "aisle": "Ethnic Foods",
                      "image": "hemp-protein-powder.png",
                      "consistency": "SOLID",
                      "name": "filé powder",
                      "nameClean": "file powder",
                      "original": "2 tablespoons filé powder",
                      "originalName": "filé powder",
                      "amount": 2.0,
                      "unit": "tablespoons",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          }
                      }
                  },
                  {
                      "id": 11278,
                      "aisle": "Produce",
                      "image": "okra.png",
                      "consistency": "SOLID",
                      "name": "okra",
                      "nameClean": "okra",
                      "original": "1 pound fresh or frozen sliced okra",
                      "originalName": "fresh or frozen sliced okra",
                      "amount": 1.0,
                      "unit": "pound",
                      "meta": [
                          "fresh",
                          "sliced"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "lb",
                              "unitLong": "pound"
                          },
                          "metric": {
                              "amount": 453.592,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 20444,
                      "aisle": "Pasta and Rice",
                      "image": "uncooked-white-rice.png",
                      "consistency": "SOLID",
                      "name": "louisiana rice",
                      "nameClean": "rice",
                      "original": "1 bag Louisiana rice (or white rice)",
                      "originalName": "Louisiana rice (or white rice)",
                      "amount": 1.0,
                      "unit": "bag",
                      "meta": [
                          "white",
                          "(or rice)"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "bag",
                              "unitLong": "bag"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "bag",
                              "unitLong": "bag"
                          }
                      }
                  }
              ],
              "id": 648524,
              "title": "Jean's Seafood Gumbo",
              "readyInMinutes": 45,
              "servings": 9,
              "sourceUrl": "https://www.foodista.com/recipe/Z2KPLCN3/jean-s-seafood-gumbo",
              "summary": "Forget going out to eat or ordering takeout every time you crave Cajun food. Try making Jean's Seafood Gumbo at home. One serving contains <b>524 calories</b>, <b>68g of protein</b>, and <b>19g of fat</b>. This recipe serves 9 and costs $5.32 per serving. 6 people were impressed by this recipe. This recipe from Foodista requires thyme, salt, tomato paste, and peppers. It works well as a pricey main course. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you're following a <b>dairy free</b> diet. With a spoonacular <b>score of 87%</b>, this dish is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/jeans-seafood-gumbo-1394357\">Jean's Seafood Gumbo</a>, <a href=\"https://spoonacular.com/recipes/seafood-gumbo-12109\">Seafood Gumbo</a>, and <a href=\"https://spoonacular.com/recipes/seafood-gumbo-332787\">Seafood Gumbo</a>.",
              "cuisines": [
                  "Creole",
                  "Cajun"
              ],
              "dishTypes": [
                  "lunch",
                  "soup",
                  "main course",
                  "main dish",
                  "dinner"
              ],
              "diets": [
                  "dairy free"
              ],
              "occasions": [],
              "instructions": "Fill a 14-16-quart pot with two quarts of water and bring to a boil.\nMeanwhile, peel and devein the shrimp, keeping the heads and hulls. Set the shrimp aside in cold water. In the large \"gumbo pot\" boil heads and hulls for 30 minutes to an hour. This will give you Creole gumbo. Strain shrimp heads and hulls from stock and set aside. Discard heads and hull immediately. Otherwise, the next day your kitchen will smell like Bayou St. John.\nClean the fresh crabs  If the crabs are fresh, you must take time to clean them. Discard the hard back shell and some of the so-called \"dead man,\" or yellow insides. Clean and separate crabs and set aside. (Note: If necessary, you can use meat from king, Dungeness, snow or stone crabs for your gumbo).\nBefore you fire up the stove again, cut up your celery, parsley, peppers, onions and garlic, especially if you're alone and there is no one to help you stir the pots. It takes time peeling the onions and garlic  Put the celery and parsley in a separate container from the other chopped ingredients and refrigerate until needed to keep them fresh.\nPlace the gumbo pot with the shrimp stock on the stove. Add cleaned crabs and bay leaves. Stir slowly. You don't want your shrimp stock messing up the floor. Add celery, parsley, and tomato paste to the gumbo brewing on the stove. Bring to a boil. Turn down heat, cover, and let simmer.\nHere comes the roux -- a thick and flavorful sauce that has become one of the most important staples of Louisiana cuisine. Pour oil or shortening into a separate heavy skillet (please do not use a thin omelet pan) over a medium-low heat. Slowly stir in flour to make the roux. Keep your eyes on the skillet. If the phone rings, let the answering machine pick it up. Cook roux until it has a dark mahogany color. Do not stop stirring until roux appears nutty or grainy. If black specks appear, the roux is burned. Throw it out and start from scratch. A good roux could take 30 to 45 minutes cooking time.\nNow you are ready to add the holy trinity of onions, garlic, and green peppers to the roux mixture. Stir ingredients in slowly because the flour is still sizzling. The moisture will begin to disappear. This is when Jean would add another quart or two of water to the gumbo pot. Add roux to the gumbo pot. Bring to a boil, stirring constantly. Lower heat and cover. The kitchen should smell good right now. Pour yourself another cold something-or-other. You're halfway there. Come back to look and stir in an hour or so.\nSeason to taste: add salt, pepper, thyme, Worcestershire sauce, Tabasco sauce and any Creole seasoning you like. Don't overdo it right now. Let the roux work its magic absorbing all the wonderful ingredients. Gumbo is usually very spicy, but you can keep it mild. Remember, if you have decided to use andouille sausage it is also hot.\nFry sausages and okra with a little bit of the leftover grease. Sprinkle a little leftover flour if the okra is fresh. Add to gumbo pot. Add chopped peeled tomatoes, stirring until well blended. Add more water if necessary. The roux will keep it thick and tasty. Return to a boil and simmer for 10 minutes. Reduce heat and let simmer, uncovered, for 2 1/2 to 3 hours over low heat.\nSkim any excess fat. Add shrimp. Stir in slowly as you increase the heat one last time. It's time to stir in the fil powder. Cook another 20 to 30 minutes until the gumbo is thick. Taste and adjust seasonings one more time. Did I mention the rice? Seafood gumbo is served over Louisiana rice. Of course, you can substitute for your own favorite rice. Just plain old brown or white rice will do. Before serving, taste one more time and adjust seasoning. Turn off heat and remove seafood gumbo from the stove.\nTo cool down the pot before serving, place it in the sink with a few inches of ice-cold water. If needed, add additional salt and Tabasco sauce. If you can see through the gumbo to the bottom of the pot, work on your roux next time.",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "Fill a 14-16-quart pot with two quarts of water and bring to a boil.",
                              "ingredients": [
                                  {
                                      "id": 14412,
                                      "name": "water",
                                      "localizedName": "water",
                                      "image": "water.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404752,
                                      "name": "pot",
                                      "localizedName": "pot",
                                      "image": "stock-pot.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 2,
                              "step": "Meanwhile, peel and devein the shrimp, keeping the heads and hulls. Set the shrimp aside in cold water. In the large \"gumbo pot\" boil heads and hulls for 30 minutes to an hour. This will give you Creole gumbo. Strain shrimp heads and hulls from stock and set aside. Discard heads and hull immediately. Otherwise, the next day your kitchen will smell like Bayou St. John.",
                              "ingredients": [
                                  {
                                      "id": 15270,
                                      "name": "shrimp",
                                      "localizedName": "shrimp",
                                      "image": "shrimp.png"
                                  },
                                  {
                                      "id": 0,
                                      "name": "gumbo",
                                      "localizedName": "gumbo",
                                      "image": ""
                                  },
                                  {
                                      "id": 1006615,
                                      "name": "stock",
                                      "localizedName": "stock",
                                      "image": "chicken-broth.png"
                                  },
                                  {
                                      "id": 14412,
                                      "name": "water",
                                      "localizedName": "water",
                                      "image": "water.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404752,
                                      "name": "pot",
                                      "localizedName": "pot",
                                      "image": "stock-pot.jpg"
                                  }
                              ],
                              "length": {
                                  "number": 30,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 3,
                              "step": "Clean the fresh crabs  If the crabs are fresh, you must take time to clean them. Discard the hard back shell and some of the so-called \"dead man,\" or yellow insides. Clean and separate crabs and set aside. (Note: If necessary, you can use meat from king, Dungeness, snow or stone crabs for your gumbo).",
                              "ingredients": [
                                  {
                                      "id": 0,
                                      "name": "gumbo",
                                      "localizedName": "gumbo",
                                      "image": ""
                                  },
                                  {
                                      "id": 1065062,
                                      "name": "meat",
                                      "localizedName": "meat",
                                      "image": "whole-chicken.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 4,
                              "step": "Before you fire up the stove again, cut up your celery, parsley, peppers, onions and garlic, especially if you're alone and there is no one to help you stir the pots. It takes time peeling the onions and garlic",
                              "ingredients": [
                                  {
                                      "id": 11297,
                                      "name": "parsley",
                                      "localizedName": "parsley",
                                      "image": "parsley.jpg"
                                  },
                                  {
                                      "id": 10111333,
                                      "name": "peppers",
                                      "localizedName": "peppers",
                                      "image": "green-pepper.jpg"
                                  },
                                  {
                                      "id": 11143,
                                      "name": "celery",
                                      "localizedName": "celery",
                                      "image": "celery.jpg"
                                  },
                                  {
                                      "id": 11215,
                                      "name": "garlic",
                                      "localizedName": "garlic",
                                      "image": "garlic.png"
                                  },
                                  {
                                      "id": 11282,
                                      "name": "onion",
                                      "localizedName": "onion",
                                      "image": "brown-onion.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404794,
                                      "name": "stove",
                                      "localizedName": "stove",
                                      "image": "oven.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 5,
                              "step": "Put the celery and parsley in a separate container from the other chopped ingredients and refrigerate until needed to keep them fresh.",
                              "ingredients": [
                                  {
                                      "id": 11297,
                                      "name": "parsley",
                                      "localizedName": "parsley",
                                      "image": "parsley.jpg"
                                  },
                                  {
                                      "id": 11143,
                                      "name": "celery",
                                      "localizedName": "celery",
                                      "image": "celery.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 6,
                              "step": "Place the gumbo pot with the shrimp stock on the stove.",
                              "ingredients": [
                                  {
                                      "id": 6963,
                                      "name": "shrimp stock",
                                      "localizedName": "shrimp stock",
                                      "image": "chicken-broth.png"
                                  },
                                  {
                                      "id": 0,
                                      "name": "gumbo",
                                      "localizedName": "gumbo",
                                      "image": ""
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404794,
                                      "name": "stove",
                                      "localizedName": "stove",
                                      "image": "oven.jpg"
                                  },
                                  {
                                      "id": 404752,
                                      "name": "pot",
                                      "localizedName": "pot",
                                      "image": "stock-pot.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 7,
                              "step": "Add cleaned crabs and bay leaves. Stir slowly. You don't want your shrimp stock messing up the floor.",
                              "ingredients": [
                                  {
                                      "id": 6963,
                                      "name": "shrimp stock",
                                      "localizedName": "shrimp stock",
                                      "image": "chicken-broth.png"
                                  },
                                  {
                                      "id": 2004,
                                      "name": "bay leaves",
                                      "localizedName": "bay leaves",
                                      "image": "bay-leaves.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 8,
                              "step": "Add celery, parsley, and tomato paste to the gumbo brewing on the stove. Bring to a boil. Turn down heat, cover, and let simmer.",
                              "ingredients": [
                                  {
                                      "id": 11887,
                                      "name": "tomato paste",
                                      "localizedName": "tomato paste",
                                      "image": "tomato-paste.jpg"
                                  },
                                  {
                                      "id": 11297,
                                      "name": "parsley",
                                      "localizedName": "parsley",
                                      "image": "parsley.jpg"
                                  },
                                  {
                                      "id": 11143,
                                      "name": "celery",
                                      "localizedName": "celery",
                                      "image": "celery.jpg"
                                  },
                                  {
                                      "id": 0,
                                      "name": "gumbo",
                                      "localizedName": "gumbo",
                                      "image": ""
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404794,
                                      "name": "stove",
                                      "localizedName": "stove",
                                      "image": "oven.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 9,
                              "step": "Here comes the roux -- a thick and flavorful sauce that has become one of the most important staples of Louisiana cuisine.",
                              "ingredients": [
                                  {
                                      "id": 0,
                                      "name": "sauce",
                                      "localizedName": "sauce",
                                      "image": ""
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 10,
                              "step": "Pour oil or shortening into a separate heavy skillet (please do not use a thin omelet pan) over a medium-low heat. Slowly stir in flour to make the roux. Keep your eyes on the skillet. If the phone rings, let the answering machine pick it up. Cook roux until it has a dark mahogany color. Do not stop stirring until roux appears nutty or grainy. If black specks appear, the roux is burned. Throw it out and start from scratch. A good roux could take 30 to 45 minutes cooking time.",
                              "ingredients": [
                                  {
                                      "id": 4615,
                                      "name": "shortening",
                                      "localizedName": "shortening",
                                      "image": "shortening.jpg"
                                  },
                                  {
                                      "id": 20081,
                                      "name": "all purpose flour",
                                      "localizedName": "all purpose flour",
                                      "image": "flour.png"
                                  },
                                  {
                                      "id": 4582,
                                      "name": "cooking oil",
                                      "localizedName": "cooking oil",
                                      "image": "vegetable-oil.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ],
                              "length": {
                                  "number": 30,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 11,
                              "step": "Now you are ready to add the holy trinity of onions, garlic, and green peppers to the roux mixture. Stir ingredients in slowly because the flour is still sizzling. The moisture will begin to disappear. This is when Jean would add another quart or two of water to the gumbo pot.",
                              "ingredients": [
                                  {
                                      "id": 11333,
                                      "name": "green pepper",
                                      "localizedName": "green pepper",
                                      "image": "green-pepper.jpg"
                                  },
                                  {
                                      "id": 11215,
                                      "name": "garlic",
                                      "localizedName": "garlic",
                                      "image": "garlic.png"
                                  },
                                  {
                                      "id": 11282,
                                      "name": "onion",
                                      "localizedName": "onion",
                                      "image": "brown-onion.png"
                                  },
                                  {
                                      "id": 20081,
                                      "name": "all purpose flour",
                                      "localizedName": "all purpose flour",
                                      "image": "flour.png"
                                  },
                                  {
                                      "id": 0,
                                      "name": "gumbo",
                                      "localizedName": "gumbo",
                                      "image": ""
                                  },
                                  {
                                      "id": 14412,
                                      "name": "water",
                                      "localizedName": "water",
                                      "image": "water.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404752,
                                      "name": "pot",
                                      "localizedName": "pot",
                                      "image": "stock-pot.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 12,
                              "step": "Add roux to the gumbo pot. Bring to a boil, stirring constantly. Lower heat and cover. The kitchen should smell good right now.",
                              "ingredients": [
                                  {
                                      "id": 0,
                                      "name": "gumbo",
                                      "localizedName": "gumbo",
                                      "image": ""
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404752,
                                      "name": "pot",
                                      "localizedName": "pot",
                                      "image": "stock-pot.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 13,
                              "step": "Pour yourself another cold something-or-other. You're halfway there. Come back to look and stir in an hour or so.",
                              "ingredients": [],
                              "equipment": []
                          },
                          {
                              "number": 14,
                              "step": "Season to taste: add salt, pepper, thyme, Worcestershire sauce, Tabasco sauce and any Creole seasoning you like. Don't overdo it right now.",
                              "ingredients": [
                                  {
                                      "id": 6971,
                                      "name": "worcestershire sauce",
                                      "localizedName": "worcestershire sauce",
                                      "image": "dark-sauce.jpg"
                                  },
                                  {
                                      "id": 1002031,
                                      "name": "creole seasoning",
                                      "localizedName": "creole seasoning",
                                      "image": "chili-powder.jpg"
                                  },
                                  {
                                      "id": 1026168,
                                      "name": "tabasco sauce",
                                      "localizedName": "tabasco sauce",
                                      "image": "hot-sauce-or-tabasco.png"
                                  },
                                  {
                                      "id": 1002030,
                                      "name": "pepper",
                                      "localizedName": "pepper",
                                      "image": "pepper.jpg"
                                  },
                                  {
                                      "id": 2049,
                                      "name": "thyme",
                                      "localizedName": "thyme",
                                      "image": "thyme.jpg"
                                  },
                                  {
                                      "id": 2047,
                                      "name": "salt",
                                      "localizedName": "salt",
                                      "image": "salt.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 15,
                              "step": "Let the roux work its magic absorbing all the wonderful ingredients. Gumbo is usually very spicy, but you can keep it mild. Remember, if you have decided to use andouille sausage it is also hot.",
                              "ingredients": [
                                  {
                                      "id": 7064,
                                      "name": "andouille sausage",
                                      "localizedName": "andouille sausage",
                                      "image": "smoked-sausage.jpg"
                                  },
                                  {
                                      "id": 0,
                                      "name": "gumbo",
                                      "localizedName": "gumbo",
                                      "image": ""
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 16,
                              "step": "Fry sausages and okra with a little bit of the leftover grease.",
                              "ingredients": [
                                  {
                                      "id": 1017063,
                                      "name": "sausage",
                                      "localizedName": "sausage",
                                      "image": "raw-pork-sausage.png"
                                  },
                                  {
                                      "id": 11278,
                                      "name": "okra",
                                      "localizedName": "okra",
                                      "image": "okra.png"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 17,
                              "step": "Sprinkle a little leftover flour if the okra is fresh.",
                              "ingredients": [
                                  {
                                      "id": 20081,
                                      "name": "all purpose flour",
                                      "localizedName": "all purpose flour",
                                      "image": "flour.png"
                                  },
                                  {
                                      "id": 11278,
                                      "name": "okra",
                                      "localizedName": "okra",
                                      "image": "okra.png"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 18,
                              "step": "Add to gumbo pot.",
                              "ingredients": [
                                  {
                                      "id": 0,
                                      "name": "gumbo",
                                      "localizedName": "gumbo",
                                      "image": ""
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404752,
                                      "name": "pot",
                                      "localizedName": "pot",
                                      "image": "stock-pot.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 19,
                              "step": "Add chopped peeled tomatoes, stirring until well blended.",
                              "ingredients": [
                                  {
                                      "id": 10011531,
                                      "name": "canned whole tomatoes",
                                      "localizedName": "canned whole tomatoes",
                                      "image": "tomatoes-canned.png"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 20,
                              "step": "Add more water if necessary. The roux will keep it thick and tasty. Return to a boil and simmer for 10 minutes. Reduce heat and let simmer, uncovered, for 2 1/2 to 3 hours over low heat.",
                              "ingredients": [
                                  {
                                      "id": 14412,
                                      "name": "water",
                                      "localizedName": "water",
                                      "image": "water.png"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 190,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 21,
                              "step": "Skim any excess fat.",
                              "ingredients": [],
                              "equipment": []
                          },
                          {
                              "number": 22,
                              "step": "Add shrimp. Stir in slowly as you increase the heat one last time. It's time to stir in the fil powder. Cook another 20 to 30 minutes until the gumbo is thick. Taste and adjust seasonings one more time. Did I mention the rice? Seafood gumbo is served over Louisiana rice. Of course, you can substitute for your own favorite rice. Just plain old brown or white rice will do. Before serving, taste one more time and adjust seasoning. Turn off heat and remove seafood gumbo from the stove.",
                              "ingredients": [
                                  {
                                      "id": 1042027,
                                      "name": "seasoning",
                                      "localizedName": "seasoning",
                                      "image": "seasoning.png"
                                  },
                                  {
                                      "id": 10220444,
                                      "name": "white rice",
                                      "localizedName": "white rice",
                                      "image": "uncooked-white-rice.png"
                                  },
                                  {
                                      "id": 0,
                                      "name": "seafood",
                                      "localizedName": "seafood",
                                      "image": "shrimp.png"
                                  },
                                  {
                                      "id": 15270,
                                      "name": "shrimp",
                                      "localizedName": "shrimp",
                                      "image": "shrimp.png"
                                  },
                                  {
                                      "id": 0,
                                      "name": "gumbo",
                                      "localizedName": "gumbo",
                                      "image": ""
                                  },
                                  {
                                      "id": 20444,
                                      "name": "rice",
                                      "localizedName": "rice",
                                      "image": "uncooked-white-rice.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404794,
                                      "name": "stove",
                                      "localizedName": "stove",
                                      "image": "oven.jpg"
                                  }
                              ],
                              "length": {
                                  "number": 20,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 23,
                              "step": "To cool down the pot before serving, place it in the sink with a few inches of ice-cold water. If needed, add additional salt and Tabasco sauce. If you can see through the gumbo to the bottom of the pot, work on your roux next time.",
                              "ingredients": [
                                  {
                                      "id": 1026168,
                                      "name": "tabasco sauce",
                                      "localizedName": "tabasco sauce",
                                      "image": "hot-sauce-or-tabasco.png"
                                  },
                                  {
                                      "id": 0,
                                      "name": "gumbo",
                                      "localizedName": "gumbo",
                                      "image": ""
                                  },
                                  {
                                      "id": 14412,
                                      "name": "water",
                                      "localizedName": "water",
                                      "image": "water.png"
                                  },
                                  {
                                      "id": 2047,
                                      "name": "salt",
                                      "localizedName": "salt",
                                      "image": "salt.jpg"
                                  },
                                  {
                                      "id": 10014412,
                                      "name": "ice",
                                      "localizedName": "ice",
                                      "image": "ice-cubes.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404752,
                                      "name": "pot",
                                      "localizedName": "pot",
                                      "image": "stock-pot.jpg"
                                  }
                              ]
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/jeans-seafood-gumbo-648524"
          },
          {
              "vegetarian": false,
              "vegan": false,
              "glutenFree": true,
              "dairyFree": false,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": false,
              "weightWatcherSmartPoints": 25,
              "gaps": "no",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 7,
              "healthScore": 12,
              "creditsText": "foodista.com",
              "sourceName": "foodista.com",
              "pricePerServing": 573.73,
              "extendedIngredients": [
                  {
                      "id": 1002030,
                      "aisle": "Spices and Seasonings",
                      "image": "pepper.jpg",
                      "consistency": "SOLID",
                      "name": "pepper",
                      "nameClean": "black pepper",
                      "original": "¼ tsp black pepper",
                      "originalName": "black pepper",
                      "amount": 0.25,
                      "unit": "tsp",
                      "meta": [
                          "black"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.25,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 0.25,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 1001,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "butter-sliced.jpg",
                      "consistency": "SOLID",
                      "name": "butter",
                      "nameClean": "butter",
                      "original": "125g Butter, softened",
                      "originalName": "Butter, softened",
                      "amount": 125.0,
                      "unit": "g",
                      "meta": [
                          "softened"
                      ],
                      "measures": {
                          "us": {
                              "amount": 4.409,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 125.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 20019,
                      "aisle": "Ethnic Foods",
                      "image": "corn-flour.jpg",
                      "consistency": "SOLID",
                      "name": "corn flour",
                      "nameClean": "corn flour",
                      "original": "2 Tbs corn flour",
                      "originalName": "corn flour",
                      "amount": 2.0,
                      "unit": "Tbs",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbs",
                              "unitLong": "Tbs"
                          }
                      }
                  },
                  {
                      "id": 1053,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "fluid-cream.jpg",
                      "consistency": "LIQUID",
                      "name": "cream",
                      "nameClean": "cream",
                      "original": "½ cup cream",
                      "originalName": "cream",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 119.0,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 2063,
                      "aisle": "Produce",
                      "image": "rosemary.jpg",
                      "consistency": "SOLID",
                      "name": "rosemary",
                      "nameClean": "fresh rosemary",
                      "original": "2 tsp fresh rosemary, chopped",
                      "originalName": "fresh rosemary, chopped",
                      "amount": 2.0,
                      "unit": "tsp",
                      "meta": [
                          "fresh",
                          "chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 9152,
                      "aisle": "Produce",
                      "image": "lemon-juice.jpg",
                      "consistency": "LIQUID",
                      "name": "lemon juice",
                      "nameClean": "lemon juice",
                      "original": "½ cup lemon juice",
                      "originalName": "lemon juice",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 122.0,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 9156,
                      "aisle": "Produce",
                      "image": "zest-lemon.jpg",
                      "consistency": "SOLID",
                      "name": "lemon rind",
                      "nameClean": "lemon peel",
                      "original": "1 tsp grated lemon rind",
                      "originalName": "grated lemon rind",
                      "amount": 1.0,
                      "unit": "tsp",
                      "meta": [
                          "grated"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 4053,
                      "aisle": "Oil, Vinegar, Salad Dressing",
                      "image": "olive-oil.jpg",
                      "consistency": "LIQUID",
                      "name": "olive oil",
                      "nameClean": "olive oil",
                      "original": "1 cup Olive oil",
                      "originalName": "Olive oil",
                      "amount": 1.0,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "cup",
                              "unitLong": "cup"
                          },
                          "metric": {
                              "amount": 216.0,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 1002030,
                      "aisle": "Spices and Seasonings",
                      "image": "pepper.jpg",
                      "consistency": "SOLID",
                      "name": "cracked pepper",
                      "nameClean": "black pepper",
                      "original": "1 tsp cracked black pepper",
                      "originalName": "cracked black pepper",
                      "amount": 1.0,
                      "unit": "tsp",
                      "meta": [
                          "black"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 2047,
                      "aisle": "Spices and Seasonings",
                      "image": "salt.jpg",
                      "consistency": "SOLID",
                      "name": "salt",
                      "nameClean": "table salt",
                      "original": "½ tsp salt",
                      "originalName": "salt",
                      "amount": 0.5,
                      "unit": "tsp",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 1056,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "sour-cream.jpg",
                      "consistency": "SOLID",
                      "name": "cream",
                      "nameClean": "sour cream",
                      "original": "½ cup sour cream",
                      "originalName": "sour cream",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [
                          "sour"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 115.0,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 17094,
                      "aisle": "Meat",
                      "image": "veal.jpg",
                      "consistency": "SOLID",
                      "name": "veal cutlets",
                      "nameClean": "veal cutlet",
                      "original": "4 veal cutlets",
                      "originalName": "veal cutlets",
                      "amount": 4.0,
                      "unit": "",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 4.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 4.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  }
              ],
              "id": 649502,
              "title": "Lemon and pepper veal cutlets",
              "readyInMinutes": 45,
              "servings": 4,
              "sourceUrl": "http://www.foodista.com/recipe/T6P6JZLC/lemon-and-pepper-veal-cutlets",
              "image": "https://spoonacular.com/recipeImages/649502-556x370.jpg",
              "imageType": "jpg",
              "summary": "Lemon and pepper veal cutlets might be just the main course you are searching for. This recipe serves 4. Watching your figure? This gluten free and ketogenic recipe has <b>698 calories</b>, <b>38g of protein</b>, and <b>58g of fat</b> per serving. For <b>$5.74 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. 7 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes about <b>45 minutes</b>. If you have rosemary, cream, corn flour, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe <b>earns a spoonacular score of 57%</b>, which is pretty good. Try <a href=\"https://spoonacular.com/recipes/veal-cutlets-with-lemon-caper-sauce-736\">Veal Cutlets With Lemon Caper Sauce</a>, <a href=\"https://spoonacular.com/recipes/grilled-chicken-cutlets-with-lemon-and-black-pepper-and-arugula-tomato-salad-357481\">Grilled Chicken Cutlets with Lemon and Black Pepper and Arugula-Tomato Salad</a>, and <a href=\"https://spoonacular.com/recipes/sauteed-veal-cutlets-saltimbocca-598869\">Sauteed Veal Cutlets | Saltimbocca</a> for similar recipes.",
              "cuisines": [],
              "dishTypes": [
                  "lunch",
                  "main course",
                  "main dish",
                  "dinner"
              ],
              "diets": [
                  "gluten free",
                  "ketogenic"
              ],
              "occasions": [],
              "instructions": "<ol><li>Slightly flatten the cutlets with a meat mallet.</li><li>Combine corn flour, salt and pepper, dredge the cutlets through the mixture.</li><li>Cook veal in butter and olive oil in a large pan for 3 minutes on each side or until browned and cooked as desired.</li><li>Remove veal from the pan and set aside. Cover to keep warm.</li><li>Mix and combine cream, sour cream, lemon rind, lemon juice, rosemary, pepper and salt.</li><li>Add the mix to the same pan, bring to the boil. Reduce flame and simmer, uncovered, for 5 minutes until sauce thickens slightly.</li><li>Return the chops to the pan, coat with sauce.</li><li>Serve with pilaf and green salad.</li></ol>",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "Slightly flatten the cutlets with a meat mallet.",
                              "ingredients": [
                                  {
                                      "id": 1065062,
                                      "name": "meat",
                                      "localizedName": "meat",
                                      "image": "whole-chicken.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 3846,
                                      "name": "meat tenderizer",
                                      "localizedName": "meat tenderizer",
                                      "image": "meat-mallet.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 2,
                              "step": "Combine corn flour, salt and pepper, dredge the cutlets through the mixture.Cook veal in butter and olive oil in a large pan for 3 minutes on each side or until browned and cooked as desired.",
                              "ingredients": [
                                  {
                                      "id": 1102047,
                                      "name": "salt and pepper",
                                      "localizedName": "salt and pepper",
                                      "image": "salt-and-pepper.jpg"
                                  },
                                  {
                                      "id": 20019,
                                      "name": "corn flour",
                                      "localizedName": "corn flour",
                                      "image": "corn-flour.jpg"
                                  },
                                  {
                                      "id": 4053,
                                      "name": "olive oil",
                                      "localizedName": "olive oil",
                                      "image": "olive-oil.jpg"
                                  },
                                  {
                                      "id": 1001,
                                      "name": "butter",
                                      "localizedName": "butter",
                                      "image": "butter-sliced.jpg"
                                  },
                                  {
                                      "id": 17142,
                                      "name": "veal",
                                      "localizedName": "veal",
                                      "image": "veal.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ],
                              "length": {
                                  "number": 3,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 3,
                              "step": "Remove veal from the pan and set aside. Cover to keep warm.",
                              "ingredients": [
                                  {
                                      "id": 17142,
                                      "name": "veal",
                                      "localizedName": "veal",
                                      "image": "veal.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ]
                          },
                          {
                              "number": 4,
                              "step": "Mix and combine cream, sour cream, lemon rind, lemon juice, rosemary, pepper and salt.",
                              "ingredients": [
                                  {
                                      "id": 9152,
                                      "name": "lemon juice",
                                      "localizedName": "lemon juice",
                                      "image": "lemon-juice.jpg"
                                  },
                                  {
                                      "id": 9156,
                                      "name": "lemon peel",
                                      "localizedName": "lemon peel",
                                      "image": "zest-lemon.jpg"
                                  },
                                  {
                                      "id": 1056,
                                      "name": "sour cream",
                                      "localizedName": "sour cream",
                                      "image": "sour-cream.jpg"
                                  },
                                  {
                                      "id": 2036,
                                      "name": "rosemary",
                                      "localizedName": "rosemary",
                                      "image": "rosemary.jpg"
                                  },
                                  {
                                      "id": 1002030,
                                      "name": "pepper",
                                      "localizedName": "pepper",
                                      "image": "pepper.jpg"
                                  },
                                  {
                                      "id": 1053,
                                      "name": "cream",
                                      "localizedName": "cream",
                                      "image": "fluid-cream.jpg"
                                  },
                                  {
                                      "id": 2047,
                                      "name": "salt",
                                      "localizedName": "salt",
                                      "image": "salt.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 5,
                              "step": "Add the mix to the same pan, bring to the boil. Reduce flame and simmer, uncovered, for 5 minutes until sauce thickens slightly.Return the chops to the pan, coat with sauce.",
                              "ingredients": [
                                  {
                                      "id": 0,
                                      "name": "sauce",
                                      "localizedName": "sauce",
                                      "image": ""
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ],
                              "length": {
                                  "number": 5,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 6,
                              "step": "Serve with pilaf and green salad.",
                              "ingredients": [],
                              "equipment": []
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/lemon-and-pepper-veal-cutlets-649502"
          },
          {
              "vegetarian": false,
              "vegan": false,
              "glutenFree": true,
              "dairyFree": false,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": false,
              "weightWatcherSmartPoints": 4,
              "gaps": "GAPS_FULL",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 3,
              "healthScore": 7,
              "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              "license": "CC BY 3.0",
              "sourceName": "Foodista",
              "pricePerServing": 661.06,
              "extendedIngredients": [
                  {
                      "id": 15023,
                      "aisle": "Seafood",
                      "image": "cod-fillet.jpg",
                      "consistency": "SOLID",
                      "name": "mahi-mahi",
                      "nameClean": "mahi mahi",
                      "original": "4 Mahi-Mahi fillets",
                      "originalName": "Mahi-Mahi fillets",
                      "amount": 4.0,
                      "unit": "fillet",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 4.0,
                              "unitShort": "fillet",
                              "unitLong": "fillets"
                          },
                          "metric": {
                              "amount": 4.0,
                              "unitShort": "fillet",
                              "unitLong": "fillets"
                          }
                      }
                  },
                  {
                      "id": 1102047,
                      "aisle": "Spices and Seasonings",
                      "image": "salt-and-pepper.jpg",
                      "consistency": "SOLID",
                      "name": "salt and pepper",
                      "nameClean": "salt and pepper",
                      "original": "Salt and Pepper (I recommend using a lemon 1 tablespoon olive oil",
                      "originalName": "Salt and Pepper (I recommend using a lemon olive oil",
                      "amount": 1.0,
                      "unit": "tablespoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          }
                      }
                  },
                  {
                      "id": 1001,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "butter-sliced.jpg",
                      "consistency": "SOLID",
                      "name": "butter",
                      "nameClean": "butter",
                      "original": "2 tablespoons butter",
                      "originalName": "butter",
                      "amount": 2.0,
                      "unit": "tablespoons",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          }
                      }
                  },
                  {
                      "id": 11677,
                      "aisle": "Produce",
                      "image": "shallots.jpg",
                      "consistency": "SOLID",
                      "name": "shallot",
                      "nameClean": "shallot",
                      "original": "1 shallot, minced",
                      "originalName": "shallot, minced",
                      "amount": 1.0,
                      "unit": "",
                      "meta": [
                          "minced"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 14106,
                      "aisle": "Alcoholic Beverages",
                      "image": "white-wine.jpg",
                      "consistency": "LIQUID",
                      "name": "white wine",
                      "nameClean": "dry white wine",
                      "original": "1/4 cup white wine",
                      "originalName": "white wine",
                      "amount": 0.25,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.25,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 60.0,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 6615,
                      "aisle": "Canned and Jarred",
                      "image": "chicken-broth.png",
                      "consistency": "LIQUID",
                      "name": "vegetable broth",
                      "nameClean": "vegetable stock",
                      "original": "1/4 cup chicken or vegetable broth",
                      "originalName": "chicken or vegetable broth",
                      "amount": 0.25,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.25,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 58.75,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 9152,
                      "aisle": "Produce",
                      "image": "lemon-juice.jpg",
                      "consistency": "LIQUID",
                      "name": "juice of lemon",
                      "nameClean": "lemon juice",
                      "original": "1 lemon, juiced",
                      "originalName": "lemon, juiced",
                      "amount": 1.0,
                      "unit": "",
                      "meta": [
                          "juiced"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 9156,
                      "aisle": "Produce",
                      "image": "zest-lemon.jpg",
                      "consistency": "SOLID",
                      "name": "lemon rind",
                      "nameClean": "lemon peel",
                      "original": "1 tablespoon lemon rind",
                      "originalName": "lemon rind",
                      "amount": 1.0,
                      "unit": "tablespoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          }
                      }
                  },
                  {
                      "id": 2054,
                      "aisle": "Canned and Jarred",
                      "image": "capers.jpg",
                      "consistency": "SOLID",
                      "name": "capers",
                      "nameClean": "capers",
                      "original": "1/4 cup capers, drained and rinsed (we love capers.. you may not hold the same relations",
                      "originalName": "capers, drained and rinsed (we love capers.. you may not hold the same relations",
                      "amount": 0.25,
                      "unit": "cup",
                      "meta": [
                          "drained and rinsed"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.25,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 43.75,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  }
              ],
              "id": 650632,
              "title": "Mahi-Mahi With Lemon Caper Sauce",
              "readyInMinutes": 45,
              "servings": 4,
              "sourceUrl": "https://www.foodista.com/recipe/KB2P6WYL/mahi-mahi-with-lemon-caper-sauce",
              "image": "https://spoonacular.com/recipeImages/650632-556x370.jpg",
              "imageType": "jpg",
              "summary": "Need a <b>gluten free, primal, and pescatarian main course</b>? Mahi-Mahi With Lemon Caper Sauce could be a great recipe to try. This recipe serves 4. For <b>$6.61 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One serving contains <b>217 calories</b>, <b>32g of protein</b>, and <b>7g of fat</b>. This recipe from Foodista requires mahi-mahi, capers, juice of lemon, and shallot. 3 people were glad they tried this recipe. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 40%</b>. This score is solid. <a href=\"https://spoonacular.com/recipes/pesto-crusted-mahi-mahi-with-blistered-tomatoes-and-lemon-butter-sauce-608482\">Pesto Crusted Mahi-Mahi with Blistered Tomatoes and Lemon Butter Sauce</a>, <a href=\"https://spoonacular.com/recipes/almond-thyme-crusted-mahi-mahi-with-lemon-chardonnay-sauce-630911\">Almond-Thyme-Crusted Mahi Mahi with Lemon Chardonnay Sauce</a>, and <a href=\"https://spoonacular.com/recipes/almond-thyme-crusted-mahi-mahi-with-lemon-chardonnay-sauce-1369637\">Almond-Thyme-Crusted Mahi Mahi with Lemon Chardonnay Sauce</a> are very similar to this recipe.",
              "cuisines": [],
              "dishTypes": [
                  "lunch",
                  "main course",
                  "main dish",
                  "dinner"
              ],
              "diets": [
                  "gluten free",
                  "primal",
                  "pescatarian"
              ],
              "occasions": [],
              "instructions": "Prepare the fish by sprinkling each side with salt and pepper (or lemon pepper).\nPour the olive oil into a stainless steel pan on medium high heat.  When the oil is hot, test it with the tip of the fish fillet.  If the oil crackles from the touch, your ready!  If not, it needs to be hotter to get the sear the dish needs.\nWhen the Mahi-Mahi is cooked (usually 3-4 minutes per side depending on the thickness of your fillet), remove and cover loosely to keep warm.\nAdd the butter to the hot pan and melt.\nSaute the shallots until softened in the melted butter.\nAdd wine, broth, lemon juice, and lemon zest to the pan and use a spatula to scrape up all the browned bits (aka deglaze the pan).  Allow the mixture to simmer and reduce by 1/3 to 1/2, stirring occasionally.  Note: you can adjust the wine/broth ratio according to your tastes and how much wine you have left in the bottle by the time you get to this step ;)\nAdd the rinsed capers and simmer one more minute.  While you are waiting, plate your fillets.  Pour the sauce over the top.",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "Prepare the fish by sprinkling each side with salt and pepper (or lemon pepper).",
                              "ingredients": [
                                  {
                                      "id": 1102047,
                                      "name": "salt and pepper",
                                      "localizedName": "salt and pepper",
                                      "image": "salt-and-pepper.jpg"
                                  },
                                  {
                                      "id": 1012030,
                                      "name": "lemon pepper",
                                      "localizedName": "lemon pepper",
                                      "image": "seasoning.png"
                                  },
                                  {
                                      "id": 10115261,
                                      "name": "fish",
                                      "localizedName": "fish",
                                      "image": "fish-fillet.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 2,
                              "step": "Pour the olive oil into a stainless steel pan on medium high heat.  When the oil is hot, test it with the tip of the fish fillet.  If the oil crackles from the touch, your ready!  If not, it needs to be hotter to get the sear the dish needs.",
                              "ingredients": [
                                  {
                                      "id": 10115261,
                                      "name": "fish fillets",
                                      "localizedName": "fish fillets",
                                      "image": "fish-fillet.jpg"
                                  },
                                  {
                                      "id": 4053,
                                      "name": "olive oil",
                                      "localizedName": "olive oil",
                                      "image": "olive-oil.jpg"
                                  },
                                  {
                                      "id": 4582,
                                      "name": "cooking oil",
                                      "localizedName": "cooking oil",
                                      "image": "vegetable-oil.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ]
                          },
                          {
                              "number": 3,
                              "step": "When the Mahi-Mahi is cooked (usually 3-4 minutes per side depending on the thickness of your fillet), remove and cover loosely to keep warm.",
                              "ingredients": [
                                  {
                                      "id": 15023,
                                      "name": "mahi mahi",
                                      "localizedName": "mahi mahi",
                                      "image": "cod-fillet.jpg"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 4,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 4,
                              "step": "Add the butter to the hot pan and melt.",
                              "ingredients": [
                                  {
                                      "id": 1001,
                                      "name": "butter",
                                      "localizedName": "butter",
                                      "image": "butter-sliced.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ]
                          },
                          {
                              "number": 5,
                              "step": "Saute the shallots until softened in the melted butter.",
                              "ingredients": [
                                  {
                                      "id": 11677,
                                      "name": "shallot",
                                      "localizedName": "shallot",
                                      "image": "shallots.jpg"
                                  },
                                  {
                                      "id": 1001,
                                      "name": "butter",
                                      "localizedName": "butter",
                                      "image": "butter-sliced.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 6,
                              "step": "Add wine, broth, lemon juice, and lemon zest to the pan and use a spatula to scrape up all the browned bits (aka deglaze the pan).  Allow the mixture to simmer and reduce by 1/3 to 1/2, stirring occasionally.  Note: you can adjust the wine/broth ratio according to your tastes and how much wine you have left in the bottle by the time you get to this step ;)",
                              "ingredients": [
                                  {
                                      "id": 9152,
                                      "name": "lemon juice",
                                      "localizedName": "lemon juice",
                                      "image": "lemon-juice.jpg"
                                  },
                                  {
                                      "id": 9156,
                                      "name": "lemon zest",
                                      "localizedName": "lemon zest",
                                      "image": "zest-lemon.jpg"
                                  },
                                  {
                                      "id": 1006615,
                                      "name": "broth",
                                      "localizedName": "broth",
                                      "image": "chicken-broth.png"
                                  },
                                  {
                                      "id": 14084,
                                      "name": "wine",
                                      "localizedName": "wine",
                                      "image": "red-wine.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404642,
                                      "name": "spatula",
                                      "localizedName": "spatula",
                                      "image": "spatula-or-turner.jpg"
                                  },
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ]
                          },
                          {
                              "number": 7,
                              "step": "Add the rinsed capers and simmer one more minute.  While you are waiting, plate your fillets.",
                              "ingredients": [
                                  {
                                      "id": 2054,
                                      "name": "capers",
                                      "localizedName": "capers",
                                      "image": "capers.jpg"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 1,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 8,
                              "step": "Pour the sauce over the top.",
                              "ingredients": [
                                  {
                                      "id": 0,
                                      "name": "sauce",
                                      "localizedName": "sauce",
                                      "image": ""
                                  }
                              ],
                              "equipment": []
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/mahi-mahi-with-lemon-caper-sauce-650632"
          }
      ]
  )
  },
  getBreakfast: (req, res) => {
    res.send([
          {
              "vegetarian": true,
              "vegan": false,
              "glutenFree": true,
              "dairyFree": false,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": false,
              "weightWatcherSmartPoints": 13,
              "gaps": "no",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 8,
              "healthScore": 14,
              "creditsText": "coffeebean",
              "license": "spoonacular's terms",
              "sourceName": "spoonacular",
              "pricePerServing": 159.28,
              "extendedIngredients": [
                  {
                      "id": 19165,
                      "aisle": "Baking",
                      "image": "cocoa-powder.png",
                      "consistency": "SOLID",
                      "name": "cocoa powder",
                      "nameClean": "cacao powder",
                      "original": "1 tablespoon cocoa powder",
                      "originalName": "cocoa powder",
                      "amount": 1.0,
                      "unit": "tablespoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          }
                      }
                  },
                  {
                      "id": 1012,
                      "aisle": "Cheese",
                      "image": "cottage-cheese.jpg",
                      "consistency": "SOLID",
                      "name": "cottage cheese",
                      "nameClean": "cottage cheese",
                      "original": "1 cup quark or cottage cheese",
                      "originalName": "quark or cottage cheese",
                      "amount": 1.0,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "cup",
                              "unitLong": "cup"
                          },
                          "metric": {
                              "amount": 210.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 1123,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "egg.png",
                      "consistency": "SOLID",
                      "name": "eggs",
                      "nameClean": "egg",
                      "original": "3 eggs",
                      "originalName": "eggs",
                      "amount": 3.0,
                      "unit": "",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 3.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 3.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 19911,
                      "aisle": "Cereal",
                      "image": "maple-syrup.png",
                      "consistency": "LIQUID",
                      "name": "maple syrup",
                      "nameClean": "maple syrup",
                      "original": "maple syrup",
                      "originalName": "maple syrup",
                      "amount": 2.0,
                      "unit": "servings",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "servings",
                              "unitLong": "servings"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "servings",
                              "unitLong": "servings"
                          }
                      }
                  },
                  {
                      "id": 8120,
                      "aisle": "Cereal",
                      "image": "rolled-oats.jpg",
                      "consistency": "SOLID",
                      "name": "rolled oats",
                      "nameClean": "rolled oats",
                      "original": "1 cup rolled oats",
                      "originalName": "rolled oats",
                      "amount": 1.0,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "cup",
                              "unitLong": "cup"
                          },
                          "metric": {
                              "amount": 81.081,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  }
              ],
              "id": 157259,
              "title": "Cocoa Protein Pancakes",
              "author": "coffeebean",
              "readyInMinutes": 15,
              "servings": 2,
              "sourceUrl": "http://spoonacular.com/-1383233228884",
              "image": "https://spoonacular.com/recipeImages/157259-556x370.jpg",
              "imageType": "jpg",
              "summary": "Cocoa Protein Pancakes is a <b>gluten free and lacto ovo vegetarian</b> recipe with 2 servings. For <b>$1.59 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. One serving contains <b>410 calories</b>, <b>26g of protein</b>, and <b>14g of fat</b>. It works well as a breakfast. Head to the store and pick up maple syrup, cottage cheese, rolled oats, and a few other things to make it today. It is brought to you by spoonacular user <a href=\"/profile/coffeebean\">coffeebean</a>. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/cocoa-protein-pancakes-1636193\">Cocoa Protein Pancakes</a>, <a href=\"https://spoonacular.com/recipes/cocoa-protein-pancakes-1201837\">Cocoa Protein Pancakes</a>, and <a href=\"https://spoonacular.com/recipes/cocoa-protein-pancakes-1497417\">Cocoa Protein Pancakes</a>.",
              "cuisines": [],
              "dishTypes": [
                  "morning meal",
                  "brunch",
                  "breakfast"
              ],
              "diets": [
                  "gluten free",
                  "lacto ovo vegetarian"
              ],
              "occasions": [],
              "instructions": "<p><strong>1.</strong> Blend the rolled oats in a blender or food processor until you have a fine powder. Mix in the cocoa powder.<br></p><p> <strong>2.</strong> Blend the ground oats/cocoa powder with the cottage cheese (or quark, if you can find it) and eggs.</p><p> <strong>3.</strong> Pour the thick batter into a hot, oiled skillet and use the back of a spoon to form round pancakes.</p><p> <strong>4</strong>. Flip the pancakes once the sides are firm and turning brown.<strong>.</strong></p><p> <strong>5.  </strong>Serve with maple syrup.</p>",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "Blend the rolled oats in a blender or food processor until you have a fine powder.",
                              "ingredients": [
                                  {
                                      "id": 8120,
                                      "name": "rolled oats",
                                      "localizedName": "rolled oats",
                                      "image": "rolled-oats.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404771,
                                      "name": "food processor",
                                      "localizedName": "food processor",
                                      "image": "food-processor.png"
                                  },
                                  {
                                      "id": 404726,
                                      "name": "blender",
                                      "localizedName": "blender",
                                      "image": "blender.png"
                                  }
                              ]
                          },
                          {
                              "number": 2,
                              "step": "Mix in the cocoa powder.",
                              "ingredients": [
                                  {
                                      "id": 19165,
                                      "name": "cocoa powder",
                                      "localizedName": "cocoa powder",
                                      "image": "cocoa-powder.png"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 3,
                              "step": "Blend the ground oats/cocoa powder with the cottage cheese (or quark, if you can find it) and eggs.",
                              "ingredients": [
                                  {
                                      "id": 1012,
                                      "name": "cottage cheese",
                                      "localizedName": "cottage cheese",
                                      "image": "cottage-cheese.jpg"
                                  },
                                  {
                                      "id": 19165,
                                      "name": "cocoa powder",
                                      "localizedName": "cocoa powder",
                                      "image": "cocoa-powder.png"
                                  },
                                  {
                                      "id": 93676,
                                      "name": "quark",
                                      "localizedName": "quark",
                                      "image": "white-cream-fluffy.jpg"
                                  },
                                  {
                                      "id": 1123,
                                      "name": "egg",
                                      "localizedName": "egg",
                                      "image": "egg.png"
                                  },
                                  {
                                      "id": 8120,
                                      "name": "oats",
                                      "localizedName": "oats",
                                      "image": "rolled-oats.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 4,
                              "step": "Pour the thick batter into a hot, oiled skillet and use the back of a spoon to form round pancakes.",
                              "ingredients": [],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ]
                          },
                          {
                              "number": 5,
                              "step": "Flip the pancakes once the sides are firm and turning brown..",
                              "ingredients": [],
                              "equipment": []
                          },
                          {
                              "number": 6,
                              "step": "Serve with maple syrup.",
                              "ingredients": [
                                  {
                                      "id": 19911,
                                      "name": "maple syrup",
                                      "localizedName": "maple syrup",
                                      "image": "maple-syrup.png"
                                  }
                              ],
                              "equipment": []
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/cocoa-protein-pancakes-157259"
          },
          {
              "vegetarian": true,
              "vegan": false,
              "glutenFree": false,
              "dairyFree": false,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": false,
              "weightWatcherSmartPoints": 12,
              "gaps": "no",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 6,
              "healthScore": 1,
              "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              "license": "CC BY 3.0",
              "sourceName": "Foodista",
              "pricePerServing": 33.92,
              "extendedIngredients": [
                  {
                      "id": 20081,
                      "aisle": "Baking",
                      "image": "flour.png",
                      "consistency": "SOLID",
                      "name": "all purpose flour",
                      "nameClean": "wheat flour",
                      "original": "1 cup of All purpose Flour",
                      "originalName": "All purpose Flour",
                      "amount": 1.0,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "cup",
                              "unitLong": "cup"
                          },
                          "metric": {
                              "amount": 125.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 20081,
                      "aisle": "Baking",
                      "image": "flour.png",
                      "consistency": "SOLID",
                      "name": "wholewheat flour",
                      "nameClean": "wheat flour",
                      "original": "1/2 cup of wholewheat flour",
                      "originalName": "wholewheat flour",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 62.5,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 19336,
                      "aisle": "Baking",
                      "image": "powdered-sugar.jpg",
                      "consistency": "SOLID",
                      "name": "powdered sugar",
                      "nameClean": "powdered sugar",
                      "original": "1 cup of powdered sugar",
                      "originalName": "powdered sugar",
                      "amount": 1.0,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "cup",
                              "unitLong": "cup"
                          },
                          "metric": {
                              "amount": 120.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 4669,
                      "aisle": "Oil, Vinegar, Salad Dressing",
                      "image": "vegetable-oil.jpg",
                      "consistency": "LIQUID",
                      "name": "vegetable oil",
                      "nameClean": "vegetable oil",
                      "original": "6 tablespoons of vegetable oil",
                      "originalName": "vegetable oil",
                      "amount": 6.0,
                      "unit": "tablespoons",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 6.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          },
                          "metric": {
                              "amount": 6.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          }
                      }
                  },
                  {
                      "id": 2053,
                      "aisle": "Oil, Vinegar, Salad Dressing",
                      "image": "vinegar-(white).jpg",
                      "consistency": "LIQUID",
                      "name": "vinegar",
                      "nameClean": "distilled white vinegar",
                      "original": "1 tablespoon Vinegar",
                      "originalName": "Vinegar",
                      "amount": 1.0,
                      "unit": "tablespoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          }
                      }
                  },
                  {
                      "id": 14214,
                      "aisle": "Tea and Coffee",
                      "image": "instant-coffee-or-instant-espresso.png",
                      "consistency": "SOLID",
                      "name": "coffee powder",
                      "nameClean": "instant coffee",
                      "original": "1/2 teaspoon of instant coffee powder",
                      "originalName": "instant coffee powder",
                      "amount": 0.5,
                      "unit": "teaspoon",
                      "meta": [
                          "instant"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 1012010,
                      "aisle": "Spices and Seasonings",
                      "image": "cinnamon.jpg",
                      "consistency": "SOLID",
                      "name": "cinnamon powder",
                      "nameClean": "ground cinnamon",
                      "original": "1 teaspoon of Cinnamon powder",
                      "originalName": "Cinnamon powder",
                      "amount": 1.0,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 18372,
                      "aisle": "Baking",
                      "image": "white-powder.jpg",
                      "consistency": "SOLID",
                      "name": "baking soda",
                      "nameClean": "baking soda",
                      "original": "1 teaspoon of Baking soda",
                      "originalName": "Baking soda",
                      "amount": 1.0,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 2047,
                      "aisle": "Spices and Seasonings",
                      "image": "salt.jpg",
                      "consistency": "SOLID",
                      "name": "salt",
                      "nameClean": "table salt",
                      "original": "1/2 teaspoon of salt",
                      "originalName": "salt",
                      "amount": 0.5,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 1012050,
                      "aisle": "Baking",
                      "image": "vanilla-extract.jpg",
                      "consistency": "LIQUID",
                      "name": "vanilla essence",
                      "nameClean": "artificial vanilla",
                      "original": "1 teaspoon of Vanilla essence",
                      "originalName": "Vanilla essence",
                      "amount": 1.0,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 1116,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "plain-yogurt.jpg",
                      "consistency": "SOLID",
                      "name": "curd",
                      "nameClean": "yogurt",
                      "original": "1/2 cup of Curd or Yogurt",
                      "originalName": "Curd or Yogurt",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 122.5,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 10014209,
                      "aisle": "Tea and Coffee",
                      "image": "brewed-coffee.jpg",
                      "consistency": "SOLID",
                      "name": "strong coffee decoction",
                      "nameClean": "strong coffee",
                      "original": "1/2 cup of strong coffee decoction",
                      "originalName": "strong coffee decoction",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 118.5,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  }
              ],
              "id": 639456,
              "title": "Cinnamon Eggless Coffee Cake",
              "readyInMinutes": 45,
              "servings": 6,
              "sourceUrl": "https://www.foodista.com/recipe/CJJNKPT5/cinnamon-eggless-coffee-cake",
              "image": "https://spoonacular.com/recipeImages/639456-556x370.jpg",
              "imageType": "jpg",
              "summary": "You can never have too many breakfast recipes, so give Cinnamon Eggless Coffee Cake a try. One serving contains <b>328 calories</b>, <b>4g of protein</b>, and <b>15g of fat</b>. This recipe serves 6 and costs 34 cents per serving. It is a <b>very reasonably priced</b> recipe for fans of Southern food. This recipe from Foodista requires vinegar, wholewheat flour, baking soda, and cinnamon powder. 6 people found this recipe to be flavorful and satisfying. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 20%</b>, which is not so awesome. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/eggless-dates-walnut-coffee-cake-eggless-cake-s-486685\">eggless dates walnut coffee cake | eggless cake s</a>, <a href=\"https://spoonacular.com/recipes/mug-cinnamon-coffee-cake-with-coffee-mate-extra-sweet-creamy-562548\">Mug Cinnamon Coffee Cake with Coffee-mate Extra Sweet & Creamy</a>, and <a href=\"https://spoonacular.com/recipes/eggless-apple-cinnamon-muffin-eggless-muffins-622027\">Eggless Apple Cinnamon Muffin | Eggless muffins</a>.",
              "cuisines": [
                  "Southern"
              ],
              "dishTypes": [
                  "morning meal",
                  "dessert",
                  "brunch",
                  "breakfast"
              ],
              "diets": [
                  "lacto ovo vegetarian"
              ],
              "occasions": [],
              "instructions": "Preheat the oven for 10 minutes at 180C. Grease a rectangular tin for baking the cake and keep it aside. Take a big vessel and sift the two kinds of flour with baking powder, coffee, powder, cinnamon powder and salt for at least three times.\nTake another vessel and beat powdered sugar and oil till it is light and fluffy , for about 10 minutes.\nAdd the curd, coffee decoction, vanilla essence and vinegar in the sugar and oil mixture and stir it thoroughly. Keep 1 tsp. of sugar aside.\nGently mix in the liquid mix in the dry flour. Mix the whole batter very lightly till it resembles a uniform paste. Do not over mix, just 10-12 strokes will do.\nPour the prepared batter in the baking tin and sprinkle 1 tsp. of sugar over it. Bake it at 180C for about 25-30 minutes or till done.\nInsert a clean knife and take it out, if it comes clean the cinnamon tea cake is ready, else bake it for few more minutes.\nTake out of the oven and let it cool on a wire rack. Cut it in desired shape and serve with tea or coffee. Stays good for a week.",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "Preheat the oven for 10 minutes at 180C. Grease a rectangular tin for baking the cake and keep it aside. Take a big vessel and sift the two kinds of flour with baking powder, coffee, powder, cinnamon powder and salt for at least three times.",
                              "ingredients": [
                                  {
                                      "id": 1012010,
                                      "name": "ground cinnamon",
                                      "localizedName": "ground cinnamon",
                                      "image": "cinnamon.jpg"
                                  },
                                  {
                                      "id": 18369,
                                      "name": "baking powder",
                                      "localizedName": "baking powder",
                                      "image": "white-powder.jpg"
                                  },
                                  {
                                      "id": 14209,
                                      "name": "coffee",
                                      "localizedName": "coffee",
                                      "image": "brewed-coffee.jpg"
                                  },
                                  {
                                      "id": 20081,
                                      "name": "all purpose flour",
                                      "localizedName": "all purpose flour",
                                      "image": "flour.png"
                                  },
                                  {
                                      "id": 2047,
                                      "name": "salt",
                                      "localizedName": "salt",
                                      "image": "salt.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404784,
                                      "name": "oven",
                                      "localizedName": "oven",
                                      "image": "oven.jpg",
                                      "temperature": {
                                          "number": 180.0,
                                          "unit": "Celsius"
                                      }
                                  }
                              ],
                              "length": {
                                  "number": 10,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 2,
                              "step": "Take another vessel and beat powdered sugar and oil till it is light and fluffy , for about 10 minutes.",
                              "ingredients": [
                                  {
                                      "id": 19336,
                                      "name": "powdered sugar",
                                      "localizedName": "powdered sugar",
                                      "image": "powdered-sugar.jpg"
                                  },
                                  {
                                      "id": 4582,
                                      "name": "cooking oil",
                                      "localizedName": "cooking oil",
                                      "image": "vegetable-oil.jpg"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 10,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 3,
                              "step": "Add the curd, coffee decoction, vanilla essence and vinegar in the sugar and oil mixture and stir it thoroughly. Keep 1 tsp. of sugar aside.",
                              "ingredients": [
                                  {
                                      "id": 1012050,
                                      "name": "artificial vanilla",
                                      "localizedName": "artificial vanilla",
                                      "image": "vanilla-extract.jpg"
                                  },
                                  {
                                      "id": 2053,
                                      "name": "vinegar",
                                      "localizedName": "vinegar",
                                      "image": "vinegar-(white).jpg"
                                  },
                                  {
                                      "id": 14209,
                                      "name": "coffee",
                                      "localizedName": "coffee",
                                      "image": "brewed-coffee.jpg"
                                  },
                                  {
                                      "id": 19335,
                                      "name": "sugar",
                                      "localizedName": "sugar",
                                      "image": "sugar-in-bowl.png"
                                  },
                                  {
                                      "id": 4582,
                                      "name": "cooking oil",
                                      "localizedName": "cooking oil",
                                      "image": "vegetable-oil.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 4,
                              "step": "Gently mix in the liquid mix in the dry flour.",
                              "ingredients": [
                                  {
                                      "id": 20081,
                                      "name": "all purpose flour",
                                      "localizedName": "all purpose flour",
                                      "image": "flour.png"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 5,
                              "step": "Mix the whole batter very lightly till it resembles a uniform paste. Do not over mix, just 10-12 strokes will do.",
                              "ingredients": [],
                              "equipment": []
                          },
                          {
                              "number": 6,
                              "step": "Pour the prepared batter in the baking tin and sprinkle 1 tsp. of sugar over it.",
                              "ingredients": [
                                  {
                                      "id": 19335,
                                      "name": "sugar",
                                      "localizedName": "sugar",
                                      "image": "sugar-in-bowl.png"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 7,
                              "step": "Bake it at 180C for about 25-30 minutes or till done.",
                              "ingredients": [],
                              "equipment": [
                                  {
                                      "id": 404784,
                                      "name": "oven",
                                      "localizedName": "oven",
                                      "image": "oven.jpg",
                                      "temperature": {
                                          "number": 180.0,
                                          "unit": "Celsius"
                                      }
                                  }
                              ],
                              "length": {
                                  "number": 30,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 8,
                              "step": "Insert a clean knife and take it out, if it comes clean the cinnamon tea cake is ready, else bake it for few more minutes.",
                              "ingredients": [
                                  {
                                      "id": 2010,
                                      "name": "cinnamon",
                                      "localizedName": "cinnamon",
                                      "image": "cinnamon.jpg"
                                  },
                                  {
                                      "id": 14355,
                                      "name": "tea",
                                      "localizedName": "tea",
                                      "image": "tea-bags.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404784,
                                      "name": "oven",
                                      "localizedName": "oven",
                                      "image": "oven.jpg"
                                  },
                                  {
                                      "id": 404745,
                                      "name": "knife",
                                      "localizedName": "knife",
                                      "image": "chefs-knife.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 9,
                              "step": "Take out of the oven and let it cool on a wire rack.",
                              "ingredients": [],
                              "equipment": [
                                  {
                                      "id": 405900,
                                      "name": "wire rack",
                                      "localizedName": "wire rack",
                                      "image": "wire-rack.jpg"
                                  },
                                  {
                                      "id": 404784,
                                      "name": "oven",
                                      "localizedName": "oven",
                                      "image": "oven.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 10,
                              "step": "Cut it in desired shape and serve with tea or coffee. Stays good for a week.",
                              "ingredients": [
                                  {
                                      "id": 14209,
                                      "name": "coffee",
                                      "localizedName": "coffee",
                                      "image": "brewed-coffee.jpg"
                                  },
                                  {
                                      "id": 14355,
                                      "name": "tea",
                                      "localizedName": "tea",
                                      "image": "tea-bags.jpg"
                                  }
                              ],
                              "equipment": []
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/cinnamon-eggless-coffee-cake-639456"
          },
          {
              "vegetarian": true,
              "vegan": false,
              "glutenFree": true,
              "dairyFree": false,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": false,
              "weightWatcherSmartPoints": 10,
              "gaps": "no",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 6,
              "healthScore": 17,
              "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              "license": "CC BY 3.0",
              "sourceName": "Foodista",
              "pricePerServing": 123.98,
              "extendedIngredients": [
                  {
                      "id": 9042,
                      "aisle": "Produce",
                      "image": "blackberries.jpg",
                      "consistency": "SOLID",
                      "name": "blackberries",
                      "nameClean": "blackberries",
                      "original": "1/2 cup frozen blackberries",
                      "originalName": "frozen blackberries",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [
                          "frozen"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 72.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 9050,
                      "aisle": "Produce",
                      "image": "blueberries.jpg",
                      "consistency": "SOLID",
                      "name": "blueberries",
                      "nameClean": "blueberries",
                      "original": "1/2 cup frozen blueberries",
                      "originalName": "frozen blueberries",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [
                          "frozen"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 74.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 14292,
                      "aisle": "Frozen",
                      "image": "lemonade.jpg",
                      "consistency": "SOLID",
                      "name": "lemonade concentrate",
                      "nameClean": "lemonade concentrate",
                      "original": "2 tablespoons lemonade concentrate",
                      "originalName": "lemonade concentrate",
                      "amount": 2.0,
                      "unit": "tablespoons",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          }
                      }
                  },
                  {
                      "id": 9302,
                      "aisle": "Produce",
                      "image": "raspberries.jpg",
                      "consistency": "SOLID",
                      "name": "raspberries",
                      "nameClean": "raspberries",
                      "original": "1/2 cup frozen unsweetened raspberries",
                      "originalName": "frozen unsweetened raspberries",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [
                          "unsweetened",
                          "frozen"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 60.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 9316,
                      "aisle": "Produce",
                      "image": "strawberries.png",
                      "consistency": "SOLID",
                      "name": "strawberries",
                      "nameClean": "strawberries",
                      "original": "1/2 cup frozen unsweetened strawberries",
                      "originalName": "frozen unsweetened strawberries",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [
                          "unsweetened",
                          "frozen"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 72.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 19335,
                      "aisle": "Baking",
                      "image": "sugar-in-bowl.png",
                      "consistency": "SOLID",
                      "name": "sugar",
                      "nameClean": "sugar",
                      "original": "1 tablespoon sugar",
                      "originalName": "sugar",
                      "amount": 1.0,
                      "unit": "tablespoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "Tbsp",
                              "unitLong": "Tbsp"
                          }
                      }
                  },
                  {
                      "id": 2050,
                      "aisle": "Baking",
                      "image": "vanilla-extract.jpg",
                      "consistency": "LIQUID",
                      "name": "vanilla extract",
                      "nameClean": "vanilla extract",
                      "original": "1/2 teaspoon vanilla extract",
                      "originalName": "vanilla extract",
                      "amount": 0.5,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 1011077,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "milk.png",
                      "consistency": "LIQUID",
                      "name": "milk",
                      "nameClean": "whole milk",
                      "original": "5 1/2 cups whole milk (do not use skim)",
                      "originalName": "whole milk (do not use skim)",
                      "amount": 5.5,
                      "unit": "cups",
                      "meta": [
                          "whole",
                          "(do not use skim)"
                      ],
                      "measures": {
                          "us": {
                              "amount": 5.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 1.342,
                              "unitShort": "l",
                              "unitLong": "liters"
                          }
                      }
                  }
              ],
              "id": 643241,
              "title": "Four-Berry Blast Fruit Smoothie",
              "readyInMinutes": 10,
              "servings": 4,
              "sourceUrl": "http://www.foodista.com/recipe/445N2G3Y/four-berry-blast-fruit-smoothie",
              "image": "https://spoonacular.com/recipeImages/643241-556x370.jpg",
              "imageType": "jpg",
              "summary": "If you want to add more <b>gluten free and lacto ovo vegetarian</b> recipes to your recipe box, Four-Berry Blast Fruit Smoothie might be a recipe you should try. This recipe serves 4. This breakfast has <b>261 calories</b>, <b>12g of protein</b>, and <b>11g of fat</b> per serving. For <b>$1.24 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. 6 people were impressed by this recipe. Head to the store and pick up milk, blueberries, vanillan extract, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>10 minutes</b>. It is brought to you by Foodista. Overall, this recipe earns a <b>solid spoonacular score of 74%</b>. Try <a href=\"https://spoonacular.com/recipes/four-berry-blast-fruit-smoothie-1364149\">Four-Berry Blast Fruit Smoothie</a>, <a href=\"https://spoonacular.com/recipes/ginger-berry-fruit-smoothie-1434023\">Ginger Berry Fruit Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/ginger-berry-fruit-smoothie-1253437\">Ginger Berry Fruit Smoothie</a> for similar recipes.",
              "cuisines": [],
              "dishTypes": [
                  "morning meal",
                  "brunch",
                  "beverage",
                  "breakfast",
                  "drink"
              ],
              "diets": [
                  "gluten free",
                  "lacto ovo vegetarian"
              ],
              "occasions": [],
              "instructions": "<ol><li>Place first five items into a blender and pulse a few times. Add the next berry and pulse 2-3 times. Repeat until all berries have been added, then blend on high until smooth.</li></ol>",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "Place first five items into a blender and pulse a few times.",
                              "ingredients": [],
                              "equipment": [
                                  {
                                      "id": 404726,
                                      "name": "blender",
                                      "localizedName": "blender",
                                      "image": "blender.png"
                                  }
                              ]
                          },
                          {
                              "number": 2,
                              "step": "Add the next berry and pulse 2-3 times. Repeat until all berries have been added, then blend on high until smooth.",
                              "ingredients": [
                                  {
                                      "id": 1009054,
                                      "name": "berries",
                                      "localizedName": "berries",
                                      "image": "berries-mixed.jpg"
                                  }
                              ],
                              "equipment": []
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/four-berry-blast-fruit-smoothie-643241"
          },
          {
              "vegetarian": true,
              "vegan": true,
              "glutenFree": true,
              "dairyFree": true,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": true,
              "weightWatcherSmartPoints": 29,
              "gaps": "no",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 15,
              "healthScore": 7,
              "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              "license": "CC BY 3.0",
              "sourceName": "Foodista",
              "pricePerServing": 293.95,
              "extendedIngredients": [
                  {
                      "id": 93740,
                      "aisle": "Gluten Free",
                      "image": "almond-meal-or-almond-flour.jpg",
                      "consistency": "SOLID",
                      "name": "almond flour",
                      "nameClean": "almond meal",
                      "original": "1/2 cup almond flour",
                      "originalName": "almond flour",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 56.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 93747,
                      "aisle": "Gluten Free",
                      "image": "coconut-flour-or-other-gluten-free-flour.jpg",
                      "consistency": "SOLID",
                      "name": "coconut flour",
                      "nameClean": "coconut flour",
                      "original": "1/2 cup coconut flour",
                      "originalName": "coconut flour",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 60.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 20003,
                      "aisle": "Gluten Free",
                      "image": "white-powder.jpg",
                      "consistency": "SOLID",
                      "name": "tapioca/arrowroot flour",
                      "nameClean": "arrowroot",
                      "original": "1 cup tapioca/arrowroot flour",
                      "originalName": "tapioca/arrowroot flour",
                      "amount": 1.0,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "cup",
                              "unitLong": "cup"
                          },
                          "metric": {
                              "amount": 128.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 12118,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "coconut-milk.png",
                      "consistency": "LIQUID",
                      "name": "nut/hemp/coconut milk",
                      "nameClean": "coconut milk",
                      "original": "1 cup nut/hemp/coconut milk",
                      "originalName": "nut/hemp/coconut milk",
                      "amount": 1.0,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "cup",
                              "unitLong": "cup"
                          },
                          "metric": {
                              "amount": 226.0,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 18369,
                      "aisle": "Baking",
                      "image": "white-powder.jpg",
                      "consistency": "SOLID",
                      "name": "baking powder",
                      "nameClean": "baking powder",
                      "original": "1 tsp. baking powder",
                      "originalName": "baking powder",
                      "amount": 1.0,
                      "unit": "tsp",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 93813,
                      "aisle": "Gourmet",
                      "image": "molasses.jpg",
                      "consistency": "SOLID",
                      "name": "vanilla bean paste/extract",
                      "nameClean": "vanilla paste",
                      "original": "1 tsp. vanilla bean paste/extract",
                      "originalName": "vanilla bean paste/extract",
                      "amount": 1.0,
                      "unit": "tsp",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 1012047,
                      "aisle": "Spices and Seasonings",
                      "image": "salt.jpg",
                      "consistency": "SOLID",
                      "name": "himalayan sea salt",
                      "nameClean": "coarse sea salt",
                      "original": "Pinch Himalayan sea salt",
                      "originalName": "Pinch Himalayan sea salt",
                      "amount": 1.0,
                      "unit": "pinch",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "pinch",
                              "unitLong": "pinch"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "pinch",
                              "unitLong": "pinch"
                          }
                      }
                  },
                  {
                      "id": 9050,
                      "aisle": "Produce",
                      "image": "blueberries.jpg",
                      "consistency": "SOLID",
                      "name": "blueberries",
                      "nameClean": "blueberries",
                      "original": "Handful frozen blueberries",
                      "originalName": "frozen blueberries",
                      "amount": 1.0,
                      "unit": "Handful",
                      "meta": [
                          "frozen"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "Handful",
                              "unitLong": "Handful"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "Handful",
                              "unitLong": "Handful"
                          }
                      }
                  },
                  {
                      "id": 98846,
                      "aisle": "Health Foods",
                      "image": "cacao-nibs.png",
                      "consistency": "SOLID",
                      "name": "cacao nibs",
                      "nameClean": "cocoa nibs",
                      "original": "Handful organic cacao nibs",
                      "originalName": "organic cacao nibs",
                      "amount": 1.0,
                      "unit": "Handful",
                      "meta": [
                          "organic"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "Handful",
                              "unitLong": "Handful"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "Handful",
                              "unitLong": "Handful"
                          }
                      }
                  },
                  {
                      "id": 19904,
                      "aisle": "Sweet Snacks",
                      "image": "dark-chocolate-pieces.jpg",
                      "consistency": "SOLID",
                      "name": "chocolate",
                      "nameClean": "dark chocolate",
                      "original": "Handful of dark chocolate, roughly chopped",
                      "originalName": "dark chocolate, roughly chopped",
                      "amount": 1.0,
                      "unit": "Handful",
                      "meta": [
                          "dark",
                          "roughly chopped"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "Handful",
                              "unitLong": "Handful"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "Handful",
                              "unitLong": "Handful"
                          }
                      }
                  }
              ],
              "id": 1100990,
              "title": "Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan",
              "readyInMinutes": 30,
              "servings": 2,
              "sourceUrl": "https://www.foodista.com/recipe/35NX6PZB/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan",
              "image": "https://spoonacular.com/recipeImages/1100990-556x370.jpg",
              "imageType": "jpg",
              "summary": "Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan takes about <b>30 minutes</b> from beginning to end. This recipe serves 2 and costs $2.94 per serving. One portion of this dish contains around <b>13g of protein</b>, <b>43g of fat</b>, and a total of <b>775 calories</b>. This recipe is liked by 15 foodies and cooks. Head to the store and pick up cacao nibs, himalayan sea salt, tapioca/arrowroot flour, and a few other things to make it today. It works well as a breakfast. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 66%</b>, which is good. Similar recipes include <a href=\"https://spoonacular.com/recipes/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan-1403565\">Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan</a>, <a href=\"https://spoonacular.com/recipes/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan-1394639\">Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan</a>, and <a href=\"https://spoonacular.com/recipes/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan-1386631\">Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan</a>.",
              "cuisines": [],
              "dishTypes": [
                  "morning meal",
                  "brunch",
                  "breakfast"
              ],
              "diets": [
                  "gluten free",
                  "dairy free",
                  "paleolithic",
                  "lacto ovo vegetarian",
                  "primal",
                  "fodmap friendly",
                  "vegan"
              ],
              "occasions": [],
              "instructions": "<ol><li>Combine the almond, coconut, tapioca/arrowroot flour, baking powder, sugar and salt together and mix all the ingredients well before adding the milk and paste/extract and ensuring that all of the ingredients are whisked together to form a smooth batter.</li><li>Allow to sit for approximately 10-15 minutes.</li><li>Heat a small amount of coconut oil into a frying pan/skillet and pour a small enough amount of the batter into the middle of the pan.</li><li>Allow the batter to cook sufficiently for a few minutes (the edges should start to brown and the top of the batter should start to bubble) on one side before sprinkling on a few blueberries and flipping the pancake over to cook on the other side.</li><li>Immediately sprinkle on some of the cacao nibs and dark chocolate on top and continue to cook thoroughly for a few minutes before removing the pancake and setting aside.</li><li>Repeat with the remaining batter until finished.</li><li>Pour over the agave, give thanks and enjoy!</li></ol>",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "Combine the almond, coconut, tapioca/arrowroot flour, baking powder, sugar and salt together and mix all the ingredients well before adding the milk and paste/extract and ensuring that all of the ingredients are whisked together to form a smooth batter.Allow to sit for approximately 10-15 minutes.",
                              "ingredients": [
                                  {
                                      "id": 20003,
                                      "name": "arrowroot",
                                      "localizedName": "arrowroot",
                                      "image": "white-powder.jpg"
                                  },
                                  {
                                      "id": 18369,
                                      "name": "baking powder",
                                      "localizedName": "baking powder",
                                      "image": "white-powder.jpg"
                                  },
                                  {
                                      "id": 12104,
                                      "name": "coconut",
                                      "localizedName": "coconut",
                                      "image": "coconut.jpg"
                                  },
                                  {
                                      "id": 0,
                                      "name": "extract",
                                      "localizedName": "extract",
                                      "image": ""
                                  },
                                  {
                                      "id": 20068,
                                      "name": "tapioca",
                                      "localizedName": "tapioca",
                                      "image": "sago-pearls.png"
                                  },
                                  {
                                      "id": 12061,
                                      "name": "almonds",
                                      "localizedName": "almonds",
                                      "image": "almonds.jpg"
                                  },
                                  {
                                      "id": 19335,
                                      "name": "sugar",
                                      "localizedName": "sugar",
                                      "image": "sugar-in-bowl.png"
                                  },
                                  {
                                      "id": 1077,
                                      "name": "milk",
                                      "localizedName": "milk",
                                      "image": "milk.png"
                                  },
                                  {
                                      "id": 2047,
                                      "name": "salt",
                                      "localizedName": "salt",
                                      "image": "salt.jpg"
                                  }
                              ],
                              "equipment": [],
                              "length": {
                                  "number": 15,
                                  "unit": "minutes"
                              }
                          },
                          {
                              "number": 2,
                              "step": "Heat a small amount of coconut oil into a frying pan/skillet and pour a small enough amount of the batter into the middle of the pan.Allow the batter to cook sufficiently for a few minutes (the edges should start to brown and the top of the batter should start to bubble) on one side before sprinkling on a few blueberries and flipping the pancake over to cook on the other side.Immediately sprinkle on some of the cacao nibs and dark chocolate on top and continue to cook thoroughly for a few minutes before removing the pancake and setting aside.Repeat with the remaining batter until finished.",
                              "ingredients": [
                                  {
                                      "id": 19904,
                                      "name": "dark chocolate",
                                      "localizedName": "dark chocolate",
                                      "image": "dark-chocolate-pieces.jpg"
                                  },
                                  {
                                      "id": 9050,
                                      "name": "blueberries",
                                      "localizedName": "blueberries",
                                      "image": "blueberries.jpg"
                                  },
                                  {
                                      "id": 4047,
                                      "name": "coconut oil",
                                      "localizedName": "coconut oil",
                                      "image": "oil-coconut.jpg"
                                  },
                                  {
                                      "id": 98846,
                                      "name": "cocoa nibs",
                                      "localizedName": "cocoa nibs",
                                      "image": "cacao-nibs.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404645,
                                      "name": "frying pan",
                                      "localizedName": "frying pan",
                                      "image": "pan.png"
                                  }
                              ]
                          },
                          {
                              "number": 3,
                              "step": "Pour over the agave, give thanks and enjoy!",
                              "ingredients": [
                                  {
                                      "id": 19912,
                                      "name": "agave",
                                      "localizedName": "agave",
                                      "image": "agave.png"
                                  }
                              ],
                              "equipment": []
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan-1100990"
          },
          {
              "vegetarian": true,
              "vegan": false,
              "glutenFree": true,
              "dairyFree": false,
              "veryHealthy": true,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": false,
              "weightWatcherSmartPoints": 12,
              "gaps": "no",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 2,
              "healthScore": 63,
              "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              "license": "CC BY 3.0",
              "sourceName": "Foodista",
              "pricePerServing": 91.67,
              "extendedIngredients": [
                  {
                      "id": 9236,
                      "aisle": "Produce",
                      "image": "peach.png",
                      "consistency": "SOLID",
                      "name": "peaches",
                      "nameClean": "peach",
                      "original": "1/4 cup frozen peaches",
                      "originalName": "frozen peaches",
                      "amount": 0.25,
                      "unit": "cup",
                      "meta": [
                          "frozen"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.25,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 38.5,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 8402,
                      "aisle": "Cereal",
                      "image": "rolled-oats.jpg",
                      "consistency": "SOLID",
                      "name": "cooking oats",
                      "nameClean": "quick cooking oats",
                      "original": "cup quick cooking oats",
                      "originalName": "quick cooking oats",
                      "amount": 1.0,
                      "unit": "cup",
                      "meta": [
                          "quick"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "cup",
                              "unitLong": "cup"
                          },
                          "metric": {
                              "amount": 81.081,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 1085,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "milk.jpg",
                      "consistency": "LIQUID",
                      "name": "non-fat milk",
                      "nameClean": "fat free milk",
                      "original": "1/2 cup non-fat milk",
                      "originalName": "non-fat milk",
                      "amount": 0.5,
                      "unit": "cup",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "cups",
                              "unitLong": "cups"
                          },
                          "metric": {
                              "amount": 122.5,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 43274,
                      "aisle": "Cheese",
                      "image": "cream-cheese.jpg",
                      "consistency": "SOLID",
                      "name": "cream cheese",
                      "nameClean": "reduced fat cream cheese",
                      "original": "2 teaspoons low fat cream cheese",
                      "originalName": "low fat cream cheese",
                      "amount": 2.0,
                      "unit": "teaspoons",
                      "meta": [
                          "low fat"
                      ],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 19912,
                      "aisle": "Ethnic Foods",
                      "image": "agave.png",
                      "consistency": "LIQUID",
                      "name": "agave",
                      "nameClean": "agave",
                      "original": "1 teaspoon agave",
                      "originalName": "agave",
                      "amount": 1.0,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "tsp",
                              "unitLong": "teaspoon"
                          }
                      }
                  },
                  {
                      "id": 2010,
                      "aisle": "Spices and Seasonings",
                      "image": "cinnamon.jpg",
                      "consistency": "SOLID",
                      "name": "cinnamon",
                      "nameClean": "cinnamon",
                      "original": "1/2 teaspoon cinnamon",
                      "originalName": "cinnamon",
                      "amount": 0.5,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 0.5,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  }
              ],
              "id": 655186,
              "title": "Peaches And Cream Oatmeal",
              "readyInMinutes": 45,
              "servings": 1,
              "sourceUrl": "https://www.foodista.com/recipe/NCSDKYN6/peaches-and-cream-oatmeal",
              "image": "https://spoonacular.com/recipeImages/655186-556x370.jpg",
              "imageType": "jpg",
              "summary": "If you have roughly <b>45 minutes</b> to spend in the kitchen, Peaches And Cream Oatmeal might be a great <b>gluten free and lacto ovo vegetarian</b> recipe to try. This recipe serves 1 and costs 92 cents per serving. One serving contains <b>408 calories</b>, <b>16g of protein</b>, and <b>7g of fat</b>. 2 people have made this recipe and would make it again. It works well as a breakfast. Head to the store and pick up cream cheese, cinnamon, non-fat milk, and a few other things to make it today. It is brought to you by Foodista. With a spoonacular <b>score of 87%</b>, this dish is super. Similar recipes include <a href=\"https://spoonacular.com/recipes/peaches-and-cream-oatmeal-543888\">Peaches and Cream Oatmeal</a>, <a href=\"https://spoonacular.com/recipes/peaches-and-cream-oatmeal-1374267\">Peaches And Cream Oatmeal</a>, and <a href=\"https://spoonacular.com/recipes/peaches-coconut-cream-oatmeal-1615501\">Peaches & Coconut Cream Oatmeal</a>.",
              "cuisines": [],
              "dishTypes": [
                  "morning meal",
                  "brunch",
                  "breakfast"
              ],
              "diets": [
                  "gluten free",
                  "lacto ovo vegetarian"
              ],
              "occasions": [],
              "instructions": "Microwave the peaches for 30 seconds.\nAdd oats, milk, cream cheese, agave and cinnamon.  Microwave for 1 minute, stir, and enjoy!",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "Microwave the peaches for 30 seconds.",
                              "ingredients": [
                                  {
                                      "id": 9236,
                                      "name": "peach",
                                      "localizedName": "peach",
                                      "image": "peach.png"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404762,
                                      "name": "microwave",
                                      "localizedName": "microwave",
                                      "image": "microwave.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 2,
                              "step": "Add oats, milk, cream cheese, agave and cinnamon.  Microwave for 1 minute, stir, and enjoy!",
                              "ingredients": [
                                  {
                                      "id": 1017,
                                      "name": "cream cheese",
                                      "localizedName": "cream cheese",
                                      "image": "cream-cheese.jpg"
                                  },
                                  {
                                      "id": 2010,
                                      "name": "cinnamon",
                                      "localizedName": "cinnamon",
                                      "image": "cinnamon.jpg"
                                  },
                                  {
                                      "id": 19912,
                                      "name": "agave",
                                      "localizedName": "agave",
                                      "image": "agave.png"
                                  },
                                  {
                                      "id": 1077,
                                      "name": "milk",
                                      "localizedName": "milk",
                                      "image": "milk.png"
                                  },
                                  {
                                      "id": 8120,
                                      "name": "oats",
                                      "localizedName": "oats",
                                      "image": "rolled-oats.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404762,
                                      "name": "microwave",
                                      "localizedName": "microwave",
                                      "image": "microwave.jpg"
                                  }
                              ],
                              "length": {
                                  "number": 1,
                                  "unit": "minutes"
                              }
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/peaches-and-cream-oatmeal-655186"
          },
          {
              "vegetarian": false,
              "vegan": false,
              "glutenFree": false,
              "dairyFree": false,
              "veryHealthy": false,
              "cheap": false,
              "veryPopular": false,
              "sustainable": false,
              "lowFodmap": false,
              "weightWatcherSmartPoints": 11,
              "gaps": "no",
              "preparationMinutes": -1,
              "cookingMinutes": -1,
              "aggregateLikes": 2,
              "healthScore": 6,
              "creditsText": "foodista.com",
              "sourceName": "foodista.com",
              "pricePerServing": 54.49,
              "extendedIngredients": [
                  {
                      "id": 1001,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "butter-sliced.jpg",
                      "consistency": "SOLID",
                      "name": "butter",
                      "nameClean": "butter",
                      "original": "100 grams Cold butter",
                      "originalName": "Cold butter",
                      "amount": 100.0,
                      "unit": "grams",
                      "meta": [
                          "cold"
                      ],
                      "measures": {
                          "us": {
                              "amount": 3.527,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 100.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 1009,
                      "aisle": "Cheese",
                      "image": "cheddar-cheese.png",
                      "consistency": "SOLID",
                      "name": "cheddar cheese",
                      "nameClean": "cheddar cheese",
                      "original": "50 grams Cheddar cheese- grated",
                      "originalName": "Cheddar cheese- grated",
                      "amount": 50.0,
                      "unit": "grams",
                      "meta": [
                          "grated"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.764,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 50.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 1123,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "egg.png",
                      "consistency": "SOLID",
                      "name": "eggs",
                      "nameClean": "egg",
                      "original": "2 Large eggs",
                      "originalName": "Large eggs",
                      "amount": 2.0,
                      "unit": "",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.0,
                              "unitShort": "",
                              "unitLong": ""
                          },
                          "metric": {
                              "amount": 2.0,
                              "unitShort": "",
                              "unitLong": ""
                          }
                      }
                  },
                  {
                      "id": 10151,
                      "aisle": "Meat",
                      "image": "ham-whole.jpg",
                      "consistency": "SOLID",
                      "name": "picnic ham",
                      "nameClean": "ham",
                      "original": "125 grams Chicken or Picnic Ham (shredded)",
                      "originalName": "Chicken or Picnic Ham (shredded)",
                      "amount": 125.0,
                      "unit": "grams",
                      "meta": [
                          "shredded",
                          "()"
                      ],
                      "measures": {
                          "us": {
                              "amount": 4.409,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 125.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 14412,
                      "aisle": "Beverages",
                      "image": "water.png",
                      "consistency": "LIQUID",
                      "name": "ice water",
                      "nameClean": "water",
                      "original": "5 tablespoons Ice water",
                      "originalName": "Ice water",
                      "amount": 5.0,
                      "unit": "tablespoons",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 5.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          },
                          "metric": {
                              "amount": 5.0,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          }
                      }
                  },
                  {
                      "id": 1077,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "milk.png",
                      "consistency": "LIQUID",
                      "name": "milk",
                      "nameClean": "milk",
                      "original": "80 milliliters milk",
                      "originalName": "milk",
                      "amount": 80.0,
                      "unit": "milliliters",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.79,
                              "unitShort": "fl. oz",
                              "unitLong": "fl. ozs"
                          },
                          "metric": {
                              "amount": 80.0,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  },
                  {
                      "id": 2032,
                      "aisle": "Spices and Seasonings",
                      "image": "white-pepper.png",
                      "consistency": "SOLID",
                      "name": "pepper",
                      "nameClean": "white pepper",
                      "original": "dash of white pepper",
                      "originalName": "white pepper",
                      "amount": 1.0,
                      "unit": "dash",
                      "meta": [
                          "white"
                      ],
                      "measures": {
                          "us": {
                              "amount": 1.0,
                              "unitShort": "dash",
                              "unitLong": "dash"
                          },
                          "metric": {
                              "amount": 1.0,
                              "unitShort": "dash",
                              "unitLong": "dash"
                          }
                      }
                  },
                  {
                      "id": 20081,
                      "aisle": "Baking",
                      "image": "flour.png",
                      "consistency": "SOLID",
                      "name": "flour",
                      "nameClean": "wheat flour",
                      "original": "200 grams Plain flour",
                      "originalName": "Plain flour",
                      "amount": 200.0,
                      "unit": "grams",
                      "meta": [
                          "plain"
                      ],
                      "measures": {
                          "us": {
                              "amount": 7.055,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 200.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 2047,
                      "aisle": "Spices and Seasonings",
                      "image": "salt.jpg",
                      "consistency": "SOLID",
                      "name": "salt",
                      "nameClean": "table salt",
                      "original": "1/8 teaspoon salt",
                      "originalName": "salt",
                      "amount": 0.125,
                      "unit": "teaspoon",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 0.125,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          },
                          "metric": {
                              "amount": 0.125,
                              "unitShort": "tsps",
                              "unitLong": "teaspoons"
                          }
                      }
                  },
                  {
                      "id": 11677,
                      "aisle": "Produce",
                      "image": "shallots.jpg",
                      "consistency": "SOLID",
                      "name": "shallots",
                      "nameClean": "shallot",
                      "original": "1/2 tablespoon Shallots (sliced)",
                      "originalName": "Shallots (sliced)",
                      "amount": 0.5,
                      "unit": "tablespoon",
                      "meta": [
                          "sliced",
                          "()"
                      ],
                      "measures": {
                          "us": {
                              "amount": 0.5,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          },
                          "metric": {
                              "amount": 0.5,
                              "unitShort": "Tbsps",
                              "unitLong": "Tbsps"
                          }
                      }
                  },
                  {
                      "id": 10011457,
                      "aisle": "Produce",
                      "image": "spinach.jpg",
                      "consistency": "SOLID",
                      "name": "spinach",
                      "nameClean": "spinach",
                      "original": "125 grams Spinach (wash& drain well, shredded)",
                      "originalName": "Spinach (wash& drain well, shredded)",
                      "amount": 125.0,
                      "unit": "grams",
                      "meta": [
                          "shredded",
                          "well",
                          "(wash& drain , )"
                      ],
                      "measures": {
                          "us": {
                              "amount": 4.409,
                              "unitShort": "oz",
                              "unitLong": "ounces"
                          },
                          "metric": {
                              "amount": 125.0,
                              "unitShort": "g",
                              "unitLong": "grams"
                          }
                      }
                  },
                  {
                      "id": 1001053,
                      "aisle": "Milk, Eggs, Other Dairy",
                      "image": "fluid-cream.jpg",
                      "consistency": "LIQUID",
                      "name": "whipping cream",
                      "nameClean": "whipping cream",
                      "original": "80 milliliters Whipping cream",
                      "originalName": "Whipping cream",
                      "amount": 80.0,
                      "unit": "milliliters",
                      "meta": [],
                      "measures": {
                          "us": {
                              "amount": 2.722,
                              "unitShort": "fl. oz",
                              "unitLong": "fl. ozs"
                          },
                          "metric": {
                              "amount": 80.0,
                              "unitShort": "ml",
                              "unitLong": "milliliters"
                          }
                      }
                  }
              ],
              "id": 661249,
              "title": "Spinach & Ham Quiche",
              "readyInMinutes": 45,
              "servings": 8,
              "sourceUrl": "http://www.foodista.com/recipe/Z7KLXBR8/spinach-ham-quiche",
              "image": "https://spoonacular.com/recipeImages/661249-556x370.jpg",
              "imageType": "jpg",
              "summary": "You can never have too many hor d'oeuvre recipes, so give Spinach & Ham Quiche a try. This recipe serves 8 and costs 54 cents per serving. One portion of this dish contains about <b>10g of protein</b>, <b>20g of fat</b>, and a total of <b>305 calories</b>. It is brought to you by Foodista. This recipe is liked by 2 foodies and cooks. It is a <b>very affordable</b> recipe for fans of Mediterranean food. If you have salt, cheddar cheese, pepper, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 42%</b>, which is pretty good. <a href=\"https://spoonacular.com/recipes/ham-spinach-and-gruyre-quiche-78505\">Ham Spinach And Gruyére Quiche</a>, <a href=\"https://spoonacular.com/recipes/ham-swiss-and-spinach-quiche-78594\">Ham, Swiss and Spinach Quiche</a>, and <a href=\"https://spoonacular.com/recipes/ham-and-cheese-quiche-with-spinach-799169\">Ham and Cheese Quiche with Spinach</a> are very similar to this recipe.",
              "cuisines": [
                  "Mediterranean",
                  "French",
                  "European"
              ],
              "dishTypes": [
                  "antipasti",
                  "morning meal",
                  "starter",
                  "brunch",
                  "snack",
                  "appetizer",
                  "breakfast",
                  "antipasto",
                  "hor d'oeuvre"
              ],
              "diets": [],
              "occasions": [],
              "instructions": "<ol><li>With little oil, fry shallot till fragrant and golden brown.</li><li>Add ham fry for a while and add spinach and fry till spinach cooked, dish up and set aside.</li><li>Measure whipping cream and milk together in measuring cup (you can omit whipping cream and use all 160ml milk) add eggs, lightly beaten and pinch of salt, mix well.</li><li>Spread ham spinach and cheddar cheese evenly over the bottom of the prepared tart pan, add a dash of pepper then gently pour egg mixture over it.</li><li>Bake at preheated 180C for 40 mins and serve hot or warm.</li></ol>",
              "analyzedInstructions": [
                  {
                      "name": "",
                      "steps": [
                          {
                              "number": 1,
                              "step": "With little oil, fry shallot till fragrant and golden brown.",
                              "ingredients": [
                                  {
                                      "id": 11677,
                                      "name": "shallot",
                                      "localizedName": "shallot",
                                      "image": "shallots.jpg"
                                  },
                                  {
                                      "id": 4582,
                                      "name": "cooking oil",
                                      "localizedName": "cooking oil",
                                      "image": "vegetable-oil.jpg"
                                  }
                              ],
                              "equipment": []
                          },
                          {
                              "number": 2,
                              "step": "Add ham fry for a while and add spinach and fry till spinach cooked, dish up and set aside.Measure whipping cream and milk together in measuring cup (you can omit whipping cream and use all 160ml milk) add eggs, lightly beaten and pinch of salt, mix well.",
                              "ingredients": [
                                  {
                                      "id": 1001053,
                                      "name": "whipping cream",
                                      "localizedName": "whipping cream",
                                      "image": "fluid-cream.jpg"
                                  },
                                  {
                                      "id": 10011457,
                                      "name": "spinach",
                                      "localizedName": "spinach",
                                      "image": "spinach.jpg"
                                  },
                                  {
                                      "id": 1123,
                                      "name": "egg",
                                      "localizedName": "egg",
                                      "image": "egg.png"
                                  },
                                  {
                                      "id": 1077,
                                      "name": "milk",
                                      "localizedName": "milk",
                                      "image": "milk.png"
                                  },
                                  {
                                      "id": 2047,
                                      "name": "salt",
                                      "localizedName": "salt",
                                      "image": "salt.jpg"
                                  },
                                  {
                                      "id": 10151,
                                      "name": "ham",
                                      "localizedName": "ham",
                                      "image": "ham-whole.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 404766,
                                      "name": "measuring cup",
                                      "localizedName": "measuring cup",
                                      "image": "measuring-cup.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 3,
                              "step": "Spread ham spinach and cheddar cheese evenly over the bottom of the prepared tart pan, add a dash of pepper then gently pour egg mixture over it.",
                              "ingredients": [
                                  {
                                      "id": 1009,
                                      "name": "cheddar cheese",
                                      "localizedName": "cheddar cheese",
                                      "image": "cheddar-cheese.png"
                                  },
                                  {
                                      "id": 10011457,
                                      "name": "spinach",
                                      "localizedName": "spinach",
                                      "image": "spinach.jpg"
                                  },
                                  {
                                      "id": 1002030,
                                      "name": "pepper",
                                      "localizedName": "pepper",
                                      "image": "pepper.jpg"
                                  },
                                  {
                                      "id": 0,
                                      "name": "spread",
                                      "localizedName": "spread",
                                      "image": ""
                                  },
                                  {
                                      "id": 1123,
                                      "name": "egg",
                                      "localizedName": "egg",
                                      "image": "egg.png"
                                  },
                                  {
                                      "id": 10151,
                                      "name": "ham",
                                      "localizedName": "ham",
                                      "image": "ham-whole.jpg"
                                  }
                              ],
                              "equipment": [
                                  {
                                      "id": 406922,
                                      "name": "tart form",
                                      "localizedName": "tart form",
                                      "image": "tart-pan.jpg"
                                  }
                              ]
                          },
                          {
                              "number": 4,
                              "step": "Bake at preheated 180C for 40 mins and serve hot or warm.",
                              "ingredients": [],
                              "equipment": [
                                  {
                                      "id": 404784,
                                      "name": "oven",
                                      "localizedName": "oven",
                                      "image": "oven.jpg",
                                      "temperature": {
                                          "number": 180.0,
                                          "unit": "Celsius"
                                      }
                                  }
                              ],
                              "length": {
                                  "number": 40,
                                  "unit": "minutes"
                              }
                          }
                      ]
                  }
              ],
              "originalId": null,
              "spoonacularSourceUrl": "https://spoonacular.com/spinach-ham-quiche-661249"
          }
      ]
  )
  }
}