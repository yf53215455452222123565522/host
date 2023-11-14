// import CartUpdateRequest from "../model/CartUpdateRequest";

// function AddToCart(productId, userId) {
//    const cartUpdateRequest = new CartUpdateRequest(userId, productId);

//    fetch('http://localhost:9000/carts', {
//       method: 'PUT',
//       headers: {
//          'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(cartUpdateRequest.cart) 

//    })
//       .then(response => {
//          if (response.ok) {
//             return response.json();
//          }
//          throw new Error('Network response was not ok.');
//       })
//       .then(data => {
//          console.log('Product added to cart:', data);
//       })
//       .catch(error => {
//          console.error('Failed to add product to cart:', error);
//       });
// }


// export default AddToCart; 