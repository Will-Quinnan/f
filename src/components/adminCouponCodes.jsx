import "./adminCouponCodes.css"
import { useState } from 'react';

function AdminCouponCodes(){

    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);
    

    function textChanged(e){
        let text = e.target.value;
        let attr = e.target.name;

        let copy = {...coupon};
        copy[attr] = text;
        setCoupon(copy);
    }

    function saveCoupon(){
        console.log(coupon);
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);


    }



    return (

        <div className="couponBox">

            <h2>Create New Coupon</h2>

            <div className="my-control">
                <label htmlFor="text">Code</label>
                <input name="code" onChange={textChanged} type="text"/>
            </div>

            <div className="my-control">
                <label htmlFor="text">Discount</label>
                <input name="discount" onChange={textChanged} type="text"/>
            </div>

            <div className="coupon-btn">
            <button className="btn btn-dark" onClick={saveCoupon}>Save Coupon</button>
            </div>

            <ul>
            {allCoupons.map(coup => <li key={coup.code}>{coup.code}</li>)}
            </ul>

        </div>
    )
}

export default AdminCouponCodes