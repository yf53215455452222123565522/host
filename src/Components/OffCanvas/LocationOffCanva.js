import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { useState } from 'react';
//import addAddressToUser from '../../Port/addAddressToUser';
import { useDispatch, useSelector } from 'react-redux';
import { addAddressToUser, deleteAddressToUser } from '../../Redux/user';
function LocationOffCanva({ showLocation, handleCloseLocation }) {
   const user = useSelector(state => state.users);
   const uid = user.data.id;
   const dispatch = useDispatch();
   const [addressString, setAddressString] = useState({
      id: uid,
      quartier: "",
      province: "",
      ville: ""
   });
   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setAddressString({ ...addressString, [name]: value });
   }
   const handleSubmit = (event) => {
      event.preventDefault();
      handleCloseLocation();
      console.log(addressString)
      dispatch(addAddressToUser(addressString))
      //addAddressToUser(addressString,user.data.id)
      //window.location.reload(false);
      
    }
    return (
        <Offcanvas placement="end" show={showLocation} onHide={handleCloseLocation} >
               <Offcanvas.Header className="offcanvas-header bg-primary d-flex align-items-center justify-content-start gap-3"   >
                  <a href="#" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseLocation}><i className="bi bi-arrow-left fs-5 text-white"></i></a>
                  <h6 className="offcanvas-title text-white m-0" id="locationLabel">Entrez le nom de votre quartier</h6>
               </Offcanvas.Header>

         <Offcanvas.Body>

            {/* <a href="#" className="input-group-text bg-transparent border-0 rounded-0 px-3" id="search"><i className="icofont-search"></i></a>
                     <input type="text" className="form-control bg-transparent border-0 rounded-0 ps-0" placeholder="Try J P Nagar, Andheri West etc.." aria-label="Try J P Nagar, Andheri West etc.." aria-describedby="search" />
                   */}
            <form className="border rounded p-4" onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
               <div className="mb-3">
                  <label htmlFor="quartier" className="form-label">Quartier</label>
                  <input type="text" className="form-control" id="quartier" name="quartier" placeholder="Quartier" value={addressString.quartier} onChange={handleInputChange} />
               </div>
               <div className="mb-3">
                  <label htmlFor="province" className="form-label">Province</label>
                  <input type="text" className="form-control" id="province" name="province" placeholder="Province" value={addressString.province} onChange={handleInputChange} />
               </div>
               <div className="mb-3">
                  <label htmlFor="ville" className="form-label">Ville</label>
                  <input type="text" className="form-control" id="ville" name="ville" placeholder="Ville" value={addressString.ville} onChange={handleInputChange} />
               </div>
               {/* <div>
    <label htmlFor="exampleFormControlAdress" className="form-label">Email Address</label>
    <input type="text" className="form-control" id="exampleFormControlAdress" name="address" placeholder="Address" value={updateUser.address} onChange={handleInputChange} />
  </div> */}
               <div className="d-grid gap-2">
               <button className="btn btn-primary text-uppercase fw-bold" data-bs-dismiss="offcanvas" aria-label="Close">Ajouter</button>
                  <button className="btn btn-secondary text-uppercase fw-bold" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseLocation}>Annuler</button>
                  
               </div>
            </form>




            <a href="#" className="link-dark" data-bs-dismiss="offcanvas" aria-label="Close">
               <div className="d-flex align-items-center gap-2 text-primary py-3 border-bottom">
                  <i className="icofont-location-arrow" onClick={handleCloseLocation}></i>
                  <p className="m-0">Use my Current location</p>
               </div>
            </a>

            <p className="text-black text-uppercase small">Saved Addresses</p>


            {user.data.address ? user.data.address.map(addressItem => (
               <div className="border-bottom py-3" key={addressItem}>
                  <div className="d-flex align-items-center justify-content-between">

                     <div className="w-75">
                        <a href="#" className="link-dark" data-bs-dismiss="offcanvas" aria-label="Close">

                           <div className="d-flex align-items-center gap-2 osahan-mb-1">
                              <i className="icofont-ui-home text-muted fs-6"></i>
                              <h6 className="fw-bold mb-0">Home</h6>


                           </div>
                           {addressItem.id ? <p className="text-muted text-truncate mb-0 ps-4">{addressItem.quartier}, {addressItem.province}, {addressItem.ville}</p> : <p className="text-muted text-truncate mb-0 ps-4">{addressItem}</p>}



                        </a>
                     </div>
                     <div className="d-flex justify-content-around" >

                        <div className='d-flex justify-content-end'>
                           <div className="d-flex align-items-center justify-content-between">
                              <i className="bi bi-trash text-primary" onClick={() => {
                                 console.log("delete " + JSON.stringify({ "id": uid, "idAddress": addressItem }))
                                 dispatch(deleteAddressToUser({ "id": uid, "idAddress": addressItem }))
                              }}></i>
                           </div> </div></div>
                  </div></div>
            )) : <Link to="/profile" onClick={handleCloseLocation}>go to profile to add your address </Link>}
            {/* {address? <p className="text-muted text-truncate mb-0 ps-4">{address}</p>:<Link to="/profile" onClick={handleCloseLocation}>go to profile to add your address </Link>}
                             */}

            {/* <a href="#" className="link-dark">
                           <div className="bg-light rounded-circle icon-sm">
                              <i className="icofont-share fs-5 text-dark-emphasis"></i>
                           </div>
                        </a> */}



            {/* <div className="py-3">
                     <p className="text-black text-uppercase small">Recent Searches</p>
                     <a href="#" className="link-dark" data-bs-dismiss="offcanvas" aria-label="Close">
                        <div className="d-flex align-items-center gap-2 osahan-mb-1">
                           <i className="icofont-location-pin text-muted fs-6"></i>
                           <h6 className="fw-bold mb-0">Ludhiana</h6>
                        </div>
                        <p className="text-muted text-truncate mb-0 ps-4">87997 Street, 784 Sector, Ludhiana, Punjab</p>
                     </a>
                  </div> */}
         </Offcanvas.Body>

      </Offcanvas>

   )
}

export default LocationOffCanva
