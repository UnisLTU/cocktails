const initialDrinks = () => {
    const storedDrinks = JSON.parse(localStorage.getItem('drinks')) || []
    return storedDrinks
}
export default initialDrinks
