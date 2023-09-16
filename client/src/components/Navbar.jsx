import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className='nav-left'>
      <div className='site-title'>
      <Link to='/'>
        MealMachine
      </Link>
      </div>
      <div className='links'>
        <Link to='/myrecipes'>My Recipes</Link>
        |
        <Link to='/myingredients'>My Ingredients</Link>
        |
        <Link to='/mygroceries'>My Grocery List</Link>
        |
        <Link to='/browse'>Browse</Link>
        </div>
      </div>
      <div className='nav-right'>
      <input type='text' />
      </div>
    </nav>
  )
}

export default Navbar