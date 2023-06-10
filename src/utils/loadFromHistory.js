const loadFromHistory = (data, idDrink) => {
    const drinkIndex = data.findIndex((drink) => drink.idDrink === idDrink)
    const updatedData = [...data]
    const [drinkToMove] = updatedData.splice(drinkIndex, 1)
    updatedData.unshift(drinkToMove)
    return updatedData
}

export default loadFromHistory
