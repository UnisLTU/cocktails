import axios from 'axios'

const fetchDrinks = async (endPoint) =>
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${endPoint}`)

export default fetchDrinks
