import deleteFromHistory from './deleteFromHistory'

describe('deleteFromHistory function', () => {
    it('should update the array correctly', () => {
        const initialData = [
            { drinkId: 1, name: 'Drink 1' },
            { drinkId: 2, name: 'Drink 2' },
            { drinkId: 3, name: 'Drink 3' },
        ]

        const expectedData = [
            { drinkId: 1, name: 'Drink 1' },
            { drinkId: 3, name: 'Drink 3' },
        ]

        const drinkToDeleteId = 2

        const returnedFromFunction = deleteFromHistory(initialData, drinkToDeleteId)
        expect(returnedFromFunction).toEqual(expectedData)
    })
})
