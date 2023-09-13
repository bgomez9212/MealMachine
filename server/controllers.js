const axios = require('axios');
const { API } = process.env

module.exports = {
  getDinners: (req, res) => {
    // axios.get(`https://api.spoonacular.com/recipes/random?number=6&tags=dinner&apiKey=${API}`)
    //   .then(results => res.status(200).send(results.data))
    res.send('connected to the backend')
  }
}