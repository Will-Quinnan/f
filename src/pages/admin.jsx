import AdminCouponCodes from '../components/adminCouponCodes';
import AdminProducts from '../components/adminProducts';
import './admin.css';




function Admin() {

    return(
        <div className = "admin">
            <h1>Store Administrator</h1>

            <div className='parent'>

                <AdminProducts className="admin-prod"></AdminProducts>
                <AdminCouponCodes className="admin-coup"></AdminCouponCodes>

            </div>


        </div>
    );
}

export default Admin;