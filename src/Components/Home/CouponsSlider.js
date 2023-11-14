import React from 'react';
import Slider from 'react-slick';
import { coupons } from '../../data';
import CouponsSliderItem from './CouponsSliderItem';

export default function CouponsSlider() {
    const settingsCouponsSlider = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 200,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        initialSlide: 0,
  
     }
    return (
        <>
            <div className="p-3">
                <a href="/listing" className="bg-success shadow text-white rounded-4 d-flex align-items-center px-3 py-2"> Explorer <span className="bg-primary px-2 py-1 rounded-2 small text-uppercase fw-bold text-white m-2">Mega Savings</span> Store
                    <i className="bi bi-arrow-right text-warning fs-5 ms-auto"></i>
                </a>

            </div>
            <div className="bg-warning">
                <h5 className="fw-bold text-black mb-0 p-3">Economisez avec les coupons</h5>

                <Slider {...settingsCouponsSlider}>
                    { coupons.map((item) => (
                        <CouponsSliderItem item={item} key={item.id}/>
                    ))}
                </Slider>


            </div>
        </>
    )
}
