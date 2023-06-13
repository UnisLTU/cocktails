import './App.css'
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import fetchDrinks from './utils/fetchDrinks'
import Sidebar from './components/Sidebar/Sidebar'
import initialDrinks from './utils/initialDrinks'

const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(initialDrinks)

    const getDrink = async () => {
        const endPoint = 'random.php'
        setIsLoading(true)
        try {
            const response = await fetchDrinks(endPoint)
            const drinkData = response.data.drinks[0]

            const renamedData = {
                drinkId: drinkData.idDrink,
                drinkName: drinkData.strDrink,
                glassName: drinkData.strGlass,
                drinkThumbnail: drinkData.strDrinkThumb,
                drinkInstructions: drinkData.strInstructions,
                categoryName: drinkData.strCategory,
            }

            const ingredientNames = Object.keys(drinkData)
                .filter((key) => key.startsWith('strIngredient'))
                .map((key) => drinkData[key])
                .filter((value) => value !== null && value !== '')

            const ingredientAmounts = Object.keys(drinkData)
                .filter((key) => key.startsWith('strMeasure'))
                .map((key) => drinkData[key])
                .filter((value) => value !== null && value !== '')

            setData((prevState) => [
                { ...renamedData, ingredientNames, ingredientAmounts },
                ...prevState,
            ])
        } catch (error) {
            console.error('Error fetching drink:', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        localStorage.setItem('drinks', JSON.stringify(data))
    }, [data])

    return (
        <div className='App'>
            <NavBar />
            <Main isLoading={isLoading} getDrink={getDrink} data={data} />
            <Sidebar data={data} setData={setData} />
        </div>
    )
}

export default App
