import React, { useEffect } from 'react';
import ImageReceivedOrder from '../Assets/img/order-received.png';
import ProfileHeader from '../Components/Profile/ProfileHeader';
import ImageSVG from '../Assets/img/pickup-delivery.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../Redux/user';
import HomeFooter from '../Components/Home/HomeFooter';
import {  useParams } from 'react-router-dom';
import { fetchOrder } from '../Redux/orders';

function OrderReceived() {
   const { order } = useParams();
   const orderObject = JSON.parse(order);
   const dispatch = useDispatch();
   const orderItems = useSelector(state => state.orderItems); // Assuming you have a state slice called 'orderItems' that contains the fetched order items

   useEffect(() => {
      dispatch(fetchOrder(orderObject.items.product));
   }, [dispatch, orderObject]);
   const uid = useSelector(state => state.users).data.id;
   useEffect(() => {
      dispatch(fetchUser(uid));
   }, [dispatch, uid])
   const user = useSelector(state => state.users);

   return (
      <>
         <ProfileHeader />

         <div className="d-flex flex-column vh-100 align-items-center justify-content-center">
            <div className="ratio ratio-4x3 bg-light z-0">
               <img src={ImageSVG} alt="" className="img-fluid" />
            </div>
            <div className="bg-white p-3">
               <div className="text-center">
                  <div className="d-flex justify-content-center mb-3">
                     <div className="bg-success rounded-circle shadow-sm p-2 tracking-time">
                        <span className="bg-white order-time">
                           <div style={{ width: '100%', height: '100%' }}>
                              <img src={ImageReceivedOrder} alt="" className="img-fluid mb-4" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                           </div>
                        </span>
                     </div>

                  </div>

                  <p className="text-muted text-center mb-4">Votre commande a été enregistrée avec succès et sera livrée à cette adresse :<br /> </p>
                  {user.data.address[0] ? <h5 className="text-muted text-center mb-4">{user.data.address[0].quartier},{user.data.address[0].province},{user.data.address[0].ville}</h5> : <p className="text-white-50 text-truncate d-inline-block mb-0 w-75 align-bottom">Ajoutez votre address</p>}

               </div>
               <div className="bg-white p-3">

                  <div className="card-body p-0">
                     {orderObject.items.map((item, index) => (
                        <div key={index} className="d-flex align-items-center justify-content-between p-3 border-bottom">
                           <div className="d-flex align-items-center">
                              <span className="border rounded d-flex align-items-center justify-content-center p-2">
                                 <img src={item.image} alt="" className="img-fluid bg-light p-1 border rounded-3 cart-product" style={{ maxWidth: '50px' }} />
                              </span>
                              <div className="ms-3">
                                 <h6 className="osahan-mb-1 fw-normal">
                                    <span className="fw-bold">{item.productName}</span>
                                 </h6>
                              </div>
                           </div>
                           <div className="border rounded d-flex align-items-center justify-content-center p-2">
                              {item.quantity}
                           </div>
                        </div>
                     ))}
                  </div>

               </div>
            </div>
            <div className="order-received vh-100 d-flex">
               <a href="track-order.html" className="link-dark">
                  <div className="text-center p-4">
                     <div>
                        {/* <h3 className="fw-bold">{order.order.id}</h3> */}

                     </div>
                  </div>
               </a>
            </div>
         </div >

         <div className="home-footer">
            <HomeFooter />
         </div>
      </>

   )
}

export default OrderReceived
