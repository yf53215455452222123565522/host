import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../../Redux/orders';

export default function OrdersCard() {
    const dispatch=useDispatch();
   
    const orders=useSelector(state=>state.orders);
    useEffect(
      ()=>{
        dispatch(fetchOrders());
      },
    [dispatch])
   
  return (
    <div className="card m-5">
    <div className="card-body">
      <div className="row">
        <div className="col mt-0">
          <h5 className="card-title">Commandes</h5>
        </div>

        <div className="col-auto">
          <div className="stat text-primary">
            <i className="align-middle" data-feather="truck"></i>
          </div>
        </div>
      </div>
      <h1 className="mt-1 mb-3">{orders.data.length}</h1>
      {/* <div className="mb-0">
                                                  <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                                                  <span className="text-muted">Since last week</span>
                                              </div> */}
    </div>
  </div>
  )
}