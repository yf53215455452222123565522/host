

export function addItemsToOrder(cartItems, quantities, order) {
  cartItems.forEach((productCart) => {
    order.items.push({
      product: productCart.id,
      productName:productCart.name,
      // productImage: productCart.image,
      quantity:
        quantities[productCart.id] ||
        localStorage.getItem("commande" + productCart.id) ||
        0,
    });
  });
}

export function calculateTotalPrice(cartItems, quantities) {
  let totalPrice = 0;
  
  cartItems.forEach((productCart) => {
    totalPrice +=
      productCart.price *
      (quantities[productCart.id] ||
        localStorage.getItem("commande" + productCart.id) ||
        0);
  });
  return totalPrice;
}


export function removeItemFromLocalStorage() {
  const keysToDelete = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("commande")) {
      keysToDelete.push(key);
    }
  }
  keysToDelete.forEach(key => localStorage.removeItem(key));
}


export function  totalItemscart() {
  let count = 0;
  for (let i=0;i<localStorage.length ; i++){
      const key = localStorage.key(i);
      if(key.startsWith("commande")){
          count++
      }
  }
  return count;
}


