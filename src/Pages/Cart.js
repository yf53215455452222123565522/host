import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../Assets/css/style.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Assets/css/icofont.min.css';
import '../Assets/css/demo.css';
import 'react-toastify/dist/ReactToastify.css';
import CartHeader from '../Components/cart/CartHeader';
import CartItems from '../Components/cart/CartItems';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../Redux/carts';





function Cart() {
   const uid = useSelector(state => state.users).data.id;
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchCart(uid))
   }, [dispatch, uid])


   return (
      <div className="cart d-flex flex-column vh-100">
         <div className="bg-white mb-auto">
            <CartHeader />
            <div className="bg-success bg-opacity-25 px-3 py-2 d-flex align-items-center">
               <p className="text-success  mb-0">
                  <b>Livraison gratuite</b> <small>appliquez sur cette commande</small>
               </p>
            </div>
         </div>
         <CartItems />
      </div>

   )
}

export default Cart;

