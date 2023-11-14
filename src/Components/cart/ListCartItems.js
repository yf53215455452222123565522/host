// import React, { useState } from 'react'
// import { deleteItemFromCart } from '../../Redux/carts';
// import { useDispatch, useSelector } from 'react-redux';
// import { addQuantity, reduceQuantity } from '../../service/QuantiteProductService';

// export default function ListCartItems({ productCart }) {
//     const dispatch = useDispatch();

//     const [quantities, setQuantities] = useState({});

//     const userId = useSelector(state => state.users).data.id;

//     function handleDelete(userId, itemId) {

//         dispatch(deleteItemFromCart({ userId, itemId }));
//         localStorage.removeItem("commande" + itemId)

//         const productDiv = document.getElementById(`product-${itemId}`);
//         productDiv.parentNode.removeChild(productDiv);
//     }
//     return (
//         <>
//             <div key={productCart.id} id={`product-${productCart.id}`}>
//                 <div className="d-flex align-items-center gap-3 justify-content-between">
//                     <img src={productCart.image} alt="" className="img-fluid bg-light p-1 border rounded-3 cart-product" />
//                     <div className="me-auto">
//                         <p className="osahan-mb-1 fw-bold">{productCart.name}</p>
//                         <p className="text-muted small m-0 text-primary" onClick={() => handleDelete(userId, productCart.id)}>Delete</p>
//                     </div>
//                     <div className="osahan-count d-flex align-items-center justify-content-between border border-dark-subtle rounded-pill h6 m-0 p-1">
//                         <span className="text-muted minus d-flex"><i className="icofont-minus-circle" onClick={() => reduceQuantity(productCart, quantities, setQuantities)}></i></span>
//                         <input type="text" className="lh-sm small text-black text-center box border-0" value={quantities[productCart.id] || localStorage.getItem("commande" + productCart.id) || 0} onChange={(e) => setQuantities({ ...quantities, [productCart.id]: parseInt(e.target.value) })} />
//                         <span className="text-muted plus d-flex" onClick={() => addQuantity(productCart, quantities, setQuantities)}><i className="icofont-plus-circle"></i></span>
//                     </div>
//                     <h6 className="m-0 text-primary">{productCart.price} DH</h6>
//                 </div>
//             </div>
//         </>
//     )
// }
