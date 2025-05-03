import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const dishes = [
        { id: 1, name: 'Sushi Set', price: '$12.99', desc: 'Fresh tuna & salmon rolls' },
        { id: 2, name: 'Burger Combo', price: '$9.50', desc: 'Beef burger with fries & drink' },
        { id: 3, name: 'Pasta Carbonara', price: '$10.00', desc: 'Creamy Italian pasta with bacon' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🍽️ Available Dishes</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {dishes.map((dish) => (
                    <div key={dish.id} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-gray-700">{dish.name}</h2>
                        <p className="text-gray-500">{dish.desc}</p>
                        <p className="mt-2 text-blue-600 font-bold">{dish.price}</p>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                            onClick={() => addToCart(dish)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
                <button
                    className="mb-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    onClick={() => navigate('/cart')}
                >
                    Go to Cart
                </button>
            </div>

        </div>

    );
}
