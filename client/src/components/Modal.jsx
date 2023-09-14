function Modal({ data }) {
  return (
    <div className='modal'>
      <div className='missing-ingredient-modal'>
        <h1>MISSING INGREDIENTS</h1>
        {data.missedIngredients.map((ingredient) => (
          <p key={ingredient.key}>{ingredient.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Modal