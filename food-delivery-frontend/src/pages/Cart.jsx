import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between border p-4 rounded-xl bg-white shadow-sm"
                        >
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                        </div>
                    ))}
                    <div className="text-right font-semibold text-lg">Total: ${total}</div>
                    <button
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>
                    <button
                        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                        onClick={() => {
                            console.log("checked out clicked");
                            navigate('/success');
                        }}
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
}
