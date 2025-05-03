import { useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Success() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Order Successful!</h1>
      <p className="text-gray-600 mb-6">Thank you for your purchase. Your delicious food is on the way!</p>
      <a href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Back to Dashboard
      </a>
    </div>
  );
}