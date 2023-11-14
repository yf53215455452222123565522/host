import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../Assets/css/style.css';
import '../Assets/css/icofont.min.css';
import '../Assets/css/demo.css';
import CategoryList from '../Components/Listing/CategoryList';
import ErrorPage from '../Components/ErrorPage';
import Loader from '../Components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchCategoriesProducts, fetchCategoryProducts } from '../Redux/categoryProduct';
import CategoriesHeader from '../Components/Listing/CategoriesHeader';
import { fetchCategories } from '../Redux/category';
import CartIcon from '../Components/Common/CartIcon';
import { fetchPreference } from '../Redux/preference';
import { fetchCart } from '../Redux/carts';

function Listing() {
   const { id = "e58ed763-928c-4155-bee9-fdbbcadc15f3" } = useParams();
   const handleRetry = () => window.location.reload(false);
   const userId = useSelector(state => state.users).data.id;
   const dispatch = useDispatch();
   const categoriesR = useSelector(state => state.categoryProduct);
   const categories = useSelector(state => state.categories);
   useEffect(() => {
      dispatch(fetchCategoriesProducts())
   }, [dispatch])
   useEffect(() => {
      console.log(categoriesR)
   }, [categoriesR])
   useEffect(() => {
      dispatch(fetchCategoryProducts(id))
   }, [dispatch, id])
   useEffect(() => {
      dispatch(fetchCategories())
   }, [dispatch])
   
   useEffect(() => {
      dispatch(fetchPreference(userId))
   }, [dispatch,userId])
   
   useEffect(() => {
      dispatch(fetchCart(userId))
   }, [dispatch,userId])

   if (categoriesR.status === null) {
      return (<Loader />);
   }
   if (categoriesR.status === "loading") {
      return (<Loader />);
   }
   if (categoriesR.status === "failed") {
      return (
         <ErrorPage message={categoriesR.message} onRetry={handleRetry} />
      );
   }
   if (categories.status === null) {
      return (<Loader />);
   }
   if (categories.status === "loading") {
      return (<Loader />);
   }
   if (categories.status === "failed") {
      return (
         <ErrorPage message={categoriesR.message} onRetry={handleRetry} />
      );
   }


   return (
      <div className="bg-light">
         <div className="listing d-flex flex-column vh-100">
            <CategoriesHeader />
            <CategoryList />
         </div>
         <CartIcon />
      </div>
   )
} export default Listing
