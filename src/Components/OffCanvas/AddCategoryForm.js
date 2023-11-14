import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import { v1 as uuidv1 } from 'uuid';
import { addCategory } from "../../Redux/category";
import { useDispatch, useSelector } from "react-redux";
export default function AddCategoryForm({
  showAddCategory,
  handleCloseAddCategory,
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




    const accessToken=useSelector(state=>state.users).data.access_token;
    const dispatch=useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCloseAddCategory();
    console.log(updateCategory);
    dispatch(addCategory(updateCategory));
    
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateCategory({ ...updateCategory, [name]: value });
  };
  const [updateCategory, setUpdateCategory] = useState({
    id:uuidv1(),
    name: "",
    image:"",
    bannerImage:"",
    user:accessToken
  });
  return (
    <>
      <Modal
        backdrop="True"
        show={showAddCategory}
        onHide={handleCloseAddCategory}
        size="sm"
        scrollable
        dialogClassName="modal-dialog-centered modal-sm border-0"
        contentClassName="modal-content border-0 rounded-4 h-75"
      >
        <ModalHeader className="border-0 px-4">
          <ModalTitle>
            <h5 className="fw-bold text-black mb-1">ajouter catégorie</h5>
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
                htmlFor="image"
                className="form-label text-uppercase text-muted small mb-0"
              >
                Image
              </label>
              {/* <textarea
               
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="image"
                name="image"
                placeholder="number"
                value={updateCategory.image}
                onChange={handleInputChange}
              /> */}
              <input type="file" name="image" className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2" onChange={handleFileUpload} />
            </div>
            <div className="mb-4">
            <label
                htmlFor="bannerImage"
                className="form-label text-uppercase text-muted small mb-0"
              >
                image de bannière
              </label>
              {/* <textarea
               
                className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                id="bannerImage"
                name="bannerImage"
                placeholder="number"
                value={updateCategory.bannerImage}
                onChange={handleInputChange}
              /> */}
              <input type="file" name="bannerImage" className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2" onChange={handleFileUpload} />

            </div>
            <button href="#" className="btn btn-primary w-100 text-uppercase btn-lg fw-bold col rounded-3" data-bs-dismiss="offcanvas" aria-label="Close" >Ajouter</button>

            
          </form>
        </ModalBody>
      </Modal>
    </>
  );

  }