import "./product.css"
import QuantityPicker from "./quantityPicker";

function Product() {
    return (
        <div className="product">

            <img src="images/seabass.jpg" alt="seabass" />

            <h5>Product</h5>

            <div className="prices">
            <label>Total</label>
            <label>Price</label>
            </div>


            <QuantityPicker></QuantityPicker>
            <button >add to cart</button>
        </div>
    )
};


export default Product;