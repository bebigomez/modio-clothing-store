import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../reducers/cartReducer';

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let shippingCost = 500;

  const getCartSubtotal = () => {
    let total = 0;
    items.forEach((items) => (total += items.quantity * items.price));
    return total;
  };

  return (
    <section className="grid md:grid-cols-2 translate-y-20">
      <div className="p-4 rounded">
        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>

        {items.length === 0 && <h3>No items added yet.</h3>}

        {items.map((item, index) => (
          <div
            className="cart-item flex border-b border-gray-200 py-4"
            key={index}
          >
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-28 md:w-40 object-cover mr-4 rounded"
            />
            <div className="flex-1">
              <h3 className="md:text-lg font-semibold">{item.name}</h3>
              <p className="text-sm md:base text-gray-600">
                Price: ${(item.price / 100).toFixed(2)}
              </p>
              <p className="text-sm md:base text-gray-600">
                Color: {item.color}
              </p>
              <p className="text-sm md:base text-gray-600">Size: {item.size}</p>
              <p className="text-sm md:base text-gray-600">
                Quantity: {item.quantity}
              </p>
              <p className="text-sm md:base text-gray-600">
                Subtotal: ${((item.price * item.quantity) / 100).toFixed(2)}
              </p>
            </div>
            <button
              className="text-gray-600 hover:text-red-600"
              onClick={() => dispatch(deleteItem(item.orderId))}
            >
              <svg
                className="text-gray-400 w-5 mx-2 md:mx-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="p-4 rounded md:bg-slate-100">
        <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Subtotal:</span>
          <span className="text-gray-800">
            ${(getCartSubtotal() / 100).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Shipping:</span>
          <span className="text-gray-800">
            ${(shippingCost / 100).toFixed(2)}
          </span>{' '}
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Total:</span>
          <span className="text-gray-800">
            ${((getCartSubtotal() + shippingCost) / 100).toFixed(2)}
          </span>
        </div>
        <button className="bg-black md:text-xl text-white py-2 px-4 rounded w-full">
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
