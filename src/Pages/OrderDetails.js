import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import OrderDetailsHeader from '../Components/OrderDetails/OrderDetailsHeader';
import { fetchOrder } from '../Redux/orders';
import ErrorPage from '../Components/ErrorPage';
import Loader from '../Components/Loader';
import OrderDetailsLocation from '../Components/OrderDetails/OrderDetailsLocation';
import OrderDetailsPricing from '../Components/OrderDetails/OrderDetailsPricing';
import OrderDetailsFooter from '../Components/OrderDetails/OrderDetailsFooter';
import HomeFooter from '../Components/Home/HomeFooter';
function OrderDetails() {
   const { id = '51d5c5c2-fac3-4770-b9bd-666206de6ca1' } = useParams();

   const handleRetry = () => window.location.reload(false);
   const dispatch = useDispatch();
   const orders = useSelector(state => state.orders);
   useEffect(() => {
      dispatch(fetchOrder(id))
   }, [dispatch, id])

   if (orders.status === "idle") {
      return (<Loader />);
   }
   if (orders.status === "loading") {
      return (<Loader />);
   }
   if (orders.status === "failed") {
      return (
         <ErrorPage message={orders.message} onRetry={handleRetry} />
      );
   }
   return (
      <div className="bg-light">
         <div className="order-detail d-flex flex-column vh-100">
            <OrderDetailsHeader />
            <div className="vh-100 my-auto overflow-auto">
               <OrderDetailsLocation />
               <OrderDetailsPricing />
            </div>
            <div className="home-footer">
               <OrderDetailsFooter id={id} />
               <HomeFooter />
            </div>
         </div>
      </div>

   )
}

export default OrderDetails