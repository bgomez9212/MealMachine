import axios from "axios"
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import MyRecipes from './pages/MyRecipes'
import MyIngredients from './pages/MyIngredients'
import BrowseRecipes from './pages/BrowseRecipes'
import Homepage from './pages/Homepage'
import Recipe from './pages/Recipe'


function App() {
  // const [carouselPhotos, setCarouselPhotos] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [savedRecipeList, setSavedRecipeList] = useState([]);
  const [renderer, setRenderer] = useState(true);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    axios.get('/api/savedIngredients')
      .then((results) => setIngredientsList(results.data))
      .catch((err) => console.log(err))
  }, [renderer])

  useEffect(() => {
    axios.get('/api/savedRecipes')
      .then((results) => setSavedRecipeList(results.data))
      .catch((err) => console.log(err))
  }, [renderer])

  useEffect(() => {
    axios.get('/api/recipesByIngredients', {
      params: {
        ingredients: ingredientsList
      }
    })
    .then((results) => setRecipeList(results.data))
  },[ingredientsList])

  // console.log(recipeList)

  const loader = function() {
    setRenderer((prev) => (!prev))
  }

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Homepage ingredientsList={ingredientsList} loader={loader} recipeList={recipeList} />} />
          <Route path='/myrecipes' element={<MyRecipes savedRecipeList={savedRecipeList} loader={loader}/>} />
          <Route path='/myingredients' element={<MyIngredients ingredientsList={ingredientsList} loader={loader}/>} />
          <Route path='/browse' element={<BrowseRecipes ingredientsList={ingredientsList} loader={loader}/>} />
          <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
      </div>
    </div>
  )
}

export default App