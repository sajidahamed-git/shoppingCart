import { PRODUCTS } from '../products'
import ProdcutCard from '../components/ProductCard'

interface ShopProps {
  onAddToCart: (productId: number, quantity: number) => void,


}

export default function Shop({ onAddToCart }: ShopProps) {

  // const products = fetch('https://fakestoreapi.com/products')
  // .then(response => response.json())
  // .then(data => console.log(typeof data));


  // console.log( typeof datas);
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md px-8 py-6">
      <h2 className="w-full text-2xl font-bold text-blue-800 text-center mb-4">Welcome to our Shop</h2>
      <div className="flex flex-wrap gap-4 justify-start">
        {PRODUCTS.map(product => (
          <div key={product.id}>
            <ProdcutCard
              {...product}
              handleAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
