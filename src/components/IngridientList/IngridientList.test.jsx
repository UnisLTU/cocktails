import React from 'react'
import { render, screen } from '@testing-library/react'
import IngridientList from './IngridientList'

describe('IngridientList Component', () => {
    it('items passed through props should render', () => {
        const ingridients = ['vodka', 'lemon']
        const amount = ['5ml', 'one']
        render(<IngridientList strIngredient={ingridients} strMeasure={amount} />)
        screen.debug(undefined, Infinity)

        const ingridientList = screen.getAllByTestId('ingridient')
        expect(ingridientList).toHaveLength(2)

        const ingridientAmount = screen.getAllByTestId('amount')
        expect(ingridientAmount).toHaveLength(2)
    })
})
