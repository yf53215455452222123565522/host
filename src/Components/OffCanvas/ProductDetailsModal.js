import React from 'react'
import Button from 'react-bootstrap/Button';
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v1 as uuidv1 } from 'uuid';
export default function ProductDetailsModal({showProduct,handleCloseProduct,product}) {
    const settingsSlider = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
     }
    if(product)
  return (
    <Modal backdrop="true" show={showProduct} onHide={handleCloseProduct} size="sm" scrollable dialogClassName="modal-dialog-centered modal-sm border-0" contentClassName="modal-content border-0 rounded-4 h-75" >
      
      <Modal.Body>
        <Modal.Title>Produit : {product.id} </Modal.Title>
        
          <Table responsive>
            <tbody>
                <tr><th>Name</th><th>{product.name}</th></tr>
              <tr><th>Image</th><th><img src={product.image} className="img-thumbnail"/></th></tr>
              <tr><th>Marque</th><th>{product.marque} </th></tr>

              <tr><th>Description</th><th>{product.description}</th></tr>
              <tr><th>Slider</th><th>
                
              <Slider {...settingsSlider} style={{width:"150px",height:"200px"}} className="product-slider">

{ product.images.map(image => (
   <div className="product-item" key={uuidv1()}>
      <img src={image} alt=""  className="img-thumbnail" />
   </div>
))}
</Slider>
</th></tr>

<tr><th>Quantité stoke</th><th>{product.quantity} {product.unitQuantity} </th></tr>
<tr><th>Prix </th><th>{product.price} DH</th></tr>

<tr><th>Quantité commandé</th><th>{product.Ordredquantity} {product.unitQuantity}</th></tr>
<tr><th>Reduction </th><th>{product.reduction}%</th></tr>
<tr><th>Prix antérieur</th><th>{product.previousPrice} DH</th></tr>
<tr><th>Catégorie</th><th>{product.category.name}</th></tr>


 
              
            </tbody>
          </Table>
       
      </Modal.Body>
    </Modal>
  )
  else{
    <Modal backdrop="true" show={showProduct} onHide={handleCloseProduct} size="sm" scrollable dialogClassName="modal-dialog-centered modal-sm border-0" contentClassName="modal-content border-0 rounded-4 h-75" >
    Produit introuvable!
  </Modal>
  }
}