import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const ItemsGrid = ({ items }) => {
  const { section } = useParams();
  const itemsByGender = items.filter((i) => i.gender === section[0].toUpperCase() + section.substring(1));

  const [categoryFilter, setCategoryFilter] = useState(null);

  const categories = [...new Set(itemsByGender.map((item) => item.category))];

  // Filtrar los elementos basados en el estado del filtro
  const filteredItems = categoryFilter
    ? itemsByGender.filter((item) => item.category === categoryFilter)
    : itemsByGender; // Utilizar itemsByGender en lugar de items

  // Obtener la ubicación actual para detectar cambios de ruta
  const location = useLocation();

  // Restablecer el filtro cuando cambie la ruta
  useEffect(() => {
    setCategoryFilter(null);
  }, [location.pathname]);

  return (
    <div>
      <div>
        <button
          className="p-2 mr-1 bg-blue-400 rounded"
          onClick={() => setCategoryFilter(null)}
        >
          Mostrar Todos
        </button>
        {categories.map((category) => (
          <button
            className="p-2 mr-1 bg-blue-400 rounded"
            key={category}
            onClick={() => setCategoryFilter(category)}
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
