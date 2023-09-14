import { useState, useEffect } from 'react';
import Modal from '../components/Modal.jsx'
import axios from 'axios';
import { Link } from 'react-router-dom'

function Homepage({ loader, recipeList }) {
  const [modalVisibility, setModalVisibility] = useState(false)
  return (
    <div>
      <h1 style={{'textAlign': 'center'}}>WHAT CAN YOU MAKE?</h1>
      <div className="homepage-row">
        {recipeList.map((recipe) => (
          <div className='dishcard' key={recipe.id}>
            <img src={recipe.image}/>
            <section>
              <h3>{recipe.title}</h3>
              <div className='missing-ingredients'>
                <p>{`Number of Missing Ingredients: ${recipe.missedIngredientCount}`}</p>
                <button
                  value={JSON.stringify(recipe.missedIngredients)}
                  onClick={() => setModalVisibility(true)}
                >Show Missing Ingredients
                </button>
              </div>
              <div className='card-btns'>
                <Link to={`/recipe/${recipe.id}`}>Show Recipe</Link>
                <button value={JSON.stringify(recipe)}>Save Recipe</button>
              </div>
            </section>
            {modalVisibility &&
            <div className='modal'>
              <div className='missing-ingredient-modal'>
              <h1>MISSING INGREDIENTS</h1>
              {recipe.missedIngredients.map((ingredient) => (
                <div className='ingredient' key={ingredient.key}>
                  <p>{ingredient.name}</p>
                  <button value={ingredient.name}>{`Add ${ingredient.name} to Grocery List`}</button>
                </div>
                  ))}
              <button onClick={() => setModalVisibility(false)}>Close</button>
              </div>
            </div>}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Homepage