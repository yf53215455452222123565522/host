class Store {
    constructor(id, name, location) {
      this.id = id;
      this.name = name;
      this.location = location;
      this.products = []; // one-to-many relationship with Product
      this.customers = []; // many-to-many relationship with User
    }
  
    addProduct(product) {
      this.products.push(product);
      product.store = this;
    }
  
    removeProduct(product) {
      const index = this.products.indexOf(product);
      if (index !== -1) {
        this.products.splice(index, 1);
        product.store = null;
      }
    }
  
    addCustomer(customer) {
      this.customers.push(customer);
      customer.addStore(this);
    }
  
    removeCustomer(customer) {
      const index = this.customers.indexOf(customer);
      if (index !== -1) {
        this.customers.splice(index, 1);
        customer.removeStore(this);
      }
    }
  }
  
  module.exports = Store;