
'use client'; // This makes it a Client Component

export default function CartButton() {
  const goToCart = () => {
    window.location.href = 'https://fimjpyw0mnzy.upmind.app/cart';
  };

  return (
    <button 
      onClick={goToCart}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      View Cart
    </button>
  )
}