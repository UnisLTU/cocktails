import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from './Main'

const data = [
    {
        drinkId: '178317',
        drinkName: 'Bees Knees',
        glassName: 'Martini Glass',
        drinkThumbnail: 'https://www.thecocktaildb.com/images/media/drink/tx8ne41582475326.jpg',
        drinkInstructions: 'Shake ingredients with crushed ice. Garnish with orange peel.',
        categoryName: 'Cocktail',
        ingredientNames: ['Gold rum', 'Orange Juice', 'Lime Juice', 'Triple Sec'],
        ingredientAmounts: ['6 cl', '2 cl', '2 cl', '2 jiggers'],
    },
]
describe('Main component', () => {
    it('main should render successfully', () => {
        render(<Main data={data} getDrink={() => {}} loading={false} setLoading={() => {}} />)
        const drinkName = screen.getByText('Bees Knees')
        expect(drinkName)
        const drinkCategory = screen.getByText('Category: Cocktail')
        expect(drinkCategory)
        const drinkImage = screen.getByRole('img').hasAttribute(data.drinkThumbnail)
        expect(drinkImage)
        const drinkGlass = screen.getByText('Served in: Martini Glass')
        expect(drinkGlass)
        const drinkInstructions = screen.getByText(
            'Shake ingredients with crushed ice. Garnish with orange peel.'
        )
        expect(drinkInstructions)
    })
})
