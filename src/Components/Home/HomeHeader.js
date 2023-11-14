import React, { useState ,useEffect} from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



import { fetchUser } from '../../Redux/user';
import Loader from '../Loader';
import ErrorPage from '../ErrorPage';
import SearchProductOffCanva from '../OffCanvas/SearchProductOffCanva';
import SideBar from '../OffCanvas/SideBar';
import LocationOffCanva from '../OffCanvas/LocationOffCanva';


export default function HomeHeader() {
    const [showNavBar,setShowNavBar]=useState(false);
   const handleShowNavBar=()=>setShowNavBar(true);
   const handleCloseNavBar=()=>setShowNavBar(false);
   const [showLocation, setShowLocation] = useState(false);
   const handleCloseLocation = () => setShowLocation(false);
   const handleShowLocation = () => setShowLocation(true);
   const [showSearch, setShowSearch] = useState(false);
   const handleCloseSearch = () => setShowSearch(false);
   const handleShowSearch = () => setShowSearch(true);

   const handleRetry = () => window.location.reload(false);

 
   const user=useSelector(state=>state.users);
   

    return (
        <>
          <div className="homepage-navbar bg-light shadow mb-auto p-3 bg-primary">
               <div className="d-flex align-items-center">
                  <a  className="link-dark text-truncate d-flex align-items-center gap-2" data-bs-toggle="offcanvas" data-bs-target="#location"
                     aria-controls="location" onClick={handleShowLocation}>
                     <i className="icofont-clock-time fs-2 text-white"></i>
                     <span>
                       <h6 className="fw-bold text-white mb-0">Livraisons en instants</h6>
                       {user.data.address[0]? <p className="text-white-50 text-truncate d-inline-block mb-0 w-75 align-bottom">{user.data.address[0].quartier},{user.data.address[0].province},{user.data.address[0].ville}</p>: <p className="text-white-50 text-truncate d-inline-block mb-0 w-75 align-bottom">Ajoutez votre address</p>}
                     </span>
                  </a>
                  <div className="d-flex align-items-center gap-2 ms-auto">
                     <Link to="/profile" className="link-dark">
                        <div className="bg-dark bg-opacity-75 rounded-circle user-icon"><img src={user.data.picture}className="rounded-pill img-fluid" referrerPolicy="no-referrer" /></div>
                     </Link>
                     <a className="toggle"  onClick={handleShowNavBar} >
                        <b className="bg-dark bg-opacity-75 rounded-circle user-icon">
                           <i className="bi bi-list d-flex m-0 h4 text-white"></i>
                        </b>
                     </a>
                  </div>
               </div>
               <div className="pt-3">

                  <a href="#" data-bs-toggle="offcanvas" data-bs-target="#searchoffcanvas"
                     aria-controls="searchoffcanvas">
                     <div className="input-group bg-white rounded-3 shadow-sm py-1" onClick={handleShowSearch}>
                        <input type="text" className="form-control bg-transparent border-0 rounded-0 px-3"
                           placeholder="Cherchez un produit" aria-label="Search for atta, dal, coke and more"
                           aria-describedby="search" />
                        <span className="input-group-text bg-transparent border-0 rounded-0 pe-3" id="search">
                            <i className="icofont-search-1"></i></span>
                     </div>
                  </a>
               </div>
            </div>

            <SearchProductOffCanva showSearchPage={showSearch} handleCloseSearchPage={handleCloseSearch}/>
            <SideBar show={showNavBar} handleClose={handleCloseNavBar}/>
            <LocationOffCanva showLocation={showLocation}   handleCloseLocation={handleCloseLocation} ></LocationOffCanva>


        </>
    )
}