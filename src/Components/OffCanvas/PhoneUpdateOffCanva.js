import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
//import UpdateUser from '../../Port/updateUser';
import { useDispatch, useSelector } from 'react-redux';
import { updatePhoneUser } from '../../Redux/user';
export default function PhoneUpdateOffCanva({ showProfileEditPage, handleCloseProfileEditPage }) {
   const user = useSelector(state => state.users);
   const dispatch = useDispatch();
   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUpdateUser({ ...updateUser, [name]: value });
   }
   const handleSubmit = (event) => {
      event.preventDefault();
      handleCloseProfileEditPage();
      //UpdateUser(updateUser, user.data.id);
      dispatch(updatePhoneUser(updateUser))
      window.location.reload(false);

   }
   const [updateUser, setUpdateUser] = useState({
      id: user.data.id,
      phone: ""
   });

   return (
      <Offcanvas placement="end" show={showProfileEditPage} onHide={handleCloseProfileEditPage} className="offcanvas offcanvas-end bg-white border-0" tabIndex="-1" id="editaccount" aria-labelledby="editaccountLabel">

         <Offcanvas.Header className="offcanvas-header bg-primary shadow-sm d-flex align-items-center justify-content-start gap-3">
            <a href="#" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseProfileEditPage}><i className="bi bi-arrow-left text-white fs-5"></i></a>
            <Offcanvas.Title className="offcanvas-title text-uppercase text-white fw-bold" id="editaccountLabel">Modifier compte</Offcanvas.Title>
         </Offcanvas.Header><form onSubmit={handleSubmit}>
            <Offcanvas.Body className="offcanvas-body">


               <div className="mb-4">
                  <label htmlFor="exampleFormControlNumber" className="form-label text-uppercase text-muted small mb-0">N° Téléphone</label>
                  <input type="text" pattern="0[0-9]{9}|\+212[0-9]{9}|\+212-[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}|0[0-9]{1}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}|0[0-9]{1} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"

                     id="exampleFormControlNumber" name="phone" placeholder="N° Téléphone" value={updateUser.phone} onChange={handleInputChange}

                     title="N° téléphone doit être comme l'un des exemples suivant: (0666666666) (+212666666666) (+212-666-66-66-66) (06-66-66-66-66) (06 66 66 66 66) " />
               </div>
               {/* <div>
                  <label htmlFor="exampleFormControlAdress" className="form-label text-uppercase text-muted small mb-0">Email
                  Address</label>
                 <input type="text" className="form-control bg-transparent border-0 rounded-0 border-bottom px-0 py-2"
                        id="exampleFormControlAdress" name="address" placeholder="address" value={updateUser.address} onChange={handleInputChange}/>
               </div> */}


            </Offcanvas.Body>

            <div className="offcanvas-footer shadow-sm d-flex gap-3">
               <button href="#" className="btn bg-white shadow-sm border btn-light text-primary w-100 text-uppercase btn-lg fw-bold col" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseProfileEditPage}>Quitter</button>
               <button href="#" className="btn btn-primary w-100 text-uppercase btn-lg fw-bold col rounded-3" data-bs-dismiss="offcanvas" aria-label="Close" >Changer</button>
            </div>
         </form>
      </Offcanvas>
   )
}
