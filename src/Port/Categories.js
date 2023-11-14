import useFetch from './useFetch';
import ProductCategory from '../model/ProductCategory';
import Product from '../model/Product';

const Categories = () => {
    const { data: categoriesData, isPending, error } = useFetch("http://localhost:9000/categoryProducts");
    const categories = categoriesData && categoriesData.map(item => {
        const listproducts = item.products && item.products.map(product => {
            if (product.reduction) {
                return new Product(product.id, product.marque, product.name, product.reduction, product.previousPrice, product.price, product.image, product.unitQuantity, null, null, product.description, product.category.id)
            } else {
                return new Product( product.id, product.marque, product.name, null, null, product.price, product.image, product.unitQuantity, null, null, product.description, product.category.id);

            }
        });
        const categoryItem = new ProductCategory(item.category.id, item.category.name, item.category.image, item.category.bannerImage, listproducts)
        return categoryItem;
    });
    
    return { categories, isPending, error };
}
export default Categories;