import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageBanner from "../../Assets/img/banner1.png";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import HotDealsSliderItem from './HotDealsSliderItem';

export default function MustHaveSlider() {
    const settingsSlider = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 100,
        slidesToShow: 2.5,
        slidesToScroll: 2,
        initialSlide: 0,
  
     }

    const products=useSelector(state=>state.products);
    
    return (
        <>
            <div className="py-3">
                <h5 className="fw-bold text-black mb-0 px-3 pb-3">Articles incontournables</h5>
                <Slider {...settingsSlider}>
                    {products.data.map((item) => (
                        <HotDealsSliderItem item={item} key={item.id}/>
                    ))}
                </Slider>
            </div>

            <div className="p-3 bg-light">
                <div className="rounded-4 ps-4 pt-4 shadow-sm d-flex gap-1 align-items-center bg-warning bg-gradient justify-content-between">
                    <div className="pb-4">
                        <h1 className="fw-bolder text-black display-5 mb-1">50% OFF</h1>
                        <p className="text-dark"> Offre Spéciale: Recevez 50% de remise cash + <span className="text-success"><i className="bi bi-basket"></i> Livraison gratuite</span>
                            <b className="bg-primary px-1 rounded-1 small text-uppercase fw-bold text-white mt-1 d-inline-block">Nouveau utilisateur</b></p>
                        <Link to="/listing" className="btn btn-light text-success fw-bold rounded-3 shadow-sm btn-sm border-0">Acheter maintenant</Link>
                    </div>
                    <img src={ImageBanner} alt="" className="img-fluid mt-auto osahan-offer-banner" />
                </div>

            </div>
        </>
    )
}
