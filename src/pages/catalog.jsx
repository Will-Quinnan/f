
import "./catalog.css"
import Product from "../components/product";
import { useEffect , useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
    const [products, setProducts]  = useState([1])


    //when component loads, do something
    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    }, [] ) ;

    function loadCatalog(){
    //get products from the service
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
    }

    function magicTest(){
        console.log("behold, the magic!")
        setProducts([]);//clears the array
    };

    return (
        <div className="catalog">
            <h1>Check our amazing products</h1>
                <h6>We have {products.length}  products ready for you!</h6>

            <button onClick={magicTest}>Magic</button>

            {products.map( p => <Product data={p}></Product> )}
        </div>
    )
};


export default Catalog;


