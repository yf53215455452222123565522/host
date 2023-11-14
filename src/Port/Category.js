import useFetch from "./useFetch";
const Category = (id) => {
    const { data: category, isPending, error } = useFetch("http://localhost:9000/categoryProducts/"+id.toString());
    
  return { category, isPending, error };
}

export default Category