import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByName } from '../../Redux/productSearch';
import ProductListing from '../Listing/ProductListing';


function SearchProductOffCanva({ showSearchPage, handleCloseSearchPage }) {
   const [keyWord, setKeyWord] = useState("");
   const products = useSelector(state => state.productsSearch);
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchProductByName(keyWord))
   }, [dispatch, keyWord])


   return (
      <Offcanvas placement="bottom" show={showSearchPage} onHide={handleCloseSearchPage} className="offcanvas offcanvas-bottom border-0 h-100" tabIndex="-1" id="searchoffcanvas"
         aria-labelledby="searchoffcanvasLabel" backdrop="true">
         <Offcanvas.Header className="offcanvas-header bg-primary ">
            <div className="input-group bg-white rounded-3 border p-0">
               <button className="input-group-text bg-transparent border-0 rounded-0" id="search"
                  data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseSearchPage}>
                  <i className="bi bi-arrow-left fs-5"></i>
               </button>
               <input type="text" className="form-control bg-transparent border-0 rounded-0"
                  placeholder="Recherchez un de nos produits" aria-label="Search for groceries and more"
                  aria-describedby="search" value={keyWord} onChange={(e) => {
                     setKeyWord(e.target.value);

                  }} />
            </div>
         </Offcanvas.Header>
         <Offcanvas.Body className="offcanvas-body p-0">
            <div className="row g-0">
               <div className="col-12 border-bottom">
                  { }
                  <h6 className="px-3 pb-3 m-0">{products.data && products.data.length} résultats sur <span className="fw-bold">"{keyWord}"</span></h6>
               </div>
            </div>
            <div className="row border-bottom g-0">

               {products.data && products.data.map((product) => {
                  const stockAvailable = product.quantity - product.Ordredquantity;
                  const isStockAvailable = stockAvailable > 0;
                  return (

                     <div key={product.id} className="col-6 border-end">
                        <div className="card bg-transparent border-0 p-3">
                           <ProductListing product={product} isStockAvailable={isStockAvailable} />
                        </div>
                     </div>
                  )
               })}
            </div>
         </Offcanvas.Body>
      </Offcanvas>
   );
}

export default SearchProductOffCanva
