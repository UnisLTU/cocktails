import React from 'react'
import { render, screen } from '@testing-library/react'
import IngredientList from './IngredientList'
import '@testing-library/jest-dom'

describe('IngredientList component', () => {
    const ingredients = ['vodka', 'lemon']
    const amounts = ['5ml', 'one']

    it('should render successfully', () => {
        render(<IngredientList strIngredient={ingredients} strMeasure={amounts} />)

        const amount1 = screen.getByText('5ml')
        expect(amount1).toBeInTheDocument()
        const amount2 = screen.getByText('one')
        expect(amount2).toBeInTheDocument()

        const ingredient1 = screen.getByText('vodka')
        expect(ingredient1).toBeInTheDocument()
        const ingredient2 = screen.getByText('lemon')
        expect(ingredient2).toBeInTheDocument()
    })

    it('should not render amounts, when strMeasure is undefined', () => {
        const emptyAmounts = []
        render(<IngredientList strIngredient={ingredients} strMeasure={emptyAmounts} />)

        const ingredient1 = screen.getByText('vodka')
        expect(ingredient1).toBeInTheDocument()
        const ingredient2 = screen.getByText('lemon')
        expect(ingredient2).toBeInTheDocument()

        const amount1 = screen.queryByText('5ml')
        expect(amount1).not.toBeInTheDocument()
        const amount2 = screen.queryByText('one')
        expect(amount2).not.toBeInTheDocument()
    })

    it('should not render ingredients, when strIngredient is undefined', () => {
        const emptyIngredients = []
        render(<IngredientList strIngredient={emptyIngredients} strMeasure={amounts} />)

        const ingredient1 = screen.queryByText('vodka')
        expect(ingredient1).not.toBeInTheDocument()
        const ingredient2 = screen.queryByText('lemon')
        expect(ingredient2).not.toBeInTheDocument()

        const amount1 = screen.getByText('5ml')
        expect(amount1).toBeInTheDocument()
        const amount2 = screen.getByText('one')
        expect(amount2).toBeInTheDocument()
    })
})
