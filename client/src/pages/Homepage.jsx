import { useState, useEffect } from 'react';
import Modal from '../components/Modal.jsx'
import axios from 'axios';
import { Link } from 'react-router-dom'

function Homepage({ loader, recipeList }) {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [missingIngredients, setMissingIngredients] = useState([])
  const addRecipe = function(recipe) {
    recipe = JSON.parse(recipe)
    const {id, title, image, imageType} = recipe
    axios.post('/api/savedRecipes', {
      params: {
        id: id,
        title: title,
        image: image,
        imageType: imageType
      }
    })
    loader()
  }
  const handleClick = function(ingredient) {
    axios.post('/api/groceries', {
      params: {
        groceries: [ingredient]
      }
    })
    loader()
  }

  function passToModal(missingIngredientsArr) {
    setModalVisibility(true)
    setMissingIngredients(JSON.parse(missingIngredientsArr))
  }
  console.log(missingIngredients)
  return (
    <div>
      <h1 style={{'textAlign': 'center'}}>WHAT CAN YOU MAKE?</h1>
      {recipeList ? <div className="homepage-row">
        {recipeList.map((recipe) => (
          <div className='dishcard' key={recipe.id}>
            <img src={recipe.image}/>
            <section>
              <h3>{recipe.title}</h3>
              <div className='missing-ingredients'>
                <p>{`Number of Missing Ingredients: ${recipe.missedIngredientCount}`}</p>
                <button
                  value={JSON.stringify(recipe.missedIngredients)}
                  onClick={(e) => passToModal(e.target.value)}
                >Show Missing Ingredients
                </button>
              </div>
              <div className='card-btns'>
                <Link to={`/recipe/${recipe.id}`}>Show Recipe</Link>
                <button value={JSON.stringify(recipe)} onClick={(e) => addRecipe(e.target.value)}>Save Recipe</button>
              </div>
            </section>
          </div>
        ))}
        {modalVisibility &&
        <div className='modal'>
          <div className='missing-ingredient-modal'>
          <h1>MISSING INGREDIENTS</h1>
          {missingIngredients.map((ingredient) => (
            <div className='ingredient' key={ingredient.key}>
              <p>{ingredient.name}</p>
              <button onClick={(e) => handleClick(e.target.value)} className="groceryBtn" value={ingredient.name}>{`Add ${ingredient.name} to Grocery List`}</button>
            </div>
              ))}
          <button onClick={() => setModalVisibility(false)}>Close</button>
          </div>
        </div>}
      </div>  : <h1>LOADING...</h1> }
    </div>
  )
}
export default Homepage