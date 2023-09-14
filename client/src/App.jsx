import axios from "axios"
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import MyRecipes from './pages/MyRecipes'
import MyIngredients from './pages/MyIngredients'
import BrowseRecipes from './pages/BrowseRecipes'
import Homepage from './pages/Homepage'


function App() {


  // const [popular, setPopular] = useState([])
  const [carouselPhotos, setCarouselPhotos] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [renderer, setRenderer] = useState(true)

  useEffect(() => {
    axios.get('/api/savedIngredients')
      .then((results) => setIngredientsList(results.data))
      .catch((err) => console.log(err))
  }, [renderer])

  const loader = function() {
    setRenderer(prev => !prev)
  }

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Homepage ingredientsList={ingredientsList}  />} />
          <Route path='/myrecipes' element={<MyRecipes ingredientsList={ingredientsList}/>} />
          <Route path='/myingredients' element={<MyIngredients ingredientsList={ingredientsList} loader={loader}/>} />
          <Route path='/browse' element={<BrowseRecipes/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App