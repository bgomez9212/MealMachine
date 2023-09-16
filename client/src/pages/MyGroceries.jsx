import axios from 'axios'
import { useEffect, useState } from 'react'

function MyGroceries( { loader, groceriesList }) {
  const [groceries, setGroceries] = useState('')

  const handleChange = function(event) {
    setGroceries(event)
  }

  const handleClick = function() {
    axios.post('/api/groceries', {
      params: {
        groceries: groceries.split(',').map((el) => el.trim())
      }
    })
    loader()
  }
  const handleDelete = function(groceryId) {
    axios.delete('/api/groceries', {
      data: {
        id: groceryId
      }
    })
    .then(() => loader())
  }
  const addToIngredients = function(grocery) {
    grocery = JSON.parse(grocery)
    axios.post('/api/savedIngredients', {
      params: {
        ingredients: [grocery.name]
      }
    })
    .then(
      axios.delete('api/groceries', {
        data: {
          id: grocery.id
        }
      })
    )
    loader()
  }

  return (
    <div className='ingredients-list'>
    <input
      className='addIngredient'
      type='text'
      placeholder='Enter groceries here, comma separated'
      onChange={(e) => handleChange(e.target.value)}
    />
    <button
      className='addIngredientBtn'
      onClick={handleClick}
    >Add ingredient</button>
    <h1>Your Groceries</h1>
    <ul>
      {groceriesList.map((grocery) => (
        <div className='entry' key={grocery._id}>
          <li>{grocery.name}</li>
          <div>
            <button
              value={JSON.stringify({name: grocery.name, id: grocery._id})} onClick={(e) => addToIngredients(e.target.value)}>Add to Ingredients</button>
            <button value={grocery._id} onClick={(e) => handleDelete(e.target.value)}>Remove</button>
          </div>
        </div>
      ))}
    </ul>
  </div>
  )
}

export default MyGroceries