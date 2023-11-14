// User class
class User {
  constructor(id, name, email, password, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.stores = []; // many-to-many relationship with Store
    this.basket = new Basket(this); // one-to-many relationship with Basket
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

// Store class
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

// Product class
class Product {
  constructor(id, store, name, price, imageUrl, stocksQuantity, ht, ts, description, category) {
    this.id = id;
    this.store = store; // one-to-many relationship with Store
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.stocksQuantity = stocksQuantity;
    this.ht = ht;
    this.ts = ts;
    this.description = description;
    this.category = category; // many-to-one relationship with ProductCategory
  }

  updateStore(store) {
    this.store.removeProduct(this);
    this.store = store;
    store.addProduct(this);
  }
}

// ProductCategory class
class ProductCategory {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.products = []; // one-to-many relationship with Product
  }

  addProduct(product) {
    this.products.push(product);
    product.category = this;
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
      product.category = null;
    }
  }
}

// Basket class
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
    if (index !== -1) {
      this.items.splice(index, 1);
      item.basket = null;
    }
  }
  
  clear() {
    this.items = [];
  }
}

// BasketItem class
class BasketItem {
  constructor(id, basket, product, quantity) {
    this.id = id;
    this
  }
}