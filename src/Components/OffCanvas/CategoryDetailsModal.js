import React from 'react'
import Button from 'react-bootstrap/Button';
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table';


export default function CategoryDetailsModal({showCategory,handleCloseCategory,category}) {
    if(category)
  return (
    <Modal backdrop="true" show={showCategory} onHide={handleCloseCategory} size="sm" scrollable dialogClassName="modal-dialog-centered modal-sm border-0" contentClassName="modal-content border-0 rounded-4 h-75" >
      
      <Modal.Body>
        <Modal.Title>{category.name}</Modal.Title>
        
          <Table responsive>
            <tbody>
              <tr><th>Image</th><th><img src={category.image} className="img-thumbnail"/></th></tr>
              <tr><th>Image de bannière</th><th><img src={category.bannerImage} className="img-thumbnail"/></th></tr>
              
              
            </tbody>
          </Table>
       
      </Modal.Body>
    </Modal>
  )
  else{
    <Modal backdrop="true" show={showCategory} onHide={handleCloseCategory} size="sm" scrollable dialogClassName="modal-dialog-centered modal-sm border-0" contentClassName="modal-content border-0 rounded-4 h-75" >
    Category not found!
  </Modal>
  }
}