import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ProfileImage from "../../Assets/img/delivery-boy.jpg";
import { Link,NavLink } from 'react-router-dom';
import './SideBar.css';

import '../../Assets/css/demo.css'
import UserInfo from '../Common/UserInfo';

function SideBarAdmin({show,handleClose}) {


  return (
    <>

      <Offcanvas style={{width:'280px',position:"fixed",zIndex:9998,maxWidth:'100%',maxHeight:'100%',boxSizing: "border-box",transition: "transform .4s ease"}} show={show} onHide={handleClose} >
         <div className="nav-container SideBarContainer" >
      <div className='nav-content SideBarContent' >
      <ul className='second-nav firstnav' >
         <li className='osahan-user-profile bg-primary entetenav' >
            <div className="nav-item-wrapper" >
               <span className='nav-item formatspan' >
               <h6 className="fw-bold text-white mb-0">Admin</h6>

               </span>

            </div>
         </li>
         <Link to="/admin" onClick={handleClose}><li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-house me-3"></i>Accueil</span></div></li></Link>

<Link to="/categories" onClick={handleClose}>        <li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-grid me-3"></i>Catégories</span></div></li></Link>
     <Link to="/orders"onClick={handleClose}>    <li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-basket me-3"></i>Commandes</span></div></li></Link>
  <Link to="/products"onClick={handleClose}>       <li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-receipt me-3"></i>Produits</span></div></li></Link>
         <Link to="/users"onClick={handleClose}><li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-person me-3"></i>Clients</span></div></li></Link>

         <Link to="/payments"onClick={handleClose}><li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-wallet me-3"></i>Paiements</span></div></li></Link>


         

      </ul>
   
    </div>

         </div>
      </Offcanvas>
      
    </>
  );
}

export default SideBarAdmin