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
  const [carouselPhotos, setCarouselPhotos] = useState([])

  // useEffect(() => {
  //   axios.get('https://api.spoonacular.com/recipes/random?number=6&tags=dinner&apiKey=433bf1970e46425f867c84140c43fc99')
  //     .then((results) => setPopular(results.data))
  //     .catch((err) => console.log(err))
  // }, [])

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/myrecipes' element={<MyRecipes/>} />
          <Route path='/myingredients' element={<MyIngredients/>} />
          <Route path='/browse' element={<BrowseRecipes/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App