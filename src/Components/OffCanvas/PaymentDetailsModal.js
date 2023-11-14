import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table';

export default function PaymentDetailsModal({showPayment,handleClosePayment,payment}) {
    if(payment)
    return (
        <Modal backdrop="true" show={showPayment} onHide={handleClosePayment} size="sm" scrollable dialogClassName="modal-dialog-centered modal-sm border-0" contentClassName="modal-content border-0 rounded-4 h-75" >
      
        <Modal.Body>
          <Modal.Header><Modal.Title>Détails Paiment : {payment.id}</Modal.Title></Modal.Header>
          
          
            <Table responsive>
              <tbody>
                <tr><th>Client</th><th><ul><li>{payment.user.name}</li><li>{payment.user.email}</li><li>{payment.user.phone? payment.user.phone:"indisponible"}</li></ul></th></tr>
                <tr><th>Prix total</th><th>{payment.totalPrice}</th></tr>
               

          
                
              </tbody>
            </Table>
         
          {/* <Button variant="primary"><Link to={"/userOrders/" + user.id} className="text-white">Commandes</Link></Button> */}
        </Modal.Body>
      </Modal>
  )
  else{
    <Modal backdrop="true" show={showPayment} onHide={handleClosePayment} size="sm" scrollable dialogClassName="modal-dialog-centered modal-sm border-0" contentClassName="modal-content border-0 rounded-4 h-75" >
    Order not found!
  </Modal>
  }
}
