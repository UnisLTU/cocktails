import deleteFromHistory from './deleteFromHistory'

describe('deleteFromHistory function', () => {
    it('should update the array correctly', () => {
        const initialData = [
            { idDrink: 1, name: 'Drink 1' },
            { idDrink: 2, name: 'Drink 2' },
            { idDrink: 3, name: 'Drink 3' },
        ]

        const expectedData = [
            { idDrink: 1, name: 'Drink 1' },
            { idDrink: 3, name: 'Drink 3' },
        ]

        const drinkToDeleteId = 2

        const returnedFromFunction = deleteFromHistory(initialData, drinkToDeleteId)
        expect(returnedFromFunction).toEqual(expectedData)
    })
})