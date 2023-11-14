import React, { useEffect ,useState} from "react";
import PreparateurHeader from '../../Components/Headers/PreparateurHeader'
import {  fetchOrdersPreparedByUser, readyToGoOrder } from '../../Redux/orders';
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid'
import OrderDetailsModal from "../../Components/OffCanvas/OrderDetailsModal";
import jwt_decode from "jwt-decode";
import ErrorPage from "../../Components/ErrorPage";
import Loader from "../../Components/Loader";
export default function Historique() {
  const onRetry=()=>{window.location.reload(false)}
  const dispatch = useDispatch();
  const [Order,setOrder]=useState();
  const orders = useSelector(state => state.orders);
  
  const users=useSelector(state=>state.users);
  const decoded = jwt_decode(users.data.access_token);
  const email=decoded.sub;
 
  useEffect(() => {
    dispatch(fetchOrdersPreparedByUser(email));
  }, [dispatch]);
  const [showOrder,setShowOrder]= useState(false);
  const handleCloseOrder=()=>setShowOrder(false);
  const handleShowOrder=()=>setShowOrder(true);
  if(users.state===null){
    return(<Loader/>);
 }

 if(users.state==="loading"){
  return(<Loader/>);
}
 if(users.state==="failed"){
    return(<ErrorPage message={users.message} onRetry={onRetry}/>);

 }
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
    <PreparateurHeader/>
    {orders.data[0]?
    <div className="container">
      <h4 className="m-3">Historique des commandes</h4>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th >ID</th>
            <th className="d-none d-sm-table-cell">Etat</th>
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
            
         {order.state.state==="en préparation"?<Button className="mx-4 my-1 " onClick={()=>{
          dispatch(readyToGoOrder(order.id));
          window.location.reload(false);
         }}>Terminer</Button>:<></>} 
           
                      
            </div>
            </tr>
          ))}
        </tbody>

      </Table>
      <OrderDetailsModal showOrder={showOrder} handleCloseOrder={handleCloseOrder} order={Order}/>
    </div>
    : <div className="d-flex align-items-center justify-content-center vh-100">
    <h3 className="text-center">Aucune commande à la base de données pour le moment</h3>
   </div>}
    </>
  )
}