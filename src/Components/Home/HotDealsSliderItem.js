import React from 'react';
import ProductListing from '../Listing/ProductListing';


export default function HotDealsSliderItem({ item }) {

    const stockAvailable = item.quantity - item.Ordredquantity;
    const isStockAvailable = stockAvailable > 0;

    return (
        <div className="card bg-transparent border-0 overflow-hidden h-100 ps-3">

            {item.reduction === 2 &&
                <div className="bg-info position-absolute top-0 text-white osahan-badge text-center mx-3">
                    <b>{item.reduction}%</b><br />OFF
                </div>
            }
           
            <ProductListing product={item} isStockAvailable={isStockAvailable}  />

        </div>
    )
}
