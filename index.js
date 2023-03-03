const ProductManager = require('./class');

const productManager = new ProductManager()

productManager.addProduct({
  id:1,
  title:"JUAN",
  description:"PRODUCTO JUAN",
price:100000,
thumbnail:"Http//juan",
code:"SuperJuan",
stock:1
})
productManager.addProduct({
  id:2,
  title:"NICO",
  description:"PRODUCTO NICO",
price:1,
thumbnail:"Http//NICO",
code:"nico",
stock:1000
})
productManager.addProduct({
  id:3,
  title:"Tincho",
  description:"PRODUCTO Tincho",
price:100,
thumbnail:"Http//TINCHO",
code:"TINCHO",
stock:10
})
productManager.getProducts()
productManager.getProductsById(1)
productManager.deleteProduct(3)
productManager.updateProduct(1,"CARLOS")