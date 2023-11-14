import React from 'react';
import { Link } from 'react-router-dom';
export default function CategorySliderItem({item}) {
    return (
        <div className="col ps-3">
            <Link to={"/listing/"+item.id} className="link-dark">
                <div className="card bg-transparent border-0 text-center">
                    <img src={item.image} alt="" className="card-img-top rounded-4 mb-2" />
                    <div className="card-body p-0">
                        <p className="card-title small m-0">{item.name}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
