import React from 'react';
import ProfileNavBar from '../Headers/ProfileNavBar';

import { Link  } from 'react-router-dom';
import { useSelector} from 'react-redux';
import Loader from '../Loader';
export default function ProductDetailsHeader() {
    const productDetails=useSelector(state=>state.products);
   
    return (
        <div className="d-flex align-items-center gap-3 p-3 bg-primary" key={productDetails.product.id}>
            <Link to="/home" className="text-white"><i className="bi bi-arrow-left fs-5"></i></Link>
            <div>
                <h6 className="fw-bold text-white mb-0">{productDetails.product.marque}</h6>
                <p className="text-white-50 small m-0">Foodmart</p>
            </div>
            <ProfileNavBar />
        </div>
    )
}
