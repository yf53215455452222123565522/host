import React from 'react'
import preferenceProductImage from '../../Assets/img/preferenceProductImage.png'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../../Redux/carts';
import { toast } from 'react-toastify';
import { deleteProductsFromPreference } from '../../Redux/preference';
import mainImage from '../../Assets/img/preference_Logo.png'
import { Link } from 'react-router-dom';
export default function PreferenceItems() {


    const Product = useSelector(state => state.preference);


    const dispatch = useDispatch();

    const uid = useSelector(state => state.users).data.id;

    const handleAddProductToPreference = (product, uid) => {
        if (localStorage.getItem('commande' + product.id)) {
            toast.info(`Le produit ${product.name} est déjà dans le panier`);
        } else {
            dispatch(addTocart([product.id, uid]));
            toast.success(`${product.name} ajouté au panier`);
        }
    }

    function handleDeleteFromPreference(userId, itemId) {
        dispatch(deleteProductsFromPreference({ userId, itemId }));
    }
    return (

        <div className="container d-flex flex-column ">
            {Product.preference && Product.preference.preferenceItems.length === 0 ? (
                <div className="text-center">
                    <img src={preferenceProductImage} className="w-300" alt="" />
                    <p className="cart-message">
                        Aucun produits.
                    </p>
                    <Link to="/Listing" className="btn btn-primary">Acheter Maintenant</Link>
                </div>
            ) : (
                <div className="row">
                    <div className="col-12">
                    <img src={mainImage} className="main-image" alt="Main Image" />
                    </div>
                    {Product.preference && Product.preference.preferenceItems.map((productCart) => (
                        <div key={productCart.id} className="col-12 col-md-4">
                            <div id={`product-${productCart.id}`} className="card h-100">
                                <img src={productCart.image} alt="Product Image" className="img-thumbnail d-block mx-auto image-card" />
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-center mb-auto">
                                        <h5 className="card-title">{productCart.name}</h5>
                                        <h4 className="card-price">{productCart.price} DH</h4>
                                    </div>
                                    <div className="mt-auto d-flex justify-content-between align-items-end">
                                        <button type="button" className="btn btn-success" onClick={() => handleAddProductToPreference(productCart, uid)}>Au Panier</button>
                                        <button type="button" className="btn btn-danger" onClick={() => handleDeleteFromPreference(uid, productCart.id)}>Supprimer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>



    )
}