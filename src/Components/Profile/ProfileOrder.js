import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import shipped from "../../Assets/img/shipped.png"
import toBeShipped from "../../Assets/img/to_be_shipped.png"
import inpaid from "../../Assets/img/inpaid.png"


export default function ProfileOrder() {
   const orders = useSelector(state => state.orders);


   return (
      <>
        <h5 className="fw-bold text-black mb-3">Commandes passés</h5>
         {orders && orders.data.map(order => (
            <div key={order.id} className="bg-white rounded-3 shadow-sm mb-3">
               <Link to={"/orderDetails/" + order.id} className="link-dark">
                  <div className="d-flex align-items-start justify-content-between border-bottom p-3">
                     <div>
                        <h6 className="fw-bold text-black osahan-mb-1">Foodmart</h6>
                        <p className="text-muted small mb-2">Model Town</p>
                        <span className="text-muted">{order.totalPrice} DH<i className="icofont-rounded-right ms-1"></i></span>
                     </div>
                     {order.state.state === "prepared" ? (
                        <p className="bg-success bg-opacity-10 text-success rounded small px-2 py-1">
                           {order && order.state.state}<i className="icofont-check-circled ms-1"></i>
                        </p>
                     ) : (
                        <p className="bg-danger bg-opacity-10 text-danger rounded small px-2 py-1">
                           {order && order.state.state}<i className="icofont-close-circled ms-1"></i>
                        </p>
                     )}
                  </div>
                  <div className="p-3">
                     {order.items.map(item => (
                        <div key={uuidv4()} className="mb-1">
                           <span>{item.product.name} x {item.quantity} ({item.product.unitQuantity}) .</span>
                        </div>
                     ))}
                     <p className="text-muted small text-info m-0"><i className="icofont-clock-time"></i> {order && order.dateCommande}</p>
                  </div>
               </Link>
            </div>
         ))}
      </>
   )
}
