import loadFromHistory from './loadFromHistory'

describe('loadFromHistory function', () => {
    it('should update the array correctly', () => {
        const initialData = [
            { drinkId: 1, name: 'Drink 1' },
            { drinkId: 2, name: 'Drink 2' },
            { drinkId: 3, name: 'Drink 3' },
        ]

        const expectedData = [
            { drinkId: 2, name: 'Drink 2' },
            { drinkId: 1, name: 'Drink 1' },
            { drinkId: 3, name: 'Drink 3' },
        ]

        const drinkToDeleteId = 2

        const returnedFromFunction = loadFromHistory(initialData, drinkToDeleteId)
        expect(returnedFromFunction).toEqual(expectedData)
    })
})
