type ProductProps = {
    id: number;
    title: string;
    price: number;
    strikedPrice: number;
    rating: number;
    handleAddToCart: (productId: number, quantity: number) => void;

};


export default function ProdcutCard(
    Product: ProductProps,
) {
  const { id, title, price, strikedPrice,rating,handleAddToCart } = Product;
  return (
    <div key={id} className="relative overflow-hidden rounded-lg bg-white shadow-md w-56 min-w-0">
      <a href="#">
        <img
          className="h-36 rounded-t-lg object-cover"
          src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
      </a>
      <span className="absolute top-0 left-0 w-20 translate-y-3 -translate-x-4 -rotate-45 bg-black text-center text-xs text-white">
        Sale
      </span>
      <div className="mt-2 px-3 pb-3">
        <a href="#">
          <h5 className="text-base font-semibold tracking-tight text-slate-900">
            {title}
          </h5>
        </a>
        <div className="mt-1.5 mb-3 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2 py-0.5 text-xs font-semibold">
            {rating}
          </span>
          {Array.from({ length: Math.round(rating ?? 0) }).map((_, i) => (
            <svg
              key={i}
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">
                {price}
            </span>
            <span className="text-xs text-slate-900 line-through ml-1">
                {strikedPrice}
                </span>
          </p>
          <a
            href="#"
            onClick={()=>handleAddToCart(id, 1)}
            className="flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
