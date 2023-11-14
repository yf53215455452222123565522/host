import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryNavList from './CategoryNavList';
import ProductListing from './ProductListing';

function CategoryList() {
   const categoriesR = useSelector(state => state.categoryProduct);
   return (
      <div className="vh-100 my-auto overflow-auto p-1">
         <div className="d-flex gap-1">
            <CategoryNavList />
            <div className="listing-right">
               <div className="bg-white rounded shadow-sm">
                  <div className="tab-content" id="v-pills-tabContent">
                     {categoriesR.data && categoriesR.data.map((category) => (
                        <div key={category.category.id} className={`tab-pane fade show ${categoriesR.category && category.category.id === categoriesR.category.category.id && 'active'}`} id={`v-pills-${category.category.id}`} role="tabpanel" aria-labelledby={`v-pills-${category.category.id}-tab`} tabIndex="0">
                           <div className="border-bottom p-2">
                              <div className={`rounded-3 ps-3 shadow-sm d-flex gap-1 align-items-center ${(categoriesR.data.indexOf(category) % 2) && 'bg-success'}  ${(categoriesR.data.indexOf(category) % 2 === 0) && 'bg-warning'}  bg-gradient justify-content-between`}>
                                 <div a="py-3">
                                    <small className={`${(categoriesR.data.indexOf(category) % 2) && 'text-white-50'}  ${(categoriesR.data.indexOf(category) % 2 === 0) && 'text-primary'}  d-flex align-items-center`}><i className="bi bi-basket me-1 d-flex"></i> Jusqu'à</small>
                                    <h3 className={`fw-bold ${(categoriesR.data.indexOf(category) % 2) && 'text-warning'}  ${(categoriesR.data.indexOf(category) % 2 === 0) && 'text-success'}    mb-0`}>20% OFF</h3>
                                    <p className={`${(categoriesR.data.indexOf(category) % 2) && 'text-white'}  ${(categoriesR.data.indexOf(category) % 2 === 0) && 'text-dark'} mb-2`}>{category.category.name}</p>
                                    <Link to="/listing" className="btn btn-light  fw-bold rounded-3 shadow-sm btn-sm border-0">Acheter</Link>
                                 </div>
                                 <img src={category.category.image} alt="" className="img-fluid mt-auto osahan-offer-banner-2" />
                              </div> 
                              <p className="text-muted pt-2 mb-0"><span className="fw-bold text-dark">{category.products.length} articles</span> de {category.category.name}
                              </p>
                           </div>
                            <div className="row border-bottom g-0">
                              {category.products &&
                                 category.products.map((product) => {
                                    const stockAvailable = product.quantity - product.Ordredquantity;
                                    const isStockAvailable = stockAvailable > 0;

                                    return (
                                       <div
                                          key={product.id}
                                          className={`col-6 border ${category.products.indexOf(product) % 2 ? "border-end" : ""}`}
                                       >
                                          <ProductListing product={product} isStockAvailable={isStockAvailable} />
                                       </div>
                                    );
                                 })
                              }

                           </div> 
                        </div>
                     )
                     )
                     }

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CategoryList
