import React from 'react'
import { render, screen } from '@testing-library/react'
import IngridientList from './IngridientList'
import '@testing-library/jest-dom'

describe('IngridientList component', () => {
    it('should render successfully', () => {
        const ingridients = ['vodka', 'lemon']
        const amount = ['5ml', 'one']
        render(<IngridientList strIngredient={ingridients} strMeasure={amount} />)

        const ingridientList = screen.getAllByTestId('ingridient')
        expect(ingridientList).toHaveLength(2)

        const ingridientAmount = screen.getAllByTestId('amount')
        expect(ingridientAmount).toHaveLength(2)
    })

    it('should not render amounts, when strMeasure is undefined', () => {
        const ingridients2 = ['vodka', 'lemon']
        const amounts2 = []
        render(<IngridientList strIngredient={ingridients2} strMeasure={amounts2} />)
        screen.debug()
        const ingridient1 = screen.getByText('vodka')
        expect(ingridient1).toBeInTheDocument()

        const amount2 = screen.queryByText('5ml')
        expect(amount2).not.toBeInTheDocument()
    })
})
