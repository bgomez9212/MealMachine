import { useState, useEffect } from 'react';
import axios from 'axios';

function Homepage() {

  const [dinners, setDinners] = useState([]);
  const [lunches, setLunches] = useState([]);
  const [breakfast, setBreakfast] = useState([]);

  useEffect(() => {
    axios.get('/api/dinners')
      .then((results) => setDinners(results.data))
      .catch((err) => console.log(err))
  },[])

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
  console.log(breakfast)
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

      <h1 style={{'textAlign': 'center'}}>LUNCHES</h1>
      <div className="homepage-row">
        {lunches.slice(0, 3).map((dinner) => (
          <div className='dishcard' key={dinner.id}>
            <img src={dinner.image}/>
            <h3>{dinner.title}</h3>
            <p>Description</p>
            <a href='#'>Link to Recipe</a>
          </div>
        ))}
      </div>
      <div className="homepage-row">
        {lunches.slice(3, 6).map((dinner) => (
          <div className='dishcard' key={dinner.id}>
            <img src={dinner.image}/>
            <h3>{dinner.title}</h3>
            <p>Description</p>
            <a href='#'>Link to Recipe</a>
          </div>
        ))}
      </div>

      <h1 style={{'textAlign': 'center'}}>BREAKFAST</h1>
      <div className="homepage-row">
        {breakfast.slice(0, 3).map((dinner) => (
          <div className='dishcard' key={dinner.id}>
            <img src={dinner.image}/>
            <h3>{dinner.title}</h3>
            <p>Description</p>
            <a href='#'>Link to Recipe</a>
          </div>
        ))}
      </div>
      <div className="homepage-row">
        {breakfast.slice(3, 6).map((dinner) => (
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