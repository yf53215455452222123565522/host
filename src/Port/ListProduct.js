import useFetch from './useFetch';
import Product from '../model/Product';
const ListProduct = (name) => {
   
    const {data,isPending, error}=useFetch("http://localhost:9000/products/name?name="+name);
    const listproduct=data&& data.map(product=>{
        if (product.reduction) {
            return new Product(product.id, product.marque, product.name, product.reduction, product.previousPrice, product.price, product.image, product.unitQuantity, null, null, product.description, product.category.id)
        } else {
            return new Product(product.id, product.marque, product.name, null, product.previousPrice, product.price, product.image, product.unitQuantity, null, null, product.description, product.category.id);

        }
    });

  return {listproduct,isPending,error}
}

export default ListProduct

