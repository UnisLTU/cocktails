import axios from 'axios'

const fetchDrinks = async (endPoint) => {
    const result = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${endPoint}`)
    return result
}

export default fetchDrinks
