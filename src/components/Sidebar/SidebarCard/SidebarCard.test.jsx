import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SidebarCard from './SidebarCard'
import loadFromHistory from '../../../utils/loadFromHistory'
import deleteFromHistory from '../../../utils/deleteFromHistory'

jest.mock('../../../utils/loadFromHistory.js')
jest.mock('../../../utils/deleteFromHistory.js')

describe('SidebarCard component', () => {
    const drinkName = 'Affair'
    const drinkId = '17839'
    const drinkThumb = 'https://www.thecocktaildb.com/images/media/drink/h5za6y1582477994.jpg'
    const setData = jest.fn()
    const data = [{}]

    it('should render successfully', () => {
        render(<SidebarCard drinkName={drinkName} drinkId={drinkId} drinkThumb={drinkThumb} />)
        const loadButton = screen.getByRole('button', { name: 'Load' })
        expect(loadButton)
        const deleteButton = screen.getByRole('button', { name: 'Delete' })
        expect(deleteButton)
        const drinkNameText = screen.getByText('Affair')
        expect(drinkNameText)
        const drinkImage = screen.getByRole('img').hasAttribute(drinkThumb)
        expect(drinkImage)
    })

    it('fires loadFromHistory when load button is clicked', () => {
        render(<SidebarCard drinkId={drinkId} setData={setData} data={data} />)
        const loadButton = screen.getByRole('button', { name: 'Load' })
        fireEvent.click(loadButton)
        expect(loadFromHistory).toHaveBeenCalledWith(data, drinkId)
    })

    it('fires deleteFromHistory when delete button is clicked', () => {
        render(<SidebarCard drinkId={drinkId} setData={setData} data={data} />)
        const deleteButton = screen.getByRole('button', { name: 'Delete' })
        fireEvent.click(deleteButton)
        expect(deleteFromHistory).toHaveBeenCalledWith(data, drinkId)
    })
})
