import { toast } from "react-toastify";




export const addQuantity = (productCart,quantities,setQuantities) => {
    const existingQuantity = localStorage.getItem("commande" + productCart.id);
    const startingQuantity = existingQuantity ? parseInt(existingQuantity) : 0;
    const newQuantity = startingQuantity + 1;
    if (newQuantity > (productCart.quantity - productCart.Ordredquantity)) {
        toast.error("Quantité maximale du  " + productCart.name + "  atteinte");
    } else {
        localStorage.setItem("commande" + productCart.id, newQuantity);
        setQuantities({ ...quantities, [productCart.id]: newQuantity });
    }
};


export const reduceQuantity = (productCart,quantities,setQuantities) => {
    const existingQuantity = localStorage.getItem("commande" + productCart.id);
    const startingQuantity = existingQuantity ? parseInt(existingQuantity) : 1;
    const newQuantity = startingQuantity > 1 ? startingQuantity - 1 : 1;
    localStorage.setItem("commande" + productCart.id, newQuantity);
    setQuantities({ ...quantities, [productCart.id]: newQuantity });
};