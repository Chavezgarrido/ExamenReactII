import './App.css'
import NavBar from './components/NavBar'
import Home from './views/Home'
import PizzaDetails from './views/PizzaDetails'
import Cart from './views/Cart'
import PizzaProvider from './context/PizzaProvider'
import NotFound from './views/NotFound'
import { Route, Routes } from 'react-router-dom'

function App(){

  return(

    <PizzaProvider>

      <NavBar />
      <Routes>

        <Route path="/" element= {<Home />} />
        <Route path="*" element= {<NotFound />} />
        <Route path="/pizza/:id" element= {<PizzaDetails />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>

    </PizzaProvider>
  )
}

export default App;