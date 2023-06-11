import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Sidebar from './Sidebar'

describe('Sidebar component', () => {
    it('should render successfully', () => {
        const setData = jest.fn()
        const initialData = [
            { idDrink: 1, name: 'Drink 1' },
            { idDrink: 2, name: 'Drink 2' },
            { idDrink: 3, name: 'Drink 3' },
        ]

        render(<Sidebar data={initialData} setData={setData} />)
        const deleteButtons = screen.getAllByRole('button', { name: 'Delete' })
        expect(deleteButtons).toHaveLength(3)
    })
})
