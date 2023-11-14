import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import CategoryItem from './CategoryItem';


function CategoryNavList() {

   const categories = useSelector(state => state.categories);




   return (

      <div className="listing-left">
         <div className="bg-white rounded shadow-sm sticky-top overflow-hidden p-2">
            <div className="nav flex-column osahan-item-sidebar nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

               {categories.data.map((item) => (

                  // <Link to={'/Listing/'+item.id}  >
                  //    <CategoryItem key={item.id} category={item} />
                  // </Link>
                  <CategoryItem key={item.id} category={item} />

               ))}

            </div>
         </div>
      </div>
   )
}

export default CategoryNavList
