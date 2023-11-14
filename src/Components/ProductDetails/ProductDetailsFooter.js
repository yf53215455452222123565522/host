import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../../Redux/carts';

export default function ProductDetailsFooter() {

    const handleAddToCart = () => {
        console.log("regzergerg")
        localStorage.setItem("commande" + productDetails.product.id, 0)
        dispatch(addTocart([productDetails.product.id, uid]));
    }

    const dispatch = useDispatch();
    const uid = useSelector(state => state.users).data.id;

    const productDetails = useSelector(state => state.products);
    if (productDetails.product === null) {
        window.location.reload(false);
    }
    return (
        <div className="mt-auto bg-white p-3">
            <div className="btn btn-success w-100 text-uppercase btn-lg fw-bold" onClick={() => handleAddToCart()}>Ajouter au pannier</div>
        </div>
    )
}
