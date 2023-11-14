class CartUpdateRequest {
    constructor(userId, productId) {
        this.cart = this.createCart(userId, productId);
    }


    createCart(userId, productId) {
        return {
            "id": userId,
            "idProduct": productId
        }
    }



}
export default CartUpdateRequest;