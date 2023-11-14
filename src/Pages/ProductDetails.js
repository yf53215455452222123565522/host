import React, { useEffect } from 'react';
import '../Assets/css/icofont.min.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ErrorPage from '../Components/ErrorPage';
import Loader from '../Components/Loader';
import { fetchProduct } from '../Redux/product';
import ProductDetailsHeader from '../Components/ProductDetails/ProductDetailsHeader';
import ProductDetailsBody from '../Components/ProductDetails/ProductDetailsBody';
import ProductDetailsFooter from '../Components/ProductDetails/ProductDetailsFooter';
function ProductDetails() {
   const { id = 'ea8ed763-928c-4155-bee9-fd5aaadc0000' } = useParams();
   const dispatch = useDispatch();
   const productDetails = useSelector(state => state.products)
   useEffect(() => {
      dispatch(fetchProduct(id))
   }, [dispatch,id])
   
   const handleRetry = () => window.location.reload(false);
   if (productDetails.status === null) {
      return <Loader />
   }
   if (productDetails.status === "loading") {
      return <Loader />
   }
   if (productDetails.status === "failed") {
      return <ErrorPage message={productDetails.message} onRetry={handleRetry}></ErrorPage>
   }
   return (
      <div className="product-details d-flex flex-column vh-100">
         <ProductDetailsHeader />
         <ProductDetailsBody />
         <ProductDetailsFooter />
      </div>
   )
}

export default ProductDetails
