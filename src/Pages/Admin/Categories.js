import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/Headers/AdminHeader'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategory, fetchCategories } from '../../Redux/category';
import { Button } from 'react-bootstrap';
import AddCategoryForm from '../../Components/OffCanvas/AddCategoryForm';
import UpdateCategory from '../../Components/OffCanvas/UpdateCategory';
import Table from 'react-bootstrap/Table';
import CategoryDetailsModal from '../../Components/OffCanvas/CategoryDetailsModal';
import Loader from '../../Components/Loader';
import ErrorPage from '../../Components/ErrorPage';

export default function Categories() {
  const [idCategory,setIdCategory]=useState();
  const [showAddCategory,setShowAddCategory]=useState(false);
  const [showCategoryDetails,setShowCategoryDetails]=useState(false);
  const handleShowCategoryDetails=()=>setShowCategoryDetails(true);
  const handleCloseCategoryDetails=()=>setShowCategoryDetails(false);
   const handleShowAddCategory=()=>setShowAddCategory(true);
   const handleCloseAddCategory=()=>setShowAddCategory(false);
   const [showUpdateCategory,setShowUpdateCategory]=useState(false);
   const handleShowUpdateCategory=()=>setShowUpdateCategory(true);
   const handleCloseUpdateCategory=()=>setShowUpdateCategory(false);
  const dispatch=useDispatch();
  const categories=useSelector(state=>state.categories);
  const accessToken=useSelector(state=>state.users).data.access_token;
  const onRetry=()=>{window.location.reload(false)}
  useEffect(()=>{
    dispatch(fetchCategories())
  },[dispatch])
  if(categories.state===null){
    return(<Loader/>);
 }
 if(categories.state==="loading"){
  return(<Loader/>);
}
 if(categories.state==="failed"){
    return(<ErrorPage message={categories.message} onRetry={onRetry}/>);
 }

  return (
    <>
    <AdminHeader link="/admin"/>
    {categories.data[0]?
    <div className="container">
    <div className='d-flex justify-content-around my-3'>
    <h4 >Liste des catégories</h4>
     
   
      
      <Button variant='success' onClick={handleShowAddCategory}>Ajouter</Button>
      
    
    </div>
    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
        <th >Nom</th>
        <th className="d-none d-sm-table-cell">Image</th>
        <th className="d-none d-lg-table-cell">Image de bannière</th>
        <th>Actions</th>
        </tr>
        </thead>
      <tbody>
              {categories &&
                categories.data.map((category) => (
                  
                  <tr key={category.key}>
                    <th>{category.name}</th>
                    <th className="d-none d-sm-table-cell">
                    <img
                          src={category.image}
                          alt=""
                          className="img-fluid w-75 d-block mx-auto"
                        />

                    </th>
                    <th className="d-none d-lg-table-cell">
                    <img
                          src={category.bannerImage}
                          alt=""
                          className="img-fluid w-75 d-block mx-auto"
                        />
                        
                    </th>
                    <th>
                    <div className="d-flex flex-column">
                      <Button className="mx-4 my-1 " onClick={()=>{
                        handleShowCategoryDetails();
                        setIdCategory(category);
                      }}>Détails</Button>
                    <Button variant="warning" className="mx-4 my-1 " onClick={()=>{handleShowUpdateCategory();
                            setIdCategory(category.id);}} >Modifier</Button>
                          <Button  variant="danger" className='mx-4 my-1' onClick={()=>dispatch(deleteCategory(category.id))}>Delete</Button>
                      </div>
                    </th>
                  </tr>
                    
                      
                  
                ))}
            </tbody>
            </Table>
          </div>
: <div className="d-flex align-items-center justify-content-center vh-100">
<h3 className="text-center">Aucune catégories à la base de données pour le moment</h3>
</div>
}
      <CategoryDetailsModal showCategory={showCategoryDetails} handleCloseCategory={handleCloseCategoryDetails} category={idCategory}/>
      <UpdateCategory showUpdateCategory={showUpdateCategory} handleCloseUpdateCategory={handleCloseUpdateCategory} idCategory={idCategory} accessToken={accessToken}/>

      <AddCategoryForm showAddCategory={showAddCategory} handleCloseAddCategory={handleCloseAddCategory}/>
    </>
  )
}