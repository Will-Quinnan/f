import DataContext from './dataContext';
import { useState } from 'react';

function GlobalData(props){
    const [cart, setCart] = useState ([])
    const [fakeuser, setFakeUser] = useState ({name: "Will"});

    function addProductsToCart(){}
    function removeProductsFromCart(){}


    return(
        <DataContext.Provider value = {{
            cart: cart,
            use: fakeuser,
            addProductsToCart: addProductsToCart,
            removeProductsFromCart: removeProductsFromCart,
        }}
        
        >
            {props.children}
        </DataContext.Provider>
    )
}

export default GlobalData