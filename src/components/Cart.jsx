import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../reducers/cartReducer';

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart bg-gray-100 p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
      <div className="cart-items">
        {items.map((item, index) => (
          <div className="cart-item flex border-b border-gray-200 py-4" key={index}>
            <img src={item.images[0]} alt={item.name} className="w-40 h-40 mr-4 rounded" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">Category: {item.category}</p>
              <p className="text-gray-600">Gender: {item.gender}</p>
              <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
              <p className="text-gray-600">Color: {item.color}</p>
              <p className="text-gray-600">Size: {item.size}</p>
            </div>
            <button className="text-gray-600 hover:text-red-600" onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
