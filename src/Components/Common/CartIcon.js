import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { totalItemscart } from '../../service/CartService';

export default function CartIcon() {
    const Product = useSelector(state => state.carts);
    const commandCount = totalItemscart();
    return (
      <div>
        <div className="btn-category">
          <Link to="/cart" className="btn btn-primary rounded-circle shadow-sm icon-lg" >
            <i className="icofont-food-basket icofont-3x text-white"></i>
            <span className="badge bg-danger position-absolute top-0 end-0">{commandCount}</span>
          </Link>
        </div>
      </div>
    );
  }
  
