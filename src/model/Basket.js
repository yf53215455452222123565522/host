class Basket {
    constructor(user) {
      this.user = user; // many-to-one relationship with User
      this.items = []; // one-to-many relationship with BasketItem
    }
    
    addItem(item) {
      this.items.push(item);
      item.basket = this;
    }
    
    removeItem(item) {
      const index = this.items.indexOf(item);
    }
}
module.exports = Basket;