const deleteFromHistory = (data, drinkId) => {
    if (data.length > 1) {
        return data.filter((drink) => drink.drinkId !== drinkId)
    }
    return data
}

export default deleteFromHistory
