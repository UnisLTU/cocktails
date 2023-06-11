import DUMMY_DATA from './dummy'

const initialDrinks = () => {
    const storedDrinks = JSON.parse(localStorage.getItem('drinks')) || DUMMY_DATA
    return storedDrinks
}
export default initialDrinks
