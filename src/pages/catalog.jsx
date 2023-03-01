
import "./catalog.css"
import Product from "../components/product";
import { useEffect , useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
    const [products, setProducts]  = useState([]);
    const [categories, setCategories] = useState([]);
    const [prodsToDisplay, setProdsToDisplay] = useState([]);


    //when component loads, do something
    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    }, [] ) ;

    async function loadCatalog(){
    //get products from the service
        let service = new DataService();
        let prods = 
        setProducts(prods);
        setProdsToDisplay(prods);

        //move to service
        let cats= ["fresh fish","frozen fish"];
        setCategories(cats);
    }

    function filter(category){
        console.log(category);


        let list = [];
        for(let i=0; i< products.length; i++) {
            let prod = products[i];
            if( prod.category === category){
                list.push(prod);
                
            }
        }
        setProdsToDisplay(list);
    }

    function clearFilter(){

        setProdsToDisplay(products);
    }

    // function magicTest(){
    //     console.log("behold, the magic!")
    //     setProducts([]);//clears the array
    // };

    return (
        <div className="catalog">
            <h1>Check our amazing products</h1>
                <h6>We have {prodsToDisplay.length}  products ready for you!</h6>

            {/* <div>
                <button className="btn-warning" onClick={magicTest}>Magic</button>
            </div> */}
            <button className='btn btn-sm btn-success btn-filter' onClick={clearFilter}>All</button>

            {categories.map(c => <button key={c} onClick={ () => filter(c) } className='btn btn-sm btn-success btn-filter'>{c}</button>)}  <br/>

            {prodsToDisplay.map( p => <Product key={p._id} data={p}></Product> )}
        </div>
    )
};


export default Catalog;


