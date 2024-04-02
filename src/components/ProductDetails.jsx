import { useParams } from 'react-router-dom';

const ProductDetails = ({ items }) => {
  const id = useParams().id;
  const item = items.find((i) => i.id === id);

  return (
    <section className="flex flex-row h-screen">
      <div className="bg-gray-500 w-1/2 flex items-center justify-center">
        <img
          src={item.images[0]}
          alt="Product"
          className="max-w-full max-h-full"
        />
      </div>
      <div className="bg-gray-700 w-1/2 flex flex-col justify-center p-8">
        <h2 className="text-xl font-semibold mb-4 text-white">{item.name}</h2>
        <p className="text-gray-400 mb-4">${item.price}</p>
        <label htmlFor="cars" className="text-gray-400 mb-2">
          Choose a size:
        </label>
        <select
          name="size"
          id="size"
          className="mb-4 bg-gray-800 text-gray-300"
        >
          <option value="volvo">S</option>
          <option value="saab">M</option>
          <option value="mercedes">L</option>
        </select>
        <button className="bg-gray-800 text-white py-2 px-4 rounded">
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
