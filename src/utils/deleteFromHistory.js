const deleteFromHistory = (data, idDrink) => {
    if (data.length > 1) {
        return data.filter((drink) => drink.idDrink !== idDrink)
    }
    return data
}

export default deleteFromHistory
