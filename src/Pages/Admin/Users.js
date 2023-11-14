import React, { useEffect ,useState} from "react";
import AdminHeader from "../../Components/Headers/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/Client";
import { Link } from "react-router-dom";
import { avertirUser, blackListerUser, logoutWithCredentials, refreshToken } from "../../Redux/user";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import ClientDetailsModal from "../../Components/OffCanvas/ClientDetailsModal";
import Loader from "../../Components/Loader";
import ErrorPage from "../../Components/ErrorPage";


export default function Users() {
  const dispatch = useDispatch();
  const [idClient,setIdClient]=useState();
  const [Client,setClient]=useState();
  const users = useSelector((state) => state.clients);
  const userdata=useSelector(state=>state.users).data;
  //{showClient,handleCloseClient,user}
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const [showClient,setShowClient]= useState(false);
  const handleCloseClient=()=>setShowClient(false);
  const handleShowClient=()=>setShowClient(true);
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
  return (
    <>
      <AdminHeader link="/admin"/>
      {users.data[0]?
      <div className="container">
      <h4 className="m-3">Liste des clients</h4>
      <Table responsive striped bordered hover size="md">
      <thead>
        <tr>
          
          <th className="d-none d-sm-table-cell">Image</th>
          <th >Nom</th>
          <th className="d-none d-md-table-cell">Email</th>
          <th className="d-none d-lg-table-cell">Téléphone</th>
          <th className="d-none  d-lg-table-cell">Addresses</th>
          <th className="d-none d-sm-table-cell">Avertissements</th>
          <th className="d-none d-sm-table-cell">bloqué</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {users &&
                users.data.map((user) => (
                    <>
        <tr key={user.id}>
        <th className="text-center d-none d-sm-table-cell "><img
                          src={user.picture}
                          referrerPolicy="no-referrer"
                          alt=""
                          className="rounded-pill img-fluid "
                        /></th>
          <th>{user.name}</th>
          <th className="d-none d-md-table-cell">{user.email}</th>
          <th className="d-none d-lg-table-cell" >{user.phone? user.phone:"indisponible"}</th>
          <th className="d-none  d-lg-table-cell" >{(user.address[0] && user.address)? <ul>
          {user.address.map((address)=>(
            <li>{address.quartier} , {address.province} , {address.ville}</li>


          ))}</ul>: "indisponible"}</th>
          <th className="d-none d-sm-table-cell">{user.avertissement}</th>
          <th className="d-none d-sm-table-cell">{user.blacklisted? "oui":"non"}</th>
          <th><div className="d-flex flex-column">
          <Button variant="success" className="mx-4 my-1 " onClick={()=>{handleShowClient();
        setClient(user);
       }}>Détails</Button>
            <Button className="mx-4 my-1 "><Link to={"/userPayments/" + user.id} className="text-white">Paiements</Link></Button>
          <Button className="mx-4 my-1 " variant="secondary"><Link to={"/userOrders/" + user.id} className="text-white">Commandes</Link></Button>
            <Button variant="warning" className="mx-4 my-1 " onClick={()=>{
                          dispatch(avertirUser(user.id));
                          window.location.reload(false);}} >Avertir</Button>
                       
            <Button  variant="danger" className='mx-4 my-1' onClick={()=>{dispatch(blackListerUser(user.id));
            window.location.reload(false);}}>Bloquer</Button>
                      
            </div></th>
        </tr>
        
        </>))}
        </tbody>
      </Table>
      <ClientDetailsModal  showClient={showClient} handleCloseClient={handleCloseClient} user={Client} />
      </div>
      
   : <div className="d-flex align-items-center justify-content-center vh-100">
   <h3 className="text-center">Aucun client à la base de données pour le moment</h3>
  </div>
}
    </>
  );
}