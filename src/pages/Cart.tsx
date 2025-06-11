import { PRODUCTS } from '../products'

interface CartProps {
  cart: { [id: number]: number }
}

export default function Cart({ cart }: CartProps) {
  const items = Object.entries(cart).filter(([, qty]) => qty > 0)
  return (
    <div className="flex flex-col p-8 w-2/3 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Your Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-4 px-4 py-2 mb-2 font-semibold text-blue-900 bg-blue-100 rounded">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          <ul className="mb-6 space-y-3">
            {items.map(([id, qty]) => {
              const product = PRODUCTS.find(p => p.id === Number(id))
              return product ? (
                <li key={id} className="grid grid-cols-4 gap-4 items-center bg-blue-50 rounded-lg px-4 py-2 shadow">
                  <span className="font-semibold text-blue-800">{product.title}</span>
                  <span>${product.price.toFixed(2)}</span>
                  <span className="text-gray-700">x {qty}</span>
                  <span className="font-medium text-blue-600">${(product.price * qty).toFixed(2)}</span>
                </li>
              ) : null
            })}
          </ul>
        </>
      )}
      <button
        className="mt-4 px-6 py-2 bg-blue-300 text-white rounded font-semibold cursor-not-allowed opacity-70"
        disabled
      >
        Checkout & Pay (Not implemented)
      </button>
    </div>
  )
}
