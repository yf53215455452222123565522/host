import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ProfileImage from "../../Assets/img/delivery-boy.jpg";
import { Link,NavLink } from 'react-router-dom';
import './SideBar.css';

import '../../Assets/css/demo.css'
import UserInfo from '../Common/UserInfo';

function SideBar({show,handleClose}) {
    

  return (
    <>
     
      <Offcanvas style={{width:'280px',position:"fixed",zIndex:9998,maxWidth:'100%',maxHeight:'100%',boxSizing: "border-box",transition: "transform .4s ease"}} show={show} onHide={handleClose} >
         <div className="nav-container SideBarContainer" >
      <div className='nav-content SideBarContent' >
      <ul className='second-nav firstnav' >
         <li className='osahan-user-profile bg-primary entetenav' >
            <div className="nav-item-wrapper" >
               <span className='nav-item formatspan' >
               <UserInfo/>
               </span>
             
            </div>
         </li>
         <Link to="/home" onClick={handleClose}><li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-house me-3"></i>Accueil</span></div></li></Link>
         
<Link to="/listing" onClick={handleClose}>        <li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-grid me-3"></i>Catalogue</span></div></li></Link>
  <Link to="/cart"onClick={handleClose}>       <li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-basket me-3"></i>Pannier</span></div></li></Link>
         {/* <Link to="/paymentOption"onClick={handleClose}><li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-credit-card me-3"></i>Payment Option</span></div></li></Link> */}
         {/* <Link onClick={handleClose} to="/paymentDetails"> <li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-stopwatch me-3"></i>Payment Time</span></div></li></Link> */}
         {/* <Link onClick={handleClose} to="/orderReceived"><li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-check-circle me-3"></i>Order Received</span></div></li></Link> */}
         {/* <Link onClick={handleClose} to="/trackOrder"><li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-truck me-3"></i>Track Order</span></div></li></Link> */}
         {/* <Link onClick={handleClose} to="/trackDeliveryBoy"> <li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-person-vcard me-3"></i>Suivi de livreur</span></div></li></Link> */}
         <Link onClick={handleClose} to="/profile"><li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-person me-3"></i>Profile</span></div></li></Link>
         <Link onClick={handleClose} to="/preferenceProducts" ><li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-heart me-3"></i>Préference</span></div></li></Link>
      </ul>
      <ul  role="menu" aria-level="1" className="secondnav ">
        <NavLink onClick={handleClose} to="/home" className="autof"> <li className="home "  ><div  className="autof nav-item-wrapper secondnavitem"><span  className="text-primary nav-item" tabIndex="0" role="menuitem">
                  <p className="h5 m-0"><i className="bi bi-house"></i></p>
                  Accueil
               </span></div></li></NavLink>
             <NavLink onClick={handleClose} to="/cart" className="autof">  <li className="cart" ><div className="autof nav-item-wrapper secondnavitem blackitem"><span  style={{color:"black"}} className="nav-item" tabIndex="0" role="menuitem">
                  <p className="h5 m-0"><i className="bi bi-basket"></i></p>
                  Pannier
               </span></div></li></NavLink>
              <NavLink onClick={handleClose} to="/profile" className="autof"> <li className="profile" ><div  className="autof nav-item-wrapper secondnavitem blackitem"><span  style={{color:"black"}} className="nav-item" tabIndex="0" role="menuitem">
                  <p className="h5 m-0"><i className="bi bi-person"></i></p>
                  Profile
               </span></div></li></NavLink></ul>
    </div>

         </div>
      </Offcanvas>
      
    </>
  );
}

export default SideBar
