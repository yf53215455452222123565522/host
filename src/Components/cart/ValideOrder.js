import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, fetchOrderByUser } from '../../Redux/orders';
import { deleteAllProductsFromCart, fetchCart } from '../../Redux/carts';
import Order from '../../model/Order';
import { toast } from 'react-toastify';

import { addItemsToOrder, calculateTotalPrice, removeItemFromLocalStorage } from '../../service/CartService';
export default function ValideOrder() {
    const [quantities, setQuantities] = useState({});
    const dispatch = useDispatch();

    const cart = useSelector(state => state.carts.cart);
    const user = useSelector(state => state.users).data;
    const navigate = useNavigate();
    const uid = user.id;
    const Product = useSelector(state => state.carts);


    useEffect(() => {
        dispatch(fetchCart(uid));
    }, [dispatch, uid]);

    const order = useSelector(state => state.orders);

    function sendOrder() {
        if (user.phone === undefined || user.address[0] === undefined) {
            toast.error(
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>Ajouter votre address et votre N°Téléphone</span>
                </div>,
                {}
            );
            navigate("/profile")
        }
        else if (user.phone == null || user.address[0].ville == null) {
            toast.error(
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>Ajouter votre address et votre N°Téléphone</span>
                </div>,
                {}
            );
            navigate("/profile")
        }
        else {
            const myOrder = new Order(uid, "sdqsdv", [], 0);
            addItemsToOrder(cart.cartItems, quantities, myOrder);
            myOrder.totalPrice = calculateTotalPrice(cart.cartItems, quantities);
            dispatch(addOrder(myOrder))

            dispatch(deleteAllProductsFromCart(uid))
            dispatch(fetchOrderByUser(uid))
            removeItemFromLocalStorage();
            console.table(myOrder.items)
            navigate(`/OrderReceived/${JSON.stringify(myOrder)}`);

        }


    }

    return (

        <div>
            {Product.cart && Product.cart.cartItems.length > 0 ? (
                <div className="btn btn-success w-100 text-uppercase btn-lg fw-bold" onClick={sendOrder} >valider la commande</div>)
                : (<Link to="/Listing"><div className="btn btn-success w-100 text-uppercase btn-lg fw-bold"   >Commader produit </div></Link>)
            }
        </div>
    )
}
