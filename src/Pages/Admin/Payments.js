import React, { useEffect ,useState} from "react";
import AdminHeader from "../../Components/Headers/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { fetchPayments } from "../../Redux/payments";
import PaymentDetailsModal from "../../Components/OffCanvas/PaymentDetailsModal";
import Loader from "../../Components/Loader";
import ErrorPage from "../../Components/ErrorPage";

export default function Payments() {
    const dispatch=useDispatch();
    const [Payment,setPayment]=useState();
    const payments=useSelector(state=>state.payments);
    useEffect(() => {
        dispatch(fetchPayments());
      }, [dispatch]);
      const [showPayment,setShowPayment]= useState(false);
      const handleClosePayment=()=>setShowPayment(false);
      const handleShowPayment=()=>setShowPayment(true);
      const onRetry=()=>{window.location.reload(false)}
   if(payments.state===null){
      return(<Loader/>);
   }

   if(payments.state==="loading"){
    return(<Loader/>);
 }
   if(payments.state==="failed"){
      return(<ErrorPage message={payments.message} onRetry={onRetry}/>);
   }
  return (
    <>
        <AdminHeader link="/admin" />{payments.data[0]?
        <div className="container">
          
        <h4 className="m-3">Liste des paiements</h4>
      <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th >Id</th>
          <th className="d-none d-lg-table-cell">Client</th>
          <th className="d-none d-sm-table-cell">prix total</th>
          <th className="d-none d-sm-table-cell">Livreur</th>
          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {payments &&
                    payments.data.map((payment)=>(
                        <tr key={payment.id}>
                            <th>{payment.id}</th>
                            <th className="d-none d-lg-table-cell">{payment.user.name}</th>
                            <th className="d-none d-sm-table-cell">{payment.totalPrice} DH</th>
                            <th className="d-none d-sm-table-cell">{payment.livreur.firstname} {payment.livreur.lastname}</th>
                            <th>
                            <div className="d-flex flex-column">
                            <Button variant="success" className="mx-4 my-1 " onClick={()=>{handleShowPayment();
        setPayment(payment);
        console.log(Payment)}}>Détails</Button>
                            </div>

                            </th>


                        </tr>
                    ))}
      </tbody>
      </Table>
      <PaymentDetailsModal showPayment={showPayment} handleClosePayment={handleClosePayment} payment={Payment}/>
      </div>
      : <div className="d-flex align-items-center justify-content-center vh-100">
      <h3 className="text-center">Aucun paiement à la base de données pour le moment</h3>
     </div>
  }
    </>
  
  )
}