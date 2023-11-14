class Product {
  constructor(id, name,marque, image,description,quantity,Ordredquantity, images, unitQuantity,reduction,previousPrice,price, category) {
    this.id = id;
    this.name = name;
    this.marque=marque;
    this.image = image;
    this.description = description;
    this.quantity=quantity;
    this.Ordredquantity=Ordredquantity;
    this.images=images;
    this.unitQuantity=unitQuantity;
    this.reduction=reduction;
    this.previousPrice=previousPrice;
    this.price=price;
    this.category = category; // many-to-one relationship with ProductCategory
  }
  hasReduction(){
  return this.reduction!=null;    
  }

  updateStore(store) {
    this.store.removeProduct(this);
    this.store = store;
    store.addProduct(this);
  }
}

module.exports = Product;
