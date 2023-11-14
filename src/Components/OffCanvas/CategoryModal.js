import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import React, {  useEffect } from 'react';
import CategoryItemModal from './CategoryItemModal';
import { fetchCategories } from '../../Redux/category';

function CategoryModal({ showCategories, handleCloseCategories }) {
   
   const categories = useSelector(state => state.categories);
   

   return (

      <Modal backdrop="true" show={showCategories} onHide={handleCloseCategories} size="sm" scrollable dialogClassName="modal-dialog-centered modal-sm border-0" contentClassName="modal-content border-0 rounded-4 h-75" >

         <ModalHeader className="border-0 px-4">
            <ModalTitle >
               <h5 className="fw-bold text-black mb-1">Catalogue par catégories</h5>
               <p className="mb-0">{Object.keys(categories.data).length} categories</p>
            </ModalTitle>
         </ModalHeader>

         <ModalBody className="border-top p-4" >
            <div className="row row-cols-3 g-3">

               {categories.data && categories.data.map((category) => (
                  <CategoryItemModal category={category} handleCloseCategories={handleCloseCategories} key={category.id} />

               ))}
            </div>
         </ModalBody>

      </Modal>

   )
}
export default CategoryModal
