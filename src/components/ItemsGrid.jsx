import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ItemView from './ItemView';

const ItemsGrid = ({ items }) => {
  const [itemsToRender, setItemsToRender] = useState(items);
  const { section } = useParams();
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [query, setQuery] = useState('');

  const categories = [...new Set(itemsToRender.map((item) => item.category))];

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q');
    setQuery(query);

    if (query) {
      setItemsToRender(
        items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setItemsToRender(
        items.filter(
          (item) =>
            item.gender === section[0].toUpperCase() + section.substring(1)
        )
      );

      if (categoryFilter) {
        setItemsToRender(
          itemsToRender.filter((item) => item.category === categoryFilter)
        );
      }
    }
  }, [location, categoryFilter]); // Solo ejecutamos este bloque si location o categoryFilter cambia

  useEffect(() => {
    setCategoryFilter(null);
  }, [location.pathname]);

  return (
    <>
      {!query && ( // Renderizar solo si no hay consulta de búsqueda activa
        <div className="text-center space-x-2 space-y-2 mx-4">
          <button
            className="border border-black px-1.5 py-1 rounded hover:bg-gray-300"
            onClick={() => setCategoryFilter(null)}
          >
            Show all
          </button>
          {categories.map((category) => (
            <button
              className="border border-black px-1.5 py-1 rounded hover:bg-gray-300"
              key={category}
              onClick={() => setCategoryFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div>
        {itemsToRender.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-4 pt-8">
            {itemsToRender.map((item) => (
              <ItemView key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="pt-32 flex justify-center">
            <h3 className="text-black">No matching items found</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemsGrid;