import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import '../src/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetail from './components/movieDetail';
import Favorites from './components/Favorites'
import { useState } from 'react';

function App() {

const [cart,setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])


  const handleChanger = (item) => {

    
    let newObj = {
      name: item.name,
      id: item.id,
      description: item.description,
      image: item.image,
      pinned: item.pinned
    }
    
    let exist = cart.find(x => x.id === newObj.id)

    if(exist){
      let newArray = cart.filter(x => x.id !== newObj.id)
      setCart(newArray)
      localStorage.setItem('cart',JSON.stringify(newArray))
     console.log('se ha eliminado tio ')
  }

    if(!exist) {
      let arrayTicket = [...cart, newObj]
      setCart(arrayTicket)
      localStorage.setItem('cart', JSON.stringify(arrayTicket))
      console('Se ha agregado tío')
    }
  }
  return (
    <>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route exact path='/' element={<Home cart={cart}  handleChange={handleChanger}  />} ></Route>
          <Route exact path="/movies/" element={<MovieDetail />} ></Route>
          <Route exact path='/favorites' element={<Favorites cart={cart} handleChange={handleChanger} />} ></Route>
        </Routes>

      </BrowserRouter>
    </>
  );

}

export default App;
