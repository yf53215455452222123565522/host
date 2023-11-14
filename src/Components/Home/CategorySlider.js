import React,{useEffect} from 'react';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../Redux/category';
import { Link } from 'react-router-dom';

import Loader from '../Loader';
import ErrorPage from '../ErrorPage';
import CategorySliderItem from './CategorySliderItem';
export default function CategorySlider() {
    const settingsSlider = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 1000,
        slidesToShow: 4.5,
        slidesToScroll: 4,
        initialSlide: 0,
  
     }
    const handleRetry = () => window.location.reload(false);

   const categories = useSelector(state => state.categories);
 
  return (
    <div className="bg-light pb-3">
                  <div className="d-flex align-items-center justify-content-between p-3">
                     <h5 className="fw-bold text-black mb-0">Meilleurs choix</h5>
                     <Link className="text-primary" to="/listing">Voir tout<i className="icofont-rounded-right"></i></Link>
                  </div>
                  <Slider {...settingsSlider}>
                     {categories.data.map((item) => (

                        <CategorySliderItem item={item} key={item.id}/>

                     ))}
                  </Slider>
               </div>
  )
}
