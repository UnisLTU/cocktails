const loadFromHistory = (data, drinkId) => {
    const drinkIndex = data.findIndex((drink) => drink.drinkId === drinkId)
    const updatedData = [...data]
    const [drinkToMove] = updatedData.splice(drinkIndex, 1)
    updatedData.unshift(drinkToMove)
    return updatedData
}

export default loadFromHistory
