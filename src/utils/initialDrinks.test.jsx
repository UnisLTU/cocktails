import initialDrinks from './initialDrinks'

describe('initialDrinks function', () => {
    beforeEach(() => {
        window.localStorage.clear()
    })

    const setLocalStorage = (id, data) => {
        window.localStorage.setItem(id, JSON.stringify(data))
    }
    it('should return an empty array if localStorage does not contain drinks', () => {
        // Mocking the localStorage.getItem method to return null
        localStorage.getItem = jest.fn(() => null)

        const result = initialDrinks()
        expect(result).toEqual([])
    })

    it('initialDrinks returns parsed drinks', () => {
        const mockId = 'drinks'
        const mockJson = [{ drink1: 'drink1', drink2: 'drink2' }]
        setLocalStorage(mockId, mockJson)
        const result = initialDrinks()
        expect(result).toEqual([{ drink1: 'drink1', drink2: 'drink2' }])
    })
})
