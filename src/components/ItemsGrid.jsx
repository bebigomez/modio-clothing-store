import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemsGrid = ({ items }) => {
  const [filter, setFilter] = useState(null);

  // Obtener todas las categorías únicas
  const categories = [...new Set(items.map((item) => item.category))];

  // Filtrar los elementos basados en el estado del filtro
  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

  return (
    <div>
      <div>
        <button
          className="p-2 mr-1 bg-blue-400 rounded"
          onClick={() => setFilter(null)}
        >
          Mostrar Todos
        </button>
        {categories.map((category) => (
          <button
            className="p-2 mr-1 bg-blue-400 rounded"
            key={category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="border p-4">
            <img src={item.images[0]} alt={item.name} className="w-full mb-2" />
            <Link to={`${item.id}`} className="font-bold">
              {item.name}
            </Link>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsGrid;
