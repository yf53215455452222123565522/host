import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../OffCanvas/SideBar';
import SearchProductOffCanva from '../OffCanvas/SearchProductOffCanva';
function SearchNavBar() {
    const [showSearchPage, setShowSearchPage] = useState(false);
   const handleShowSearchPage = () => setShowSearchPage(true);
   const handleCloseSeachPage = () => setShowSearchPage(false);
   const [showNavBar, setShowNavBar] = useState(false);
   const handleShowNavBar = () => setShowNavBar(true);
   const handleCloseNavBar = () => setShowNavBar(false);
    return (
    <>
     <div className="d-flex align-items-center gap-2 ms-auto">
                  <Link onClick={handleShowSearchPage} className="link-dark bg-light rounded-circle user-icon" data-bs-toggle="offcanvas" data-bs-target="#searchoffcanvas"
                     aria-controls="searchoffcanvas"><i
                        className="icofont-search-1 fs-6"></i></Link>
                  <Link className="toggle" onClick={handleShowNavBar}>
                     <b className="link-dark bg-light rounded-circle user-icon">
                        <i className="bi bi-list d-flex m-0 h4"></i>
                     </b>
                  </Link>
     </div>
     <SearchProductOffCanva showSearchPage={showSearchPage} handleCloseSearchPage={handleCloseSeachPage} />         
    <SideBar show={showNavBar} handleClose={handleCloseNavBar} /> 
    </>
   
        
    )
}

export default SearchNavBar
