import "./App.css";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [data, SetData] = useState([]);
  const [ingridientName, setIngridientName] = useState([]);
  const [ingridientAmount, setIngridientAmount] = useState([]);
  const [flip, setFlip] = useState(false);

  const getDrinks = useCallback(() => {
    const req = async () => {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const drinks = response.data.drinks[0];
      SetData(drinks);
      setFlip(false);
      setIngridientName(
        Object.values(
          Object.fromEntries(
            Object.entries(drinks).filter(([key]) =>
              key.includes("strIngredient")
            )
          )
        )
      );
      setIngridientAmount(
        Object.values(
          Object.fromEntries(
            Object.entries(drinks).filter(([key]) => key.includes("strMeasure"))
          )
        )
      );
    };
    req();
  }, []);

  useEffect(() => {
    getDrinks();
  }, [getDrinks]);

  const MapIndri = 
    ingridientName.map((name, i) => (
      <li className="ingridient_name" key={i}>
        {name}
      </li>
    ));
  

  const MapAmount = 
    ingridientAmount.map((name, i) => (
      <li className="ingridient_amount" key={i}>
        {name}
      </li>
    ));

  console.log(data);

  return (
    
    <div className="App">
      <div
        className={`card ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="front">
          <h2>{data.strDrink}</h2>
          <h3>Category: {data.strCategory}</h3>
          <img src={data.strDrinkThumb} alt="" />
        </div>
        <div className="back">
          <h3>Served in : {data.strGlass}</h3>
          <h3>
            Ingridients :
            <div className="ingridients">
              <ul className="ingridient_name_container">{MapAmount}</ul>
              <ul className="ingridient_name_container">{MapIndri}</ul>
            </div>
            Instructions : <p>{data.strInstructions}</p>
          </h3>
        </div>
      </div>
      <button onClick={getDrinks}>Get new drink</button>
    </div>
  );
};

export default App;
