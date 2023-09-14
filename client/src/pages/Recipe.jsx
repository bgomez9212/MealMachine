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

  return (<h1>RECIPE PAGE</h1>)
}

export default Recipe