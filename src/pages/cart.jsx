import './cart.css';
import { useContext } from "react";
import DataContext from "../store/dataContext";



function Cart(){

    const cart = useContext(DataContext).cart;

    return(
        <div className='cart'>
            <h1>You have {cart.length} items in cart</h1>

            
            {cart.map((prod) => (
                <div className='prod-row'>
                    <img src = { '/images/' + prod.image} alt=""></img>
                    <h6>{prod.title}</h6>
                    <label>{prod.price}</label>
                    <button className='btn btn-sm btn-danger'>delete</button>
                </div>
            ))}
            
        </div>
    )
}

export default Cart