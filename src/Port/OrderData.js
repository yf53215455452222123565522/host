import useFetch from "./useFetch";
function OrderData(id) {
  
  const { data,isPending, error}=useFetch("http://localhost:9000/orders/"+id);
 
   
  return {data,isPending,error}
    
}

export default OrderData
