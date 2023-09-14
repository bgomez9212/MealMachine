import { useState, useEffect } from 'react';
import axios from 'axios';

function Homepage( { loader, ingredientsList }) {
  const [dinners, setDinners] = useState([]);
  const [lunches, setLunches] = useState([]);
  const [breakfast, setBreakfast] = useState([]);

  useEffect(() => {
    axios.get('/api/dinners', {
      params: {
        ingredients: ingredientsList
      }
    })
      .then((results) => setDinners(results.data))
      .catch((err) => console.log(err))
  },[ingredientsList])


  useEffect(() => {
    axios.get('/api/lunches')
      .then((results) => setLunches(results.data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('/api/breakfast')
      .then((results) => setBreakfast(results.data))
      .catch((err) => console.log(err))
  }, [])

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

  return (
    <div>
      <h1 style={{'textAlign': 'center'}}>DINNERS</h1>
      <div className="homepage-row">
        {dinners.slice(0, 3).map((dinner) => (
          <div className='dishcard' key={dinner.id}>
            <img src={dinner.image}/>
            <section>
              <h3>{dinner.title}</h3>
              <div className='card-btns'>
                <a href='#'>Show Recipe</a>
                <button value={JSON.stringify(dinner)} onClick={(e)=>addRecipe(e.target.value)}>Save Recipe</button>
              </div>
            </section>
          </div>
        ))}
      </div>
      <div className="homepage-row">
        {dinners.slice(3, 6).map((dinner) => (
            <div className='dishcard' key={dinner.id}>
              <img src={dinner.image}/>
              <section>
                <h3>{dinner.title}</h3>
                <div className='card-btns'>
                  <a href='#'>Show Recipe</a>
                  <button value={JSON.stringify(dinner)} onClick={(e)=>addRecipe(e.target.value)}>Save Recipe</button>
                </div>
              </section>
            </div>
          ))}
      </div>

      <h1 style={{'textAlign': 'center'}}>LUNCHES</h1>
      <div className="homepage-row">
        {lunches.slice(0, 3).map((dinner) => (
            <div className='dishcard' key={dinner.id}>
              <img src={dinner.image}/>
              <section>
                <h3>{dinner.title}</h3>
                <div className='card-btns'>
                  <a href='#'>Show Recipe</a>
                  <button value={JSON.stringify(dinner)} onClick={(e)=>addRecipe(e.target.value)}>Save Recipe</button>
                </div>
              </section>
            </div>
          ))}
      </div>
      <div className="homepage-row">
        {lunches.slice(3, 6).map((dinner) => (
            <div className='dishcard' key={dinner.id}>
              <img src={dinner.image}/>
              <section>
                <h3>{dinner.title}</h3>
                <div className='card-btns'>
                  <a href='#'>Show Recipe</a>
                  <button value={JSON.stringify(dinner)} onClick={(e)=>addRecipe(e.target.value)}>Save Recipe</button>
                </div>
              </section>
            </div>
          ))}
      </div>

      <h1 style={{'textAlign': 'center'}}>BREAKFAST</h1>
      <div className="homepage-row">
        {breakfast.slice(0, 3).map((dinner) => (
            <div className='dishcard' key={dinner.id}>
              <img src={dinner.image}/>
              <section>
                <h3>{dinner.title}</h3>
                <div className='card-btns'>
                  <a href='#'>Show Recipe</a>
                  <button value={JSON.stringify(dinner)} onClick={(e)=>addRecipe(e.target.value)}>Save Recipe</button>
                </div>
              </section>
            </div>
          ))}
      </div>
      <div className="homepage-row">
        {breakfast.slice(3, 6).map((dinner) => (
            <div className='dishcard' key={dinner.id}>
              <img src={dinner.image}/>
              <section>
                <h3>{dinner.title}</h3>
                <div className='card-btns'>
                  <a href='#'>Show Recipe</a>
                  <button value={JSON.stringify(dinner)} onClick={(e)=>addRecipe(e.target.value)}>Save Recipe</button>
                </div>
              </section>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Homepage