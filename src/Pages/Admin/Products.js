import React,{ useEffect, useState } from 'react'
import AdminHeader from '../../Components/Headers/AdminHeader'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteProduct, fetchProducts } from '../../Redux/product';
import AddProducts from '../../Components/OffCanvas/AddProducts';
import UpdateProduct from '../../Components/OffCanvas/UpdateProduct';
import SetReductionForm from '../../Components/OffCanvas/SetReductionForm';
import jwt_decode from "jwt-decode";
import Table from 'react-bootstrap/Table';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v1 as uuidv1 } from 'uuid';
import ProductDetailsModal from '../../Components/OffCanvas/ProductDetailsModal';
import Loader from '../../Components/Loader';
import ErrorPage from '../../Components/ErrorPage';


export default function Products() {
  const settingsSlider = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
 }
 const [showProductDetails,setShowProductDetails]=useState(false);
 const handleShowProductDetails=()=>setShowProductDetails(true);
 const handleCloseProductDetails=()=>setShowProductDetails(false);
  const [idProducts,setidProducts]=useState();
  const [Products,setProducts]=useState();
  const [showReductionProduct,setShowReductionProduct]=useState(false);
  const handleShowReductionProduct=()=>setShowReductionProduct(true);
  const handleCloseReductionProduct=()=>setShowReductionProduct(false);

  const [showAddProducts,setShowAddProducts]=useState(false);
   const handleShowAddProducts=()=>setShowAddProducts(true);
   const handleCloseAddProducts=()=>setShowAddProducts(false);
   const [showUpdateProducts,setShowUpdateProducts]=useState(false);
   const handleShowUpdateProducts=()=>setShowUpdateProducts(true);
   const handleCloseUpdateProducts=()=>setShowUpdateProducts(false);
  const dispatch=useDispatch();
  const products=useSelector(state=>state.products);
  const accessToken=useSelector(state=>state.users).data.access_token;
 
      const decoded = jwt_decode(accessToken);

  
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])
  const onRetry=()=>{window.location.reload(false)}
  if(products.state===null){
     return(<Loader/>);
  }

  if(products.state==="loading"){
   return(<Loader/>);
}
  if(products.state==="failed"){
     return(<ErrorPage message={products.message} onRetry={onRetry}/>);
  }

  return (
    <>
    <AdminHeader link="/admin"/>
    {products.data[0]?
    <div className="container">
    <div className='d-flex justify-content-around my-3'>
    <h4 >Liste des produits</h4>
     
   
      
      <Button variant='success' onClick={handleShowAddProducts}>Ajouter</Button>
      
    
    </div>
    <Table responsive striped bordered hover size="sm">
      <thead>
      <tr>
        <th>ID</th>
        <th className="d-none d-sm-table-cell" >Nom</th>
        <th className="d-none d-lg-table-cell">Marque</th>

        <th className="d-none d-sm-table-cell">Image</th>
        <th className="d-none d-lg-table-cell">Description</th>
        <th className="d-none d-xxl-table-cell">Image de bannière</th>
        <th className="d-none d-lg-table-cell">Quantité stoké</th>
        <th className="d-none d-sm-table-cell">Prix</th>
        <th className="d-none d-lg-table-cell">Prix antérieur </th>
        <th className="d-none d-lg-table-cell"> Reduction</th>

        <th className="d-none d-md-table-cell">Quantité commandé</th>
        <th className="d-none d-lg-table-cell">Catégorie</th>



        <th>Actions</th>
        </tr>
        </thead>
<tbody>
            {products &&
              products.data.map((product) => (
                <tr key={product.id}>
                  <th>{product.id}</th>
        <th className="d-none d-sm-table-cell" >{product.name}</th>
        <th className="d-none d-lg-table-cell">{product.marque}</th>

        <th className="d-none d-sm-table-cell">
        <img
                          src={product.image}
                          alt=""
                          className="img-thumbnail  d-block mx-auto"
                        />
        </th>
        <th className="d-none d-lg-table-cell">{product.description}</th>
        <th className="d-none d-xxl-table-cell">
     
        <Slider {...settingsSlider} style={{width:"150px",height:"200px"}} className="product-slider">

                     { product.images.map(image => (
                        <div className="product-item" key={uuidv1()}>
                           <img src={image} alt=""  className="img-thumbnail  mx-auto" />
                        </div>
                     ))}
                  </Slider>

        </th>
        <th className="d-none d-lg-table-cell">{product.quantity} {product.unitQuantity}</th>
        <th className="d-none d-sm-table-cell">{product.price} DH </th>
        <th className="d-none d-lg-table-cell">{product.previousPrice} DH </th>
        <th className="d-none d-lg-table-cell">{product.reduction} %</th>

        <th className="d-none d-md-table-cell">{product.Ordredquantity} {product.unitQuantity}</th>
        <th className="d-none d-lg-table-cell">{product.category.name}</th>
        <th>
        <div className="d-flex flex-column">
          <Button variant="success" className="mx-4 my-1 " onClick={()=>{
                          setProducts(product);
                          handleShowProductDetails();}} >Détails</Button>
        <Button variant="warning" className="mx-4 my-1 " onClick={()=>{
                          setidProducts(product.id);
                          handleShowUpdateProducts();}} >Modifier</Button>
                        <Button className="mx-4 my-1 " onClick={()=>{setidProducts(product.id);
                        handleShowReductionProduct();}} > Réduction </Button>
                        <Button  variant="danger" className='mx-4 my-1' onClick={()=>dispatch(deleteProduct(product.id))}>Supprimer</Button>
          </div>
        </th>
                </tr>
                      
                      
                   
                
              ))}
           </tbody>
            </Table>
          </div>

          :<>
          <div className='d-flex justify-content-around my-3'>
    <h4 >Liste des produits</h4>
     
   
      
      <Button variant='success' onClick={handleShowAddProducts}>Ajouter</Button>
      
    
    </div>
    <div className="d-flex align-items-center justify-content-center vh-100">
            
          <h3 className="text-center">Aucun produit à la base de données pour le moment</h3>
         </div>
    </>
           
      }
<AddProducts showAddProduct={showAddProducts} handleCloseAddProduct={handleCloseAddProducts}/>
<UpdateProduct showUpdateProducts={showUpdateProducts} handleCloseUpdateProducts={handleCloseUpdateProducts} idProduct={idProducts}/>
<SetReductionForm showReductionProduct={showReductionProduct} handleCloseReductionProduct={handleCloseReductionProduct} idProduct={idProducts}/>
<ProductDetailsModal showProduct={showProductDetails} handleCloseProduct={handleCloseProductDetails} product={Products}/>

    </>
  )
}