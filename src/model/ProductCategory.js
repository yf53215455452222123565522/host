class ProductCategory {
  constructor(id, name, linkImg,linkImgBanner,products) {
    this.id = id;
    this.name = name;
    this.linkImg = linkImg;
    this.linkImgBanner=linkImgBanner
    this.products = products; // one-to-many relationship with Product
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

module.exports = ProductCategory;
