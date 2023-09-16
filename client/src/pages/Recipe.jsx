import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Recipe() {
  const {id: recipeId} = useParams()
  const [recipe, setRecipe] = useState('')

  useEffect(() => {
    axios.get('/api/recipe', {
      params: {
        id: recipeId
      }
    })
      .then((results) => setRecipe(results.data))
  }, [recipeId])


  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} />
      <p>{recipe.summary}</p>
      <h5>Makes {recipe.servings} servings</h5>
      <h5>Ready in {recipe.readyInMinutes} minutes</h5>
      <div>
        <h3>Ingredients</h3>
        <ul>
          {recipe.extendedIngredients && recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.key}>{ingredient.original}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Instructions</h3>
        <ol>
          {recipe.analyzedInstructions && recipe.analyzedInstructions[0].steps.map((instruction) => (
            <li key={instruction.number}>{instruction.step}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Recipe