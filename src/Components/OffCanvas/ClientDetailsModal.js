import React from 'react'
import Button from 'react-bootstrap/Button';
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table';


export default function ClientDetailsModal({showClient,handleCloseClient,user}) {
  if(user)
  return (
    
    <Modal backdrop="true" show={showClient} onHide={handleCloseClient} size="sm" scrollable dialogClassName="modal-dialog-centered modal-sm border-0" contentClassName="modal-content border-0 rounded-4 h-75" >
      
      <Modal.Body>
        <div className='d-flex align-items-center justify-content-center'>
        <img  src={user.picture} className=' img-thumbnail' referrerPolicy="no-referrer"/>

        </div>

          <Table responsive>
            <tbody>
            <tr><th>Nom</th><th>{user.name}</th></tr>

              <tr><th>Email</th><th>{user.email}</th></tr>
              <tr><th>Téléphone</th><th>{user.phone?user.phone:"indisponible"}</th></tr>
              <tr><th>Address</th><th>{user.address?
              <ul>
             { user.address.map((address)=>(
                <li>{address.quartier},{address.province},{address.ville}</li>
              ))}</ul>:"indisponible"}</th></tr>
              <tr><th>Avertissements</th><th>{user.avertissement}</th></tr>
              <tr><th>Bloqué</th><th>{user.blacklisted?"oui":"non"}</th></tr>
              
            </tbody>
          </Table>
          <div className='d-flex align-items-center justify-content-center'>        <Button variant="primary"><Link to={"/userOrders/" + user.id} className="text-white">Commandes</Link></Button>
</div>

      </Modal.Body>
    </Modal>
   
  );
  else{
    return (
      <Modal backdrop="true" show={showClient} onHide={handleCloseClient} size="sm" scrollable dialogClassName="modal-dialog-centered modal-sm border-0" contentClassName="modal-content border-0 rounded-4 h-75" >
        Client introuvable!
      </Modal>

      
    );
  }
}