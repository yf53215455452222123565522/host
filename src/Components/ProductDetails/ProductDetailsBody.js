import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useSelector} from 'react-redux';


export default function ProductDetailsBody() {
    const productDetails=useSelector(state=>state.products);
    
    const settingsSlider = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
     }
  return (
    <div className="vh-100 my-auto overflow-auto">
               <div className="bg-white shadow-sm p-3 mb-3">
                  <Slider {...settingsSlider} className="product-slider">
                     { productDetails.product.images.map(image => (
                        <div className="product-item" key={productDetails.product.images.indexOf(image)}>
                           <img src={image} alt="" className="img-fluid mx-auto" />
                        </div>
                     ))}
                  </Slider>
                  <div className="pt-4">
                     
                        <p className="text-primary mb-1">{productDetails.product.marque}</p>
                           <h5 className="fw-bold text-black lh-base">{productDetails.product.name}</h5>
                        
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="mb-0">
                        
                           <>
                              <p className="text-muted mb-1">{productDetails.product.unitQuantity}</p>
                              <h6 className="mb-0">{productDetails.product.price} DH <small>(Tout taxes compris)</small></h6>
                           </>
                        
                     </div>
                     <div>
                     </div>
                  </div>
               </div>
               <div className="bg-white shadow-sm p-3">
                  <h6 className="fw-bold mb-2">Informations Importantes</h6>
                   <p className="text-muted m-0">{productDetails.product.description}
                  </p>
               </div>
            </div>
  )
}
