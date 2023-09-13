import { useState, useEffect } from 'react';
import axios from 'axios';

function Homepage() {
  const [dinners, setDinners] = useState([]);
  const [lunches, setLunches] = useState([]);
  const [breakfast, setBreakfast] = useState([]);

  useEffect(() => {
    axios.get('https://api.spoonacular.com/recipes/random?number=6&tags=dinner&apiKey=433bf1970e46425f867c84140c43fc99')
      .then((results) => setDinners(results.data.recipes))
      .catch((err) => console.log(err))
  },[])
  console.log(dinners)
  return (
    <div>
      <h1 style={{'textAlign': 'center'}}>DINNERS</h1>
      <div className="homepage-row">
        {dinners.slice(0, 3).map((dinner) => (
          <div className='dishcard' key={dinner.id}>
            <img src={dinner.image}/>
            <h3>{dinner.title}</h3>
            <p>Description</p>
            <a href='#'>Link to Recipe</a>
          </div>
        ))}
      </div>
      <div className="homepage-row">
        {dinners.slice(3, 6).map((dinner) => (
          <div className='dishcard' key={dinner.id}>
            <img src={dinner.image}/>
            <h3>{dinner.title}</h3>
            <p>Description</p>
            <a href='#'>Link to Recipe</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Homepage