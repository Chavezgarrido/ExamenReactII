import React, { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import pizzas from '../json/pizzas.json'

export const pizzaContext = createContext();

const PizzaProvider = ({children}) => {

    const [pizzaData, setPizzaData] = useState(pizzas)
    const [pizzasCart, setPizzasCart] = useState([])
    const [listaPizzas, setListaPizzas] = useState([])
    const [precioTotal, setPrecioTotal] = useState(null)
    useEffect(() => {
        
        let sumaTotal = 0

        function calculoTotal(pizzasCart){
            for(let i = 0; i <pizzasCart.length; i++){
                sumaTotal+=pizzasCart[i].price;
            }
        } 

        calculoTotal(pizzasCart);
        setPrecioTotal(sumaTotal);
    }, [pizzasCart])

    return(
        <>
            <pizzaContext.Provider value={{pizzaData, setPizzaData, pizzasCart, setPizzasCart, precioTotal, listaPizzas, setListaPizzas}}>
                {children}
            </pizzaContext.Provider>
        </>
    )
}

export default PizzaProvider