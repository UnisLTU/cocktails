import React from 'react'
import { render, screen } from '@testing-library/react'
import IngredientList from './IngredientList'
import '@testing-library/jest-dom'

describe('IngredientList component', () => {
    it('should render successfully', () => {
        const ingredients = ['vodka', 'lemon']
        const amount = ['5ml', 'one']
        render(<IngredientList strIngredient={ingredients} strMeasure={amount} />)

        const ingredientList = screen.getAllByTestId('ingredient')
        expect(ingredientList).toHaveLength(2)

        const ingredientAmount = screen.getAllByTestId('amount')
        expect(ingredientAmount).toHaveLength(2)
    })

    it('should not render amounts, when strMeasure is undefined', () => {
        const ingredients2 = ['vodka', 'lemon']
        const amounts2 = []
        render(<IngredientList strIngredient={ingredients2} strMeasure={amounts2} />)
        const ingredient1 = screen.getByText('vodka')
        expect(ingredient1).toBeInTheDocument()

        const amount1 = screen.queryByText('5ml')
        expect(amount1).not.toBeInTheDocument()
    })

    it('should not render ingredients, when strIngredient is undefined', () => {
        const ingredients3 = []
        const amounts3 = ['5ml', 'one']
        render(<IngredientList strIngredient={ingredients3} strMeasure={amounts3} />)
        const ingredient2 = screen.queryByText('vodka')
        expect(ingredient2).not.toBeInTheDocument()

        const amount2 = screen.getByText('5ml')
        expect(amount2).toBeInTheDocument()
    })
})
