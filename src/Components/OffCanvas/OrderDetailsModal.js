import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table';

export default function OrderDetailsModal({showOrder,handleCloseOrder,order}) {
  if(order)
    return (
        <Modal backdrop="true" show={showOrder} onHide={handleCloseOrder} size="sm" scrollable dialogClassName="modal-dialog-centered modal-sm border-0" contentClassName="modal-content border-0 rounded-4 h-75" >
      
        <Modal.Body>
          <Modal.Header><Modal.Title>Détails commande : {order.id}</Modal.Title></Modal.Header>
          
          
            <Table responsive>
              <tbody>
                <tr><th>Etat</th><th>{order.state.state}</th></tr>
                <tr><th>Client</th><th>{order.user.name}</th></tr>
                <tr><th>Date</th><th>{order.dateCommande? order.dateCommande:"indisponible"}</th></tr>
                <tr><th>Préparateur</th><th>{order.preparateurDTO? order.preparateurDTO.firstname+" "+order.preparateurDTO.lastname:"indisponible"}</th></tr>
                <tr><th>Détails</th><th>
                <Table responsive>
                <thead><tr><th>ID Produit</th><th>nom</th> <th>quantité</th></tr></thead>
                  <tbody>{order.items.map((item)=>(
              <tr key={uuidv4()} className="mb-1">
                
                

              <th> {item.product.id}</th>
              <th>{item.product.name} </th>
              <th> {item.quantity} ({item.product.unitQuantity}) .</th>
              </tr>

            ))}
            </tbody> </Table></th></tr>
                
              </tbody>
            </Table>
         
          {/* <Button variant="primary"><Link to={"/userOrders/" + user.id} className="text-white">Commandes</Link></Button> */}
        </Modal.Body>
      </Modal>
  )
  else{
    <Modal backdrop="true" show={showOrder} onHide={handleCloseOrder} size="sm" scrollable dialogClassName="modal-dialog-centered modal-sm border-0" contentClassName="modal-content border-0 rounded-4 h-75" >
   Commande introuvable!
  </Modal>
  }
}