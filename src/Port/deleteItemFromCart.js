function deleteItemFromCart(userId, itemId) {
    const url = 'http://localhost:9000/carts';    
  
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"id":userId,
        "idProduct" : itemId})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const productDiv = document.getElementById(`product-${itemId}`);
      productDiv.parentNode.removeChild(productDiv);

      //delete product from locale storige
      window.location.reload(false);
      localStorage.removeItem("commande"+itemId)
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }
  export default deleteItemFromCart 
  