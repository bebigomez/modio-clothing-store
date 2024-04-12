import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const ItemsGrid = ({ items }) => {
  const [itemsToRender, setItemsToRender] = useState(items);
  const { section } = useParams();
  const [categoryFilter, setCategoryFilter] = useState(null);

  const categories = [...new Set(itemsToRender.map((item) => item.category))];

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q');

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
  }, [location.search, section, items, categoryFilter]); // Only re-run effect if location.search or items change

  useEffect(() => {
    setCategoryFilter(null)
  }, [location.pathname]); 

  return (
    <>
      <div className="text-center mb-6 space-x-2 space-y-2 pt-16 mx-4">
        <button
          className="border border-black px-1.5 py-1 rounded hover:bg-gray-300"
          onClick={() => setCategoryFilter(null)}
        >
          Show all
        </button>
        {categories.map((category) => (
          <button
            className="mr-1 border border-black px-1.5 py-1 rounded hover:bg-gray-300"
            key={category}
            onClick={() => setCategoryFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        {itemsToRender.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-4">
            {itemsToRender.map((item) => (
              <div key={item.id} className="p-4">
                <Link to={`${item.id}`}>
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full mb-2 rounded-xl"
                  />
                </Link>
                <Link
                  to={`${item.id}`}
                  className="text-gray-800 font-roboto-condensed font-bold md:text-2xl"
                >
                  {item.name}
                </Link>
                <div className="text-gray-800 font-roboto-condensed md:text-2xl">
                  ${(item.price / 100).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3 className="text-black">No matching items found</h3>
            <button className="bg-black md:text-xl text-white py-2 px-4 rounded">
              Show all products
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemsGrid;

//     <div className="mb-40 md:px-8 py-20">
//       <div className="text-center mb-6 space-x-2 space-y-2">
//         <button
//           className="border border-black px-1.5 py-1 rounded hover:bg-gray-300"
//           onClick={() => setCategoryFilter(null)}
//         >
//           Mostrar Todos
//         </button>
//         {categories.map((category) => (
//           <button
//             className="mr-1 border border-black px-1.5 py-1 rounded hover:bg-gray-300"
//             key={category}
//             onClick={() => setCategoryFilter(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="grid md:grid-cols-3 gap-4">
//         {filteredItems.map((item) => (
//           <div key={item.id} className="p-4">
//             <Link to={`${item.id}`}>
//               <img
//                 src={item.images[0]}
//                 alt={item.name}
//                 className="w-full mb-2 rounded-xl"
//               />
//             </Link>
//             <Link
//               to={`${item.id}`}
//               className="text-gray-800 font-roboto-condensed font-bold md:text-2xl"
//             >
//               {item.name}
//             </Link>
//             <div className="text-gray-800 font-roboto-condensed md:text-2xl">
//               ${(item.price / 100).toFixed(2)}
//             </div>
//           </div>
//         ))}
//       </div>
//       {queryItems ? <h1>matching item</h1> : <h1>no match</h1>}
//     </div>
//   );

//   const { section } = useParams();

//   // Obtener la ubicación actual para detectar cambios de ruta

//   console.log('items...', items);
//   console.log('query...', query);

//   // Aplicar filtro por query si está presente

//   let queryItems;

//   const itemsByGender = items.filter(
//     (i) => i.gender === section[0].toUpperCase() + section.substring(1)
//   );

//   const [categoryFilter, setCategoryFilter] = useState(null);

//   const categories = [...new Set(itemsByGender.map((item) => item.category))];

//   // Filtrar los elementos basados en el estado del filtro
//   const filteredItems = categoryFilter
//     ? itemsByGender.filter((item) => item.category === categoryFilter)
//     : itemsByGender; // Utilizar itemsByGender en lugar de items

//   // Restablecer el filtro cuando cambie la ruta
//   useEffect(() => {
//     setCategoryFilter(null);
//   }, [location.pathname]);

//   return (
//     <div className="mb-40 md:px-8 py-20">
//       <div className="text-center mb-6 space-x-2 space-y-2">
//         <button
//           className="border border-black px-1.5 py-1 rounded hover:bg-gray-300"
//           onClick={() => setCategoryFilter(null)}
//         >
//           Mostrar Todos
//         </button>
//         {categories.map((category) => (
//           <button
//             className="mr-1 border border-black px-1.5 py-1 rounded hover:bg-gray-300"
//             key={category}
//             onClick={() => setCategoryFilter(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="grid md:grid-cols-3 gap-4">
//         {filteredItems.map((item) => (
//           <div key={item.id} className="p-4">
//             <Link to={`${item.id}`}>
//               <img
//                 src={item.images[0]}
//                 alt={item.name}
//                 className="w-full mb-2 rounded-xl"
//               />
//             </Link>
//             <Link
//               to={`${item.id}`}
//               className="text-gray-800 font-roboto-condensed font-bold md:text-2xl"
//             >
//               {item.name}
//             </Link>
//             <div className="text-gray-800 font-roboto-condensed md:text-2xl">
//               ${(item.price / 100).toFixed(2)}
//             </div>
//           </div>
//         ))}
//       </div>
//       {queryItems ? <h1>matching item</h1> : <h1>no match</h1>}
//     </div>
//   );
// };
