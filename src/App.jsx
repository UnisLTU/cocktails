import './App.css'
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import fetchDrinks from './utils/fetchDrinks'
import Sidebar from './components/Sidebar/Sidebar'
import Loader from './components/Loader/Loader'
import initialDrinks from './utils/initialDrinks'

const App = () => {
    const [firstLoading, setFirstLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(initialDrinks)

    const getDrink = async () => {
        const endPoint = 'random.php'
        setLoading(true)
        try {
            const response = await fetchDrinks(endPoint)
            const drinkData = response.data.drinks[0]

            const renamedData = {
                drinkId: drinkData.idDrink,
                drinkName: drinkData.strDrink,
                glassName: drinkData.strGlass,
                drinkThumb: drinkData.strDrinkThumb,
                drinkInstructions: drinkData.strInstructions,
                categoryName: drinkData.strCategory,
            }

            const ingredientName = Object.keys(drinkData)
                .filter((key) => key.startsWith('strIngredient'))
                .map((key) => drinkData[key])
                .filter((value) => value !== null && value !== '')

            const ingredientAmount = Object.keys(drinkData)
                .filter((key) => key.startsWith('strMeasure'))
                .map((key) => drinkData[key])
                .filter((value) => value !== null && value !== '')

            setData((prevState) => [
                { ...renamedData, ingredientName, ingredientAmount },
                ...prevState,
            ])
        } catch (error) {
            console.error('Error fetching drink:', error)
        } finally {
            setLoading(false)
        }
    }

    setTimeout(() => setFirstLoading(false), 1000)

    useEffect(() => {
        localStorage.setItem('drinks', JSON.stringify(data))
    }, [data])

    return (
        <div className='App'>
            {firstLoading ? (
                <Loader />
            ) : (
                <>
                    <NavBar />
                    <Main
                        setLoading={setLoading}
                        loading={loading}
                        getDrink={getDrink}
                        data={data}
                    />
                    <Sidebar data={data} setData={setData} loading={loading} />
                </>
            )}
        </div>
    )
}

export default App
