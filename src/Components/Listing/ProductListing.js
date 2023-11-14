import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../../Redux/carts';
import { Link } from 'react-router-dom';
import { Favorite } from '@mui/icons-material';
import logo from '../../Assets/img/timbre-produit-indisponible.png'
import { toast } from 'react-toastify';
import { addProductToPreference, deleteProductsFromPreference, fetchPreference } from '../../Redux/preference';
import PreferenceUpdateRequest from '../../model/PreferenceUpdateRequest';


export default function ProductListing({ product, isStockAvailable }) {
    const dispatch = useDispatch();
    const uid = useSelector(state => state.users).data.id;
    const favorit = useSelector(state => state.preference);


    const isPreference = favorit.preference && favorit.preference.preferenceItems.some((preference) => product.id === preference.id);
    const [isFavourite, setFavourite] = useState(isPreference);


    const handleAddToCart = (product, uid) => {
        if (localStorage.getItem('commande' + product.id)) {
            toast.info(
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={product.image} alt={product.name} style={{ width: '50px', marginRight: '10px' }} />
                    <span>Le produit {product.name} est déjà dans le panier</span>
                </div>,
                {}
            );
        } else {
            dispatch(addTocart([product.id, uid]));
            toast.success(
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={product.image} alt={product.name} style={{ width: '50px', marginRight: '10px' }} />
                    <span>{product.name} ajouté au panier</span>
                </div>,
                {}
            );
        }
    }

    const addToFavoritProduct = (userId,itemId) => {
        const preferenceUpdateRequest = new PreferenceUpdateRequest(userId, itemId);

        if (!isFavourite) {
            dispatch(addProductToPreference(preferenceUpdateRequest));
        } else {
            dispatch(deleteProductsFromPreference({userId, itemId}));
        }
        setFavourite(!isFavourite);
    }

    return (
        <div className="card bg-transparent border-0 p-2 h-100" style={{ pointerEvents: !isStockAvailable ? "none" : "auto" }}>
            {product.reduction>0  && product.reduction<7 &&(
                <div
                    className="bg-success position-absolute top-0 text-white osahan-badge text-center"
                    style={{
                        opacity:  "1",
                        transition: "opacity 1s ease-in-out",
                    }}
                >
                    <b>{product.reduction}%</b>
                    <br />
                    OFF
                </div>
            )}
            {product.reduction>=7  && product.reduction<20 &&(
                <div
                    className="bg-warning position-absolute top-0 text-white osahan-badge text-center"
                    style={{
                        opacity:  "1",
                        transition: "opacity 1s ease-in-out",
                    }}
                >
                    <b>{product.reduction}%</b>
                    <br />
                    OFF
                </div>
            )}
            {product.reduction>=20 &&(
                <div
                    className="bg-danger position-absolute top-0 text-white osahan-badge text-center"
                    style={{
                        opacity:  "1",
                        transition: "opacity 1s ease-in-out",
                    }}
                >
                    <b>{product.reduction}%</b>
                    <br />
                    OFF
                </div>
            )}
            <div
                className={`isFavourite ${isFavourite ? "active" : ""}`}
                onClick={() => addToFavoritProduct(uid,product.id)}
            >
                <Favorite />
            </div>






            <Link to={"/productDetails/" + product.id}>
                <img
                    src={product.image}
                    alt=""
                    className="img-thumbnail d-block mx-auto image-card"
                    style={{
                        opacity: isStockAvailable ? "1" : "1",
                        transition: "opacity 1s ease-in-out",
                    }}
                />

            </Link>
            <div className="message-wrapper position-absolute" >
                {!isStockAvailable && (
                    <div className="stamp ">
                        <img className="logoStamp " src={logo} style={{
                            opacity: isStockAvailable ? "1" : "0.6",
                            transition: "opacity 1s ease-in-out",
                        }} />
                    </div>
                )}
            </div>
            <div
                className="card-body p-0 mb-3"
                style={{
                    transition: "opacity 1s ease-in-out",
                }}
            >
                <small className="text-muted">{product.marque}</small>
                <p className="card-title fw-bold mb-0">{product.name}</p>
            </div>

            <div
                className="card-footer bg-transparent border-0 d-flex align-items-end justify-content-between p-0"
                style={{
                    opacity: isStockAvailable ? "1" : "0.3",
                    transition: "opacity 0.3s ease-in-out",
                }}
            >
                <div>
                    <p className="text-muted mb-1">{product.stocksQuantity}</p>
                    {product.previousPrice>0 &&  (
                        <del className="text-muted small">
                            {product.previousPrice + " DH"}
                        </del>
                    )}
                    <p className="fw-bold m-0">{product.price + " DH"}</p>
                </div>

                <div
                    className="btn btn-outline-success btn-sm border-dark-subtle fw-bold rounded-1 shadow-sm px-1 "
                    onClick={() => handleAddToCart(product, uid)}
                >
                    Ajouter
                </div>
            </div>

        </div>


    )
}
