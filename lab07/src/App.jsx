import { useState } from 'react'
import Header from '../components/header'
import Products from '../components/products'
import { products_list } from '../data/productList'
import AddProduct from '../components/addproduct'

import './App.css'

function App() {
  const [products, setProducts] = useState(products_list)

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const addProduct = (product) => {
    const id = products.length + 1
    const newProduct = { id, ...product }
    setProducts([...products, newProduct])
  }

  return (
    <div>
      <Header title='Lista zakupów' />
      {products.length > 0 ? <Products products={products} onDelete={deleteProduct} /> : <p>Brak produktów</p>}
      <AddProduct onAdd={addProduct} />
    </div>
  )
}

export default App
