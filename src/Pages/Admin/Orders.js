import React, { useEffect ,useState} from 'react'
import AdminHeader from '../../Components/Headers/AdminHeader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../Redux/orders';
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid'
import OrderDetailsModal from "../../Components/OffCanvas/OrderDetailsModal";
import Loader from '../../Components/Loader';
import ErrorPage from '../../Components/ErrorPage';
export default function Orders() {
  const dispatch=useDispatch();
  const [Order,setOrder]=useState();

useEffect(()=>{
  dispatch(fetchOrders())
},[dispatch])
const orders=useSelector(state=>state.orders)
const [showOrder,setShowOrder]= useState(false);
  const handleCloseOrder=()=>setShowOrder(false);
  const handleShowOrder=()=>setShowOrder(true);
  const onRetry=()=>{window.location.reload(false)}
   if(orders.state===null){
      return(<Loader/>);
   }

   if(orders.state==="loading"){
    return(<Loader/>);
 }
   if(orders.state==="failed"){
      return(<ErrorPage message={orders.message} onRetry={onRetry}/>);
   }
  return (
    <>
    <AdminHeader link="/admin"/>
    {orders.data[0]?
    <div className="container">
      <h4 className="m-3">Liste des commandes</h4>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th >ID</th>
            <th className="d-none d-sm-table-cell">Etat</th>
            <th className="d-none d-sm-table-cell">Prix total</th>
            <th className="d-none d-lg-table-cell">Client</th>
            <th className="d-none d-sm-table-cell">Date</th>
            <th className="d-none d-lg-table-cell">Préparateur</th>
            <th className="d-none d-lg-table-cell">Détails</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {orders && orders.data.map((order)=>(
            <tr key={order.id}>
              <th>{order.id}</th>
              <th className="d-none d-sm-table-cell">{order.state.state}</th>
              <th className="d-none d-sm-table-cell">{order.totalPrice} DH</th>

            <th className="d-none d-lg-table-cell">{order.user.name}</th>
            <th className="d-none d-sm-table-cell">{order.dateCommande? order.dateCommande:"indisponible"}</th>
            <th className="d-none d-lg-table-cell">{order.preparateurDTO? order.preparateurDTO.firstname+" "+order.preparateurDTO.lastname:"indisponible"}</th>
            <th className="d-none d-lg-table-cell">{order.items.map((item)=>(
              <div key={uuidv4()} className="mb-1">
              <span>{item.product.name} x {item.quantity} ({item.product.unitQuantity}) .</span>
           </div>

            ))}</th>
            <div className="d-flex flex-column">
          <Button variant="success" className="mx-4 my-1 " onClick={()=>{handleShowOrder();
        setOrder(order);
        console.log(Order)}}>Détails</Button>

        </div>
            </tr>
          ))}
        </tbody>

      </Table>
      <OrderDetailsModal showOrder={showOrder} handleCloseOrder={handleCloseOrder} order={Order}/>
    </div>
    : <div className="d-flex align-items-center justify-content-center vh-100">
    <h3 className="text-center">Aucune commande à la base de données pour le moment</h3>
   </div>
}
    </>
  )
}