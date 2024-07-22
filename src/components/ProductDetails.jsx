import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from '../reducers/cartReducer';

const ProductDetails = ({ items }) => {
  const id = useParams().id;
  const item = items.find((i) => i.id === id);

  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <section className="grid md:grid-cols-2 md:justify-center">
      <div className="bg-gray-500">
        <img src={item.images[0]} alt="Product" className="max-w-full" />
      </div>
      <div className="flex flex-col justify-start p-6 md:p-10">
        <h2 className="text-xl md:text-3xl font-semibold mb-4 text-gray-900">
          {item.name}
        </h2>
        <p className="text-gray-900 md:text-2xl mb-2">Color: {item.color}</p>
        <p className="text-gray-900 md:text-2xl mb-4">${(item.price / 100).toFixed(2)}</p>
        <label htmlFor="size" className="text-gray-900 md:text-xl mb-2">
          Choose a size:
        </label>
        <select
          name="size"
          id="size"
          className="mb-4 bg-gray-300 md:text-xl text-gray-900"
          onChange={(e) => setSelectedSize(e.target.value)} // Maneja el cambio del tamaño seleccionado
        >
          {['Select a size', ...item.size].map((size) => {
            return (
              <option key={size} value={size}>
                {size}
              </option>
            );
          })}
        </select>
        <button
          className="bg-black md:text-xl text-white py-2 px-4 rounded"
          onClick={() => {
            if (selectedSize) { // Verifica si se ha seleccionado un tamaño antes de hacer dispatch
              dispatch(addItem({ ...item, size: selectedSize })); // Envía el tamaño seleccionado junto con el ítem
            } else {
              alert('Please select a size before adding to cart.'); // Muestra una alerta si no se ha seleccionado un tamaño
            }
          }}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
