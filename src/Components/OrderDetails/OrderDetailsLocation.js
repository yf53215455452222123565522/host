import React from 'react';
import { useSelector} from 'react-redux';




export default function OrderDetailsLocation() {
    const order=useSelector(state=>state.orders);
   
  return (
    <div className="bg-white p-3 mb-4 shadow-sm">
               <div className="d-flex align-items-center gap-3 mb-3">
                  <i className="icofont-building-alt icofont-2x"></i>
                  <div className="text-truncate">
                     <p className="mb-0">Foodmart</p>
                     <p className="text-muted text-truncate m-0">Lower GF 1, Sandhu Tower 2, Gurudev Nagar, Ferozepur Road</p>
                  </div>
               </div>
               <div className="d-flex align-items-center gap-3">
                  <i className="icofont-ui-home icofont-2x"></i>
                  <div className="text-truncate">
                     <p className="mb-0">Home</p>
                     <p className="text-muted text-truncate m-0">{order.order && order.order.user && order.order.user.address[0] && order.order.user.address[0].quartier +","+order.order.user.address[0].province+", "+order.order.user.address[0].ville}</p>
                  </div>
               </div>
            </div>
  )
}
