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

import { useDispatch, useSelector } from 'react-redux';
import PreferenceHeader from '../Components/Preference/PreferenceHeader';
import PreferenceItems from '../Components/Preference/PreferenceItems';
import { fetchPreference } from '../Redux/preference';
import CartIcon from '../Components/Common/CartIcon';
import { fetchCart } from '../Redux/carts';
import HomeFooter from '../Components/Home/HomeFooter';



export default function Preference() {
   const uid = useSelector(state => state.users).data.id;
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchPreference(uid))
   }, [dispatch, uid])
   useEffect(() => {
      dispatch(fetchCart(uid))
   }, [dispatch, uid])


   return (
      <div className="cart d-flex flex-column vh-100">
         <div className="bg-white mb-auto">
            <PreferenceHeader />
         </div>
         <div className="my-auto vh-100 overflow-auto p-3">
            <PreferenceItems />
         </div>
         <CartIcon />
         <div className="home-footer">
            <HomeFooter />
         </div>
      </div>

   )
}
