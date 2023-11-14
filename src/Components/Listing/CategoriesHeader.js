import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import CategoryModal from '../OffCanvas/CategoryModal';
import SearchNavBar from '../Headers/SearchNavBar';
import { Link } from 'react-router-dom';

export default function CategoriesHeader() {
    const categoriesR=useSelector(state=>state.categoryProduct);
    const [showCategories, setShowCategories] = useState(false);
   const handleCloseCategories = () => setShowCategories(false);
   const handleShowCategories = () => setShowCategories(true);
    return (
        <>
            <div className="listing-navbar bg-primary d-flex align-items-center gap-3 shadow-sm mb-auto p-3">
                <Link to="/home"><i className="bi bi-arrow-left text-white fs-5"></i> </Link>
                <Link to="#" className="text-white" data-bs-toggle="modal"
                    data-bs-target="#categories">
                        {categoriesR.category &&
                    <div className="d-flex align-items-center gap-2">
                        <span className="bg-white rounded p-1">
                            <img src={categoriesR.category.category.image} alt="" onClick={handleShowCategories} className="img-fluid" />
                        </span>
                        <div>
                            
                            <h6 className="fw-bold text-white mb-0">{categoriesR.category.category.name}</h6>
                            <p className="text-white-50 small m-0">{categoriesR.category.products.length} Articles</p>


                        </div>
                    </div> }

                </Link>
                <SearchNavBar />
            </div>
            <CategoryModal showCategories={showCategories} handleCloseCategories={handleCloseCategories} />
        </>

    )
}
