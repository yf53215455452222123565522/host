import React,{ useEffect, useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";

import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../Redux/product';
import { v1 as uuidv1 } from 'uuid';
import { fetchCategories } from '../../Redux/category';


export default function AddProducts({
    showAddProduct,
    handleCloseAddProduct
}) {
    function handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onload = (upload) => {
          const base64String = upload.target.result;
         const attributeName=event.target.name;
          console.log(base64String);
          setUpdateCategory({ ...updateCategory, [attributeName]: base64String });
      
        };
      
        reader.readAsDataURL(file);
      }
    const categories=useSelector(state=>state.categories).data;
    const accessToken=useSelector(state=>state.users).data.access_token;
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchCategories())
    },[dispatch])
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCloseAddProduct();
    console.log(updateCategory);
    dispatch(addProduct(updateCategory));
    window.location.reload(false);
    
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateCategory({ ...updateCategory, [name]: value });
  };
  const [updateCategory, setUpdateCategory] = useState({
    id:uuidv1(),
    name: "",
    marque:"",
    image : "",
    description : "",
    quantity:"",
    Ordredquantity:0,
    images1:"",
    images2:"",
    images3:"",
    unitQuantity:"",
    reduction:parseFloat(0),
    previousPrice:0.0,
    price:"",
    category : null, 
    user:accessToken
  });

  return (
    <>
      <Modal
        backdrop="True"
        show={showAddProduct}
        onHide={handleCloseAddProduct}
        size="sm"
        scrollable
        dialogClassName="modal-dialog-centered modal-sm border-0"
        contentClassName="modal-content border-0 rounded-4 h-75"
      >
        <ModalHeader className="border-0 px-4">
          <ModalTitle>
            <h5 className="fw-bold text-black mb-1">Ajouter produit</h5>
          </ModalTitle>
        </ModalHeader>

        <ModalBody className="border-top p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="exampleFormControlNumber"
                className="form-label text-uppercase text-muted small mb-0"
              >
                Nom
              </label>
              <input
                type="text"
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="exampleFormControlNumber"
                name="name"
                placeholder="nom"
                value={updateCategory.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="marque"
                className="form-label text-uppercase text-muted small mb-0"
              >
                Marque
              </label>
              <input
               type="text"
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="marque"
                name="marque"
                placeholder="marque"
                value={updateCategory.marque}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="form-label text-uppercase text-muted small mb-0"
              >
                Image
              </label>
              {/* <textarea
               
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="image"
                name="image"
                placeholder="image"
                value={updateCategory.image}
                onChange={handleInputChange}
              /> */}
            <input type="file" name="image" className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2" onChange={handleFileUpload} />

            </div>
            <div className="mb-4">
            <label
                htmlFor="description"
                className="form-label text-uppercase text-muted small mb-0"
              >
                description
              </label>
              <input
               type="text"
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="description"
                name="description"
                placeholder="description"
                value={updateCategory.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="images1"
                className="form-label text-uppercase text-muted small mb-0"
              >
                image carossel1
              </label>
              {/* <textarea
               
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="images1"
                name="images1"
                placeholder="images1"
                value={updateCategory.images1}
                onChange={handleInputChange}
              /> */}
                <input type="file" name="images1" className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2" onChange={handleFileUpload} />

            </div>
            <div className="mb-4">
              <label
                htmlFor="images2"
                className="form-label text-uppercase text-muted small mb-0"
              >
                image carossel2
              </label>
              {/* <textarea
               
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="images2"
                name="images2"
                placeholder="images2"
                value={updateCategory.images2}
                onChange={handleInputChange}
              /> */}
                <input type="file" name="images2" className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2" onChange={handleFileUpload} />

            </div>
            <div className="mb-4">
              <label
                htmlFor="images3"
                className="form-label text-uppercase text-muted small mb-0"
              >
                image carossel3
              </label>
              {/* <textarea
               
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="images3"
                name="images3"
                placeholder="images3"
                value={updateCategory.images3}
                onChange={handleInputChange}
              /> */}
            <input type="file" name="images3" className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2" onChange={handleFileUpload} />

            </div>
            <div className="mb-4">
            <label
                htmlFor="quantity"
                className="form-label text-uppercase text-muted small mb-0"
              >
                quantité
              </label>
              <input
               type="text"
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="quantity"
                name="quantity"
                placeholder="quantité"
                value={updateCategory.quantity}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mb-4">
            <label
                htmlFor="unitQuantity"
                className="form-label text-uppercase text-muted small mb-0"
              >
                Quantité unitaire
              </label>
              <input
               type="text"
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="unitQuantity"
                name="unitQuantity"
                placeholder="Quantité unitaire"
                value={updateCategory.unitQuantity}
                onChange={handleInputChange}
              />
            </div>
            
            
            <div className="mb-4">
            <label
                htmlFor="price"
                className="form-label text-uppercase text-muted small mb-0"
              >
                prix
              </label>
              <input
               type="text"
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="price"
                name="price"
                placeholder="prix"
                value={updateCategory.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
            <label
                htmlFor="category"
                className="form-label text-uppercase text-muted small mb-0"
              >
                catégorie
              </label>
              {/* <select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select> */}
              <select
               type="text"
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="category"
                name="category"
                placeholder="catégorie"
                value={updateCategory.category}
                onChange={handleInputChange}
              >
                {categories.map((category)=>(
                    <option value={JSON.stringify(category)}> {category.name}</option>
                ))}
              </select>
            </div>
            <button href="#" className="btn btn-primary w-100 text-uppercase btn-lg fw-bold col rounded-3" data-bs-dismiss="offcanvas" aria-label="Close" >Add</button>

            
          </form>
        </ModalBody>
      </Modal>
    </>
  )
}