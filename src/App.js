import "./App.css";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Cart from "./components/Cart";
//import { useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartMovies, setCartMovies] = useState([]);
  const [movies] = useState([
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ]);
  function refreshCart() {
    let newMovies = movies.filter((mov) => mov.amount > 0);
    setCartMovies(newMovies);
  }
  function addMovie(title, id) {
    console.log("Dodat je film: " + title);
    setCartNum(cartNum + 1);
    movies.forEach((mov) => {
      if (mov.id === id) {
        mov.amount++;
      }
      console.log(mov.amount);
    });
    refreshCart();
    
  }
  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Movies movies={movies} onAdd={addMovie} />}
        />
        <Route path="/cart" element={<Cart products={cartMovies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
