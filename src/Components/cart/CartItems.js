import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, fetchCart } from '../../Redux/carts';
import CartLeaveOrder from './CartLeaveOrder';
import { addQuantity, reduceQuantity } from '../../service/QuantiteProductService';
import AddSomeItemsPic from './AddSomeItemsPic';
import { calculateTotalPrice, totalItemscart } from '../../service/CartService';
import CartPolicy from './CartPolicy';
import CartValideOrder from './CartValideOrder';
import CartCoupon from './CartCoupon';
import CartBills from './CartBills';
import { Link } from 'react-router-dom';

export default function CartItems() {

    const dispatch = useDispatch();

    const [quantities, setQuantities] = useState({});

    const Product = useSelector(state => state.carts);

    const userId = useSelector(state => state.users).data.id;




    async function handleDelete(userId, itemId) {
        try {
            await dispatch(deleteItemFromCart({ userId, itemId }));
            dispatch(fetchCart(userId));
            // const productDiv = document.getElementById(`product-${itemId}`);
            // productDiv.parentNode.removeChild(productDiv);
        } catch (error) {
            console.error('An error occurred during item deletion:', error);
        }
    }


    const cart = useSelector((state) => state.carts.cart);
    const cartItems = cart?.cartItems ?? [];

    const totalPrice = calculateTotalPrice(cartItems, quantities)



    const deliveryPartnerFee = 20;
    const handlingFee = 10;
    const subtotal = totalPrice + deliveryPartnerFee + handlingFee;

    const commandCount = totalItemscart();

    return (
        <>
            <div className="my-auto vh-100 overflow-auto p-3">
                <CartCoupon />
                <div className="bg-white p-3 mb-2 shadow-sm rounded-3">
                    <div className="d-flex align-items-center gap-3 mb-3">
                        <i className="icofont-food-basket icofont-2x" ></i>
                        {Product.cart &&
                            <div>
                                <h6 className="fw-bold text-black osahan-mb-1">Articles de pannier</h6>
                                <p className="small text-muted m-0">{Product.cart.cartItems.length} article(s)</p>
                            </div>
                        }
                    </div>
                    {Product.cart && Product.cart.cartItems.length > 0 ? (Product.cart.cartItems.map((productCart) => (
                        <div key={productCart.id} id={`product-${productCart.id}`}>
                            <div className="d-flex align-items-center gap-3 justify-content-between">
                                <img src={productCart.image} alt="" className="img-fluid bg-light p-1 border rounded-3 cart-product" />
                                <div className="me-auto">
                                    <p className="osahan-mb-1 fw-bold">{productCart.name}</p>
                                    <p className="text-muted small m-0 text-primary" onClick={() => handleDelete(userId, productCart.id)}>Supprimer</p>
                                </div>
                                <div className="osahan-count d-flex align-items-center justify-content-between border border-dark-subtle rounded-pill h6 m-0 p-1">
                                    <span className="text-muted minus d-flex"><i className="icofont-minus-circle" onClick={() => reduceQuantity(productCart, quantities, setQuantities)}></i></span>
                                    <input type="text" className="lh-sm small text-black text-center box border-0" value={quantities[productCart.id] || localStorage.getItem("commande" + productCart.id) || 1} onChange={(e) => setQuantities({ ...quantities, [productCart.id]: parseInt(e.target.value) })} />
                                    <span className="text-muted plus d-flex" onClick={() => addQuantity(productCart, quantities, setQuantities)}><i className="icofont-plus-circle"></i></span>
                                </div>
                                <h6 className="m-0 text-primary">{productCart.price} DH</h6>
                            </div>
                        </div>
                    ))) : (
                        <Link to="/listing">
                            <AddSomeItemsPic />
                        </Link>
                    )}
                </div>

                <CartLeaveOrder />
                <CartBills totalPrice={totalPrice} deliveryPartnerFee={deliveryPartnerFee} handlingFee={handlingFee} subtotal={subtotal} />
                <CartPolicy />

            </div>
            <CartValideOrder subtotal={subtotal} />

        </>
    )
}
