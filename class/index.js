class ProductManager {
  constructor() {
    this.products = []
  }

  addProducts(products){
    this.products.push(products)
  }

  getProducts(){
    console.log(this.products)
  }

  getProductsById(id){
    let product = this.products.find((e)=> e.id === id)
    console.log(product)
  }
  
  updateProduct(id,newProduct){
      const index = this.products.findIndex(obj => obj.id === id);
      if (index !== -1) {
        this.products[index] = { id:this.products[index].id,
        tittle:newProduct,
        description:this.products[index].description,
        price:this.products[index].price,
        thumbnail:this.products[index].thumbnail,
        code:this.products[index].code,
        stock:this.products[index].stock};
      }
      console.log( this.products)
    }
    
    deleteProduct(id){
      const index = this.products.findIndex(obj => obj.id === id);
      if (index !== -1) {
        this.products.splice(index,1);
      }
      console.log( this.products)
    }

}

module.exports = ProductManager

