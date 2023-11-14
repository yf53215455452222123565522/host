class Order {
  constructor(user, state, items = [], totalPrice = 0) {
      this.user = user;
      this.state = state;
      this.items = items;
      this.totalPrice = totalPrice;
    }

  
}
export default Order;
