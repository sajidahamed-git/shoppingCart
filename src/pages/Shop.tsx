import { useState } from 'react'
import { PRODUCTS } from '../products'

interface ShopProps {
  onAddToCart: (productId: number, quantity: number) => void
}

export default function Shop({ onAddToCart }: ShopProps) {
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({})

  const handleChange = (id: number, value: number) => {
    setQuantities(q => ({ ...q, [id]: Math.max(0, value) }))
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-8 text-blue-700">Shop</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {PRODUCTS.map(product => (
          <div key={product.id} className="border border-gray-200 rounded-xl p-6 w-64 bg-white shadow hover:shadow-lg transition-shadow flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">{product.title}</h3>
            <p className="mb-4 text-gray-600">Price: <span className="font-bold text-blue-700">${product.price.toFixed(2)}</span></p>
            <div className="flex items-center gap-2 mb-4">
              <button
                className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                onClick={() => handleChange(product.id, (quantities[product.id] || 0) - 1)}
              >-</button>
              <input
                type="number"
                min={0}
                value={quantities[product.id] || 0}
                onChange={e => handleChange(product.id, Number(e.target.value))}
                className="w-14 text-center border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                onClick={() => handleChange(product.id, (quantities[product.id] || 0) + 1)}
              >+</button>
            </div>
            <button
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-semibold shadow"
              onClick={() => onAddToCart(product.id, quantities[product.id] || 0)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
