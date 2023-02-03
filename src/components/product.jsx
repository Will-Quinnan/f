import "./product.css"
import QuantityPicker from "./quantityPicker";
import { useEffect , useState } from 'react';

function Product(props) {
    const [quantity, setQuantity] =useState(1)

    useEffect(function(){
        console.log(props.data.price)
    }, [] );

    function onQuantityChange(qty){
        console.log("new value: " + qty)
        setQuantity(qty);
    }

    function getTotal(){
        let total= props.data.price * quantity;
        return total.toFixed(2);
    }

    function addToCart(){
        console.log("Adding " + quantity+ " " + props.data.title + " for $" + getTotal())
    }

    return (
        <div className="product">

            <img src={"/images/"+ props.data.image} alt="seabass" />

            <h5>{props.data.title}</h5>

            <div className="prices">
            <label>${ getTotal() }</label>
            <label>${props.data.price.toFixed(2)}/lb</label>
            </div>


            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button className="addbtn"  onClick={addToCart}>add to cart</button>
        </div>
    )
};


export default Product;



/*
when the user clicks the Add button
console log: adding <Title>
*/