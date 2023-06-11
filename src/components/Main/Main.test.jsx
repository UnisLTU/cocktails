import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from './Main'

describe('Main component', () => {
    it('loader should render successfully', () => {
        const data = [
            {
                idDrink: '178317',
                strDrink: "Bee's Knees",
                strGlass: 'Martini Glass',
                strDrinkThumb:
                    'https://www.thecocktaildb.com/images/media/drink/tx8ne41582475326.jpg',
                strInstructions:
                    'Shake ingredients with crushed ice\r\nGarnish with orange peel\r\n',
                strCategory: 'Cocktail',
                strIngredient: ['Gold rum', 'Orange Juice', 'Lime Juice', 'Triple Sec'],
                strMeasure: ['6 cl', '2 cl', '2 cl', '2 jiggers'],
            },
        ]
        render(<Main data={data} getDrink={() => {}} loading setLoading={() => {}} />)
        const loader = screen.getByTestId('loader')
        expect(loader)
    })

    it('main should render successfully', () => {
        const data = [
            {
                idDrink: '178317',
                strDrink: 'Bees Knees',
                strGlass: 'Martini Glass',
                strDrinkThumb:
                    'https://www.thecocktaildb.com/images/media/drink/tx8ne41582475326.jpg',
                strInstructions: 'Shake ingredients with crushed ice. Garnish with orange peel.',
                strCategory: 'Cocktail',
                strIngredient: ['Gold rum', 'Orange Juice', 'Lime Juice', 'Triple Sec'],
                strMeasure: ['6 cl', '2 cl', '2 cl', '2 jiggers'],
            },
        ]
        render(<Main data={data} getDrink={() => {}} loading={false} setLoading={() => {}} />)
        const drinkName = screen.getByText('Bees Knees')
        expect(drinkName)
        const drinkCategory = screen.getByText('Category: Cocktail')
        expect(drinkCategory)
        const drinkImage = screen.getByRole('img').hasAttribute(data.strDrinkThumb)
        expect(drinkImage)
        const drinkGlass = screen.getByText('Served in: Martini Glass')
        expect(drinkGlass)
        const drinkInstructions = screen.getByText(
            'Shake ingredients with crushed ice. Garnish with orange peel.'
        )
        expect(drinkInstructions)
    })
})
