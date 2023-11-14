class User {
  constructor( id, name, email, picture, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.picture = picture;
    this.phone = phone;
    // this.stores = []; // many-to-many relationship with Store
    // this.basket = new Basket(this); // one-to-many relationship with Basket
  }

  addStore(store) {
    this.stores.push(store);
    store.addCustomer(this);
  }

  removeStore(store) {
    const index = this.stores.indexOf(store);
    if (index !== -1) {
      this.stores.splice(index, 1);
      store.removeCustomer(this);
    }
  }
}

module.exports = User;
