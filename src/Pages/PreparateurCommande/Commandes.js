import React, { useEffect ,useState} from "react";
import PreparateurHeader from '../../Components/Headers/PreparateurHeader'
import { attribuerOrderPreparateur, fetchOrders } from '../../Redux/orders';
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid'
import OrderDetailsModal from "../../Components/OffCanvas/OrderDetailsModal";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom';
import Loader from "../../Components/Loader";
import ErrorPage from "../../Components/ErrorPage";

export default function Commandes() {

  const dispatch = useDispatch();
  const [Order,setOrder]=useState();
  const orders = useSelector(state => state.orders);
  console.log(JSON.stringify(orders));
  const users=useSelector(state=>state.users);
  const decoded = jwt_decode(users.data.access_token);
  const email=decoded.sub;
const navigate=useNavigate();
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  const [showOrder,setShowOrder]= useState(false);
  const handleCloseOrder=()=>setShowOrder(false);
  const handleShowOrder=()=>setShowOrder(true);
  const onRetry=()=>{window.location.reload(false)}
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
    
    <div className="container">
      <h4 className="m-3">Liste des commandes</h4>{orders.data[0]?
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
              <tr key={uuidv4()} className="mb-1">
              <th>{item.product.name} x {item.quantity} ({item.product.unitQuantity}) .</th>
           </tr>

            ))}</th>
            <th className="d-flex flex-column">
          <Button variant="success" className="mx-4 my-1 " onClick={()=>{handleShowOrder();
        setOrder(order);
        console.log(Order)}}>Détails</Button>
            
         {order.state.state==="commandé"?<Button className="mx-4 my-1 " onClick={()=>{
          dispatch(attribuerOrderPreparateur({"order":order.id,"email":email}));
          setTimeout(()=>{
            navigate('/historique')
          },2000)
          
         }}> S'attribuer</Button>:<></>} 
           
                      
            </th>
            </tr>
          ))}
        </tbody>

      </Table>: <div className="d-flex align-items-center justify-content-center vh-100">
    <h3 className="text-center">Aucune commande à la base de données pour le moment</h3>
   </div>}
      <OrderDetailsModal showOrder={showOrder} handleCloseOrder={handleCloseOrder} order={Order}/>
    </div>
    
    </>
    
  )
}