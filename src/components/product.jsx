import "./product.css"
import QuantityPicker from "./quantityPicker";
import { useEffect } from 'react';

function Product(props) {

    useEffect(function(){
        console.log("Hello, I'm a Product")
        console.log(props.data.price)
    }, [] );



    return (
        <div className="product">

            <img src={"/images/"+ props.data.image} alt="seabass" />

            <h5>{props.data.title}</h5>

            <div className="prices">
            <label>${props.data.price?.toFixed(2)}/lb</label>
            <label>${props.data.price?.toFixed(2)}</label>
            </div>


            <QuantityPicker></QuantityPicker>
            <button className="addbtn" >add to cart</button>
        </div>
    )
};


export default Product;