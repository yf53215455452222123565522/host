import React from 'react'

import { useSelector } from 'react-redux';

import OrderDetailsPricingItem from './OrderDetailsPricingItem';




export default function OrderDetailsPricing() {



   const order = useSelector(state => state.orders);








   const deliveryPartnerFee = 20;

   const handlingFee = 10;



   return (

      <div className="shadow-sm">

         <p className="text-uppercase px-3 text-black mb-2">Détails</p>

         <div className="bg-white px-3">

            <div className="border-bottom py-3">

               {order.order && order.order.items.map((items) => (

                  <OrderDetailsPricingItem key={items.product.id} items={items} />

               ))}





            </div>

            <div className="py-3">
               <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="m-0">Total de marchandise HT</p>
                    <p className="m-0">{order.order &&  (order.order.totalPrice/1.1).toFixed(2)} DH</p>
                </div>

                <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="m-0">Pourcentage des taxes</p>
                    <p className="m-0">10 %</p>
                </div>
                <hr/>

               <div className="d-flex align-items-center justify-content-between text-muted small mb-2">

                  <p className="m-0">Total de marchandise TTC</p>

                  <p className="m-0">{order.order && order.order.totalPrice.toFixed(2)} DH</p>

               </div>

               <div className="d-flex align-items-center justify-content-between text-muted small mb-2">

                  <p className="m-0">Frais de livraison</p>

                  <p className="m-0">{order.order && deliveryPartnerFee.toFixed(2)} DH</p>

               </div>

               <div className="d-flex align-items-center justify-content-between text-muted small mb-2">

                  <p className="m-0">Frais de préparation</p>

                  <p className="m-0">{order.order && handlingFee.toFixed(2)} DH</p>

               </div>

               <div className="d-flex align-items-center justify-content-between text-muted small mb-0">

                  <h6 className="m-0 text-black"> Total</h6>

                  <h6 className="m-0 text-primary">{order.order && (order.order.totalPrice + handlingFee + deliveryPartnerFee).toFixed(2)} DH</h6>

               </div>

            </div>

         </div>

      </div>)

}