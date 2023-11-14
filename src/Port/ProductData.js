import useFetch from "./useFetch";
function ProductData(id) {
  
  const { data,isPending, error}=useFetch("http://localhost:9000/products/"+id);
 
   
  return {data,isPending,error}
    
}

export default ProductData
