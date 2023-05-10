import './App.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'

const App = () => {
    const [data, SetData] = useState([])
    const [ingridientName, setIngridientName] = useState([])
    const [ingridientAmount, setIngridientAmount] = useState([])
    const [loading, setLoading] = useState(true)

    const getDrinks = () => {
        const req = async () => {
            const response = await axios.get(
                'https://www.thecocktaildb.com/api/json/v1/1/random.php'
            )
            const drinks = response.data.drinks[0]

            SetData(drinks)
            setIngridientName(
                Object.values(
                    Object.fromEntries(
                        Object.entries(drinks).filter(([key]) => key.includes('strIngredient'))
                    )
                )
            )
            setIngridientAmount(
                Object.values(
                    Object.fromEntries(
                        Object.entries(drinks).filter(([key]) => key.includes('strMeasure'))
                    )
                )
            )
        }
        req()
    }

    setTimeout(() => setLoading(false), 1000)

    useEffect(() => {
        getDrinks()
    }, [])

    return (
        <div className="App">
            <NavBar />
            <Main
                setLoading={setLoading}
                loading={loading}
                data={data}
                ingridientName={ingridientName}
                ingridientAmount={ingridientAmount}
                getDrinks={getDrinks}
            />
        </div>
    )
}

export default App
