import axios from 'axios'
import { useState, useEffect } from 'react'

function MyRecipes({ loader, savedRecipeList }) {

  const removeRecipe = function(recipeId) {
    axios.delete('/api/savedRecipes', {
      data: {
        id: recipeId
      }
    })
    .then(() => loader())
  }

  return (
    <div>
        <div className="homepage-row">
        {savedRecipeList.map((recipe) => (
          <div className='dishcard' key={recipe.id}>
            <img src={recipe.image}/>
            <section>
              <h3>{recipe.title}</h3>
              <div className='card-btns'>
                <a href='#'>Show Recipe</a>
                <button value={recipe.id} onClick={(e) => removeRecipe(e.target.value)}>Remove Recipe</button>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyRecipes