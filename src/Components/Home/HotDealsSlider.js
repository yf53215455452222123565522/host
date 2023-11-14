import React,{useEffect} from 'react'
import HotDealsSliderItem from './HotDealsSliderItem'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../Redux/product';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import ErrorPage from '../ErrorPage';
export default function HotDealsSlider() {
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
        <div className="pt-3">
            <div className="d-flex align-items-center justify-content-between px-3 pb-3">
                <h5 className="fw-bold text-black mb-0">Offres Exceptionnels</h5>
               
                <Link className="text-primary" to="/listing">Voir tout<i className="icofont-rounded-right"></i></Link>
            </div>
            <Slider {...settingsSlider}>
                {products.data.map((item) => (
                    <HotDealsSliderItem item={item} key={item.id} />
                ))}
            </Slider>
        </div>
    )
}
