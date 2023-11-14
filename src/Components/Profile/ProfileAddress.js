import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import LocationOffCanva from '../OffCanvas/LocationOffCanva';

export default function ProfileAddress() {
    const user = useSelector(state => state.users);
    const [showLocationPage, setShowLocationPage] = useState(false);
    const handleShowLocationPage = () => setShowLocationPage(true);
    const handleCloseLocationPage = () => setShowLocationPage(false);
    return (
        <>
            <div data-bs-toggle="offcanvas" data-bs-target="#location" aria-controls="location" className="bg-white border-bottom p-3" onClick={handleShowLocationPage}>
                <div className="d-flex gap-3 align-items-center">
                    <i className="bi bi-geo-alt fs-5 text-muted"></i>
                    <span>
                        <p className="m-0 small text-muted">Addresses</p>
                        <p className="m-0"> Ajouter & Supprimer Addresses</p>
                    </span>
                    <a href="#" className="text-primary ms-auto d-flex"><i className="bi bi-chevron-right fs-6"></i></a>
                </div>
            </div>
             <LocationOffCanva showLocation={showLocationPage}  handleCloseLocation={handleCloseLocationPage}  ></LocationOffCanva>

        </>
    )
}
