import React, { useEffect, useState } from 'react'
import { Offcanvas } from 'react-bootstrap'

export default function LocationDilevryOffCanva({ showLocation, handleCloseLocation }) {
   const [address, setAddress] = useState(null);
   const [location, setLocation] = useState(null);
   useEffect(() => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
               // latitude: position.coords.latitude,
               // longitude: position.coords.longitude,
            });
            // console.log('location:'+location.latitude)
            // console.log('location:'+location.longitude)
         });
      } else {
         alert('Geolocation is not supported by this browser.');
      }
   }, []);

   useEffect(() => {
      if (location) {
         const API_KEY = 'AIzaSyBTjcnev7A7BNIib9zqQlTr2bKsSD3_tYU';
         const GEOCODING_API = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${API_KEY}`;

         fetch(GEOCODING_API) 
            .then((response) => response.json())
            .then((data) => {
               if (data.results.length > 0) {
                  setAddress(data.results[0].formatted_address);
                  console.log('adress: '+address)
               }
            });
      }
   }, [location]);

   return (
      <div>
         <Offcanvas placement="bottom" show={showLocation} onHide={handleCloseLocation} className="bg-light border-0 h-100">
            <Offcanvas.Header className='bg-transparent p-0'>
               <a href="#" className="bg-primary text-white rounded-circle shadow-sm icon-sm m-3 position-absolute z-0 top-0"
                  data-bs-dismiss="offcanvas" aria-label="Close" style={{ zIndex: 10000002 }} onClick={handleCloseLocation}>
                  <i className="bi bi-arrow-left fs-5"></i>
               </a>
               <div className="ratio ratio-4x3 postion-relative z-n1">
                  <iframe title="position" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501748.249032638!2d73.16727014620984!3d31.00740966166808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1674302805615!5m2!1sen!2sin" className="border-0 w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
               <div className="d-flex align-items-center bg-light p-3 gap-3 py-3 border-top border-bottom">
                  <i className="icofont-map-pins icofont-2x text-primary"></i>
                  <div className="text-truncate">
                     <h6 className="mb-0">Livraison à <span className="fw-bold">Domicile</span></h6>
                     <p className="text-muted text-truncate m-0">H.No. 2834 Street, 784 Sector, Ludhiana, Punjab</p>
                     <div>
                        {address[0] ? (
                           <p>Your current address is: {address[0].quartier}</p>
                        ) : (
                           <p>Loading...</p>
                        )}
                     </div>
                  </div>
                  <div className="ms-auto">
                     <a href="#" className="btn btn-light btn-sm bg-white border text-primary fw-bold text-uppercase">Changer</a>
                  </div>
               </div>
               <form className="p-3">
                  <div className="mb-3">
                     <input type="text" className="form-control bg-transparent border-0 rounded-0 border-bottom py-2 px-0"
                        placeholder="Enter House/Flat No." />
                  </div>
                  <div className="mb-3">
                     <input type="text" className="form-control bg-transparent border-0 rounded-0 border-bottom py-2 px-0"
                        placeholder="Enter Landmark" />
                  </div>
                  <div className="mb-3">
                     <div className="d-flex gap-3 align-items-center justify-content-between">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1d" autocomplete="off" checked />
                        <label className="btn btn-outline-dark col py-2 rounded-2" for="btnradio1d"><i className="icofont-ui-home me-2"></i>Domicile</label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2d" autocomplete="off" />
                        <label className="btn btn-outline-dark col py-2 rounded-2" for="btnradio2d"><i className="icofont-bag-alt me-2"></i>Travail</label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3d" autocomplete="off" />
                        <label className="btn btn-outline-dark col py-2 rounded-2" for="btnradio3d"><i className="icofont-location-pin me-2"></i>Autres</label>
                     </div>
                  </div>
               </form>
            </Offcanvas.Body>
            <div className="offcanvas-footer">
               <a href="#" className="btn btn-success text-uppercase w-100 btn-lg fw-bold" data-bs-dismiss="offcanvas"
                  aria-label="Close" onClick={handleCloseLocation}>Sauvegarder et continuer</a>
            </div>
         </Offcanvas>
      </div>
   )
}
