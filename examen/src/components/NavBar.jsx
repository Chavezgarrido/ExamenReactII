import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { pizzaContext } from '../context/PizzaProvider'
import { formatoPrecio } from '../js/formatearMoneda'

const NavBar = () => {
    const {precioTotal} = useContext(pizzaContext);

    return(
        <>
            <nav className='myNavbar'>
                <NavLink className='linkNav' to="/">
                🍕 Pizzería Mamma Mia!
                </NavLink>
                <NavLink className='linkNav' to="/cart">
                🛒 {formatoPrecio.format(precioTotal)}
                </NavLink>
            </nav>
        </>
    )
}

export default NavBar