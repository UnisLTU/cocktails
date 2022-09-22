import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

const App = () => {
  const [data, SetData] = useState([]);
  const [ingridientName, setIngridientName] = useState([]);
  const [ingridientAmount, setIngridientAmount] = useState([]);

  const getDrinks = () => {
    const req = async () => {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const drinks = response.data.drinks[0];
      SetData(drinks);
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
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Main
        data={data}
        ingridientName={ingridientName}
        ingridientAmount={ingridientAmount}
        getDrinks={getDrinks}
      />
    </div>
  );
};

export default App;
