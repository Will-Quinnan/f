import "./adminProducts.css";
import { useState } from 'react';

function AdminProducts() {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);




    function textChanged(e){
        let text = e.target.value;
        let attr = e.target.name;

        let copy = {...product};
        copy[attr] = text;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product)

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    return (
    <div className="ad-products">
        <h3 className="new-prod">Create New Product</h3>
        <div>

        <div className="my-control">
        <label htmlFor="text">Name</label>
        <input name="title" onChange={textChanged} type="text"/>
        </div>

        <div className="my-control">
        <label htmlFor="text">Category</label>
        <input name="category" onChange={textChanged} type="text"/>
        </div>

        <div className="my-control">
        <label htmlFor="text">Price</label>
        <input name="price" onChange={textChanged} type="number"/>
        </div>

        <div className="my-control">
        <label htmlFor="text">Image</label>
        <input name="image" onChange={textChanged} type="text"/>

        <div className="add-prod-btn">
            <button className="btn btn-dark" onClick={saveProduct}>Save Product</button>
        </div>

        </div>

        <ul>
            {allProducts.map(prod => <li key={prod.title}>{prod.title}</li>)}

        </ul>

        </div>



    </div>
    );
}

export default AdminProducts;