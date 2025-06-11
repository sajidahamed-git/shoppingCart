export default function Home() {
  return (
    <div className="flex flex-col items-center justify-around min-h-screen  
      p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">
        Welcome to the Shopping Cart Demo!
      </h2>
      <p className="mt-2 text-lg text-gray-700 text-center max-w-md">
        This is a simple{" "}
        <span className="font-semibold text-blue-600">React + TypeScript</span>{" "}
        shopping cart demo. Use the navigation bar to visit the shop and add items
        to your cart!
      </p>
    </div>
  );
}
