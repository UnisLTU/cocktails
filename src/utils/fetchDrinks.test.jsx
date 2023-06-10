import fetchDrinks from './fetchDrinks'

describe('fetchDrinks function', () => {
    it('fetchDrinks return promise', () => {
        const result = fetchDrinks()
        expect(result).toBeInstanceOf(Promise)
    })
})
