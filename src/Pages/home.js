import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import '../Assets/css/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Assets/css/icofont.min.css';
import '../Assets/css/demo.css';
import HomeHeader from '../Components/Home/HomeHeader';
import CategorySlider from '../Components/Home/CategorySlider';
import HotDealsSlider from '../Components/Home/HotDealsSlider';
import CouponsSlider from '../Components/Home/CouponsSlider';
import MustHaveSlider from '../Components/Home/MustHaveSlider';
import HomeFooter from '../Components/Home/HomeFooter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../Redux/category';
import { fetchUser } from '../Redux/user';
import { fetchProducts } from '../Redux/product';
import Loader from '../Components/Loader';
import ErrorPage from '../Components/ErrorPage';
import { fetchCart } from '../Redux/carts';
import CartIcon from '../Components/Common/CartIcon';
function Home() {

   const dispatch = useDispatch();
   const users = useSelector(state => state.users);
   const categories = useSelector(state => state.categories);
   const products = useSelector(state => state.products);
   const uid = useSelector(state => state.users).data.id;
   useEffect(() => {
      dispatch(fetchCategories())
   }, [dispatch])
   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])
   useEffect(() => {
      dispatch(fetchUser(uid));
   }, [dispatch, uid])
   useEffect(() => {
      dispatch(fetchCart(uid))
   }, [dispatch, uid])

   const onRetry = () => { window.location.reload(false) }
   if (users.state === null) {
      return (<Loader />);
   }
   if (users.state === "failed") {
      return (<ErrorPage message={users.message} onRetry={onRetry} />);
   }
   if (categories.state === null) {
      return (<Loader />);
   }
   if (categories.state === "failed") {
      return (<ErrorPage message={categories.message} onRetry={onRetry} />);
   }
   if (products.state === null) {
      return (<Loader />);
   }
   if (products.state === "failed") {
      return (<ErrorPage message={products.message} onRetry={onRetry} />);
   }

   return (
      <>
         <div className="homepage d-flex flex-column vh-100 vw-100">
            <HomeHeader />
            <div className="my-auto overflow-auto vh-100 vw-100">
               <CategorySlider />
               <HotDealsSlider />
               <CouponsSlider />
               <MustHaveSlider />
            </div>
            <CartIcon />
            <HomeFooter />
         </div>
      </>
   );
}

export default Home
