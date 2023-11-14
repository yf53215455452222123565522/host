import React from 'react'
import EmptyCart from "../../Assets/img/emptyCart.svg";


export default function AddSomeItemsPic() {
    return (
        
            <div className="w-80 h-80 flex flex-col items-center justify-center gap-6">
                <img src={EmptyCart} className="w-300" alt="" />
                <p className="cart-message">
                    Ajoutez des produits au panier
                </p>
            </div>
        
    )
}
