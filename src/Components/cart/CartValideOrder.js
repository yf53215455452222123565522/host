import React, { useState, useEffect } from 'react';
import LocationDilevryOffCanva from '../OffCanvas/LocationDilevryOffCanva';
import SelectDeliveryOffCanva from '../OffCanvas/SelectDeliveryOffCanva';
import ValideOrder from './ValideOrder';
import { useSelector } from 'react-redux';
export default function CartValideOrder({ subtotal }) {
    const [showLocation, setShowLocation] = useState();
    // const handleShowLocation = () => setShowLocation(true);
    const handleCloseLocation = () => setShowLocation(false);

    const [showDeliveryOptions, setDeliveryOptions] = useState(false);
    // const handleShowDeliveryOptions = () => setDeliveryOptions(true);
    const handleCloseDeliveryOptions = () => setDeliveryOptions(false);







    const user = useSelector(state => state.users);

    const userAdress = user.data.address;

    useEffect(() => {
        console.log("test" + subtotal);
    }, []);

    return (
        <div className="mt-auto shadow-sm border-top">
            <div className="bg-light d-flex align-items-center border-bottom justify-content-between px-3 py-2">
                <p className="m-0">Total: {subtotal} DH</p>
            </div>
            <div className="bg-white p-3">
                <div className="d-flex align-items-center justify-content-between">
                    <div data-bs-toggle="offcanvas" data-bs-target="#homelocation" aria-controls="homelocation" className="w-75">
                        <h6 className="mb-0">Livré à <span className="fw-bold">domicile</span></h6>
                        {userAdress[0] && <p className="text-muted text-truncate m-0">{userAdress[0].quartier},{userAdress[0].province},{userAdress[0].ville}</p>}
                    </div>
                    {/* <a href="#" className="btn btn-outline-success border-dark-subtle fw-bold shadow-sm user-icon rounded-pill fs-6"
                        data-bs-toggle="offcanvas" onClick={handleShowLocation} data-bs-target="#homelocation" aria-controls="homelocation"><i
                            className="icofont-ui-home"></i></a> */}
                </div>
                {/* <div className="pt-3">
                    <a href="#" className="btn btn-success w-100 text-uppercase btn-lg fw-bold" data-bs-toggle="offcanvas"
                        data-bs-target="#deliveryoption" aria-controls="deliveryoption" onClick={handleShowDeliveryOptions} >Select delivery option</a>
                </div> */}

                <ValideOrder />
            </div>

            {/* <LocationDilevryOffCanva showLocation={showLocation} handleCloseLocation={handleCloseLocation} />
            <SelectDeliveryOffCanva showDeliveryOptions={showDeliveryOptions} handleCloseDeliveryOptions={handleCloseDeliveryOptions} /> */}
        </div>
    )
}