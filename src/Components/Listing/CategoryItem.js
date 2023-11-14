import React from 'react'
import { useSelector } from 'react-redux';

export default function CategoryItem({ category }) {
const categoriesR=useSelector(state=>state.categoryProduct);
    return (

        <button  className={`nav-link ${categoriesR.category && category.id == categoriesR.category.category.id && 'active'}`} id={`v-pills-${category.id}-tab`} data-bs-toggle="pill" data-bs-target={`#v-pills-${category.id}`} type="button" role="tab" aria-controls={`v-pills-${category.id}`} aria-selected="true">
            <div>
                <img src={category.image} alt={category.name} className="img-thumbnail bg-light rounded" />
                <p className="pt-2 m-0 small">{category.name}</p>
            </div>
        </button>

    )
}
