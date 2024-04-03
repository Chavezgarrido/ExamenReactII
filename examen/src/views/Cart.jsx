import React, { useContext } from 'react'
import { pizzaContext } from '../context/PizzaProvider'
import ItemsCart from '../components/ItemsCart'
import { formatoPrecio } from '../js/formatearMoneda'

const Cart = () => {
    const { pizzasCart, setPizzasCart, precioTotal, listaPizzas, setListaPizzas } = useContext(pizzaContext);

    function Pagar(){
        alert(`Se acaba de realizar un pago por ${formatoPrecio.format(precioTotal)} pesos.`)
        setListaPizzas([])
        setListaPizzasCart([])
    }

    return(
        <>
            <div className='container containerCarrito'>
                <h1>Detalles del pedido:</h1>
                <div className='elementosCarrito'>
                    {listaPizzas.length > 0 ? (
                        listaPizzas.map((pizza) =>{
                            const cantidadPizzas = pizzasCart.filter((cantidad) =>{
                                return cantidad.id === pizza.id;
                            })
                            return <ItemsCart key={pizza.id} pizzaAgregada={pizza} cantidadPizzas ={cantidadPizzas.length} />
                        })
                    ): (
                        
                <div className='carroVacio'>
                    <p> El carrito está vacío 🛒</p>
                </div>    
                    )}
                </div>
                <div className='totalIrAPagar'>
                    <h2>{formatoPrecio.format(precioTotal)}</h2>
                    <button onClick={Pagar}> Ir a pagar</button>
                </div>
            </div>
        
        </>
    )
}

export default Cart