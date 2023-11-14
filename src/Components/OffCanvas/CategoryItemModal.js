import React from 'react'
import { Link } from 'react-router-dom';

export default function CategoryItemModal({category,handleCloseCategories}) {
    return (
        <div className="col">
            <Link to={"/listing/" + category.id} className="link-dark" onClick={handleCloseCategories}>
                <div className="card bg-transparent border-0 text-center">
                    <img src={category.image} alt="" className="card-img-top rounded-4 mb-2" />
                    <div className="card-body p-0">
                        <p className="card-title m-0">{category.name}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
