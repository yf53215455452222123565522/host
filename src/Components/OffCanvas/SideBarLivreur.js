import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link} from 'react-router-dom';
import './SideBar.css';

import '../../Assets/css/demo.css'
export default function SideBarLivreur({show,handleClose}) {
  return (
    <>
    <Offcanvas style={{width:'280px',position:"fixed",zIndex:9998,maxWidth:'100%',maxHeight:'100%',boxSizing: "border-box",transition: "transform .4s ease"}} show={show} onHide={handleClose} >
         <div className="nav-container SideBarContainer" >
      <div className='nav-content SideBarContent' >
      <ul className='second-nav firstnav' >
         <li className='osahan-user-profile bg-primary entetenav' >
            <div className="nav-item-wrapper" >
               <span className='nav-item formatspan' >
               <h6 className="fw-bold text-white mb-0">Livreur</h6>

               </span>
             
            </div>
         </li>
         
<Link to="/livreur" onClick={handleClose}>        <li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-grid me-3"></i>Commandes</span></div></li></Link> 
     <Link to="/historiqueLivreur" onClick={handleClose}>    <li><div className="nav-item-wrapper linkcontainer"><span   className="nav-item link-style" tabIndex="0" role="menuitem"><i className="bi bi-clock-history me-3"></i>Historique</span></div></li></Link>
  
         

      </ul>
   
    </div>

         </div>
      </Offcanvas>
    </>
  )
}
