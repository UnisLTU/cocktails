import './App.css'
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import fetchDrinks from './utils/fetchDrinks'
import Sidebar from './components/Sidebar/Sidebar'
import Loader from './components/Main/Loader/Loader'

const App = () => {
    const [firstLoading, setFirstLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(() => {
        const storedDrinks = JSON.parse(localStorage.getItem('drinks'))
        return storedDrinks || []
    })

    const getDrink = async () => {
        const endPoint = 'random.php'
        const response = await fetchDrinks(endPoint)
        const [drinkData] = response.data.drinks

        const { idDrink, strDrink, strGlass, strDrinkThumb, strInstructions, strCategory } =
            drinkData

        const filteredData = {
            idDrink,
            strDrink,
            strGlass,
            strDrinkThumb,
            strInstructions,
            strCategory,
        }

        const strIngredient = Object.keys(drinkData)
            .filter((key) => key.startsWith('strIngredient'))
            .map((key) => drinkData[key])
            .filter((value) => value !== null && value !== '')

        const strMeasure = Object.keys(drinkData)
            .filter((key) => key.startsWith('strMeasure'))
            .map((key) => drinkData[key])
            .filter((value) => value !== null && value !== '')

        setData((prevState) => [{ ...filteredData, strIngredient, strMeasure }, ...prevState])
        setTimeout(() => setLoading(false), 1000)
    }

    setTimeout(() => setFirstLoading(false), 1000)

    useEffect(() => {
        if (data === null || data.length === 0) {
            getDrink()
        }
    }, [])

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