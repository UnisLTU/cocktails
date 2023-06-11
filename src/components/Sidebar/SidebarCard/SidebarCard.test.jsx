import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SidebarCard from './SidebarCard'
import loadFromHistory from '../../../utils/loadFromHistory'
import deleteFromHistory from '../../../utils/deleteFromHistory'

jest.mock('../../../utils/loadFromHistory.js')
jest.mock('../../../utils/deleteFromHistory.js')

describe('SidebarCard component', () => {
    const strDrink = 'Affair'
    const idDrink = '17839'
    const strDrinkThumb = 'https://www.thecocktaildb.com/images/media/drink/h5za6y1582477994.jpg'
    const setData = jest.fn()
    const data = [{}]

    it('should render successfully', () => {
        render(<SidebarCard strDrink={strDrink} idDrink={idDrink} strDrinkThumb={strDrinkThumb} />)
        const loadButton = screen.getByRole('button', { name: 'Load' })
        expect(loadButton)
        const deleteButton = screen.getByRole('button', { name: 'Delete' })
        expect(deleteButton)
        const drinkName = screen.getByText('Affair')
        expect(drinkName)
        const drinkImage = screen.getByRole('img').hasAttribute(strDrinkThumb)
        expect(drinkImage)
    })

    it('fires loadFromHistory when load button is clicked', () => {
        render(<SidebarCard idDrink={idDrink} setData={setData} data={data} />)
        const loadButton = screen.getByRole('button', { name: 'Load' })
        fireEvent.click(loadButton)
        expect(loadFromHistory).toHaveBeenCalledWith(data, idDrink)
    })

    it('fires deleteFromHistory when delete button is clicked', () => {
        render(<SidebarCard idDrink={idDrink} setData={setData} data={data} />)
        const deleteButton = screen.getByRole('button', { name: 'Delete' })
        fireEvent.click(deleteButton)
        expect(deleteFromHistory).toHaveBeenCalledWith(data, idDrink)
    })
})
