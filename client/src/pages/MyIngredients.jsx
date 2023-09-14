import axios from 'axios';
import { useState } from 'react';
function MyIngredients({ ingredientsList, loader }) {
  const [ingredients, setIngredients] = useState('')
  const handleChange = function(event) {
    setIngredients(event)
  }
  const handleClick = function() {
    axios.post('/api/savedIngredients', {
      params: {
        ingredients: ingredients.split(',').map((el) => el.trim())
      }
    })
    loader()
  }
  const handleDelete = function(ingredientId) {
    axios.delete('/api/savedIngredients', {
      data: {
        id: ingredientId
      }
    })
    .then(() => loader())
  }

  return (
    <div className='ingredients-list'>
      <input
        className='addIngredient'
        type='text'
        placeholder='Enter ingredients here, comma separated'
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        className='addIngredientBtn'
        onClick={handleClick}
      >Add ingredient</button>
      <h1>Your ingredients</h1>
      <ul>
        {ingredientsList.map((ingredient) => (
          <div className='entry' key={ingredient._id}>
            <li>{ingredient.name}</li>
            <button value={ingredient._id} onClick={(e) => handleDelete(e.target.value)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default MyIngredients