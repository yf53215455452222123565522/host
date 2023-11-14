import React ,{ useState }from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import { setReduction } from '../../Redux/product';


export default function SetReductionForm(
    {idProduct,
    showReductionProduct,
    handleCloseReductionProduct}
) {
    const accessToken=useSelector(state=>state.users).data.access_token;
    const dispatch=useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCloseReductionProduct();
        console.log(updatedCategory);
        console.log(idProduct);
        dispatch(setReduction({idProduct,updatedCategory}));
        //dispatch(updateCategory({idCategory,updatedCategory}));
        //window.location.reload(false)
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedCategory({ ...updatedCategory, [name]: value });
    };
    const [updatedCategory, setUpdatedCategory] = useState({
   
        
        user:accessToken
    });
  return (
    <>
    <Modal
      backdrop="True"
      show={showReductionProduct}
      onHide={handleCloseReductionProduct}
      size="sm"
      scrollable
      dialogClassName="modal-dialog-centered modal-sm border-0"
      contentClassName="modal-content border-0 rounded-4 h-75"
    >
      <ModalHeader className="border-0 px-4">
        <ModalTitle>
          <h5 className="fw-bold text-black mb-1">Réduction produit </h5>
        </ModalTitle>
      </ModalHeader>
      <ModalBody className="border-top p-4">
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label
              htmlFor="reduction"
              className="form-label text-uppercase text-muted small mb-0"
            >
              Réduction en pourcentage
            </label>
            <input
              type="text"
              className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
              id="reduction"
              name="reduction"
              placeholder="réduction"
              value={updatedCategory.reduction}
              onChange={handleInputChange}
            />
          </div>
          <button href="#" className="btn btn-primary w-100 text-uppercase btn-lg fw-bold col rounded-3" data-bs-dismiss="offcanvas" aria-label="Close" >Appliquer</button>

        </form>
        </ModalBody>
    </Modal>
    </>
  )
}