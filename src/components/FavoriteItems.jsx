import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteItems = ({ items }) => {
  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const favoriteItems = shuffle(items).slice(0, 8);

  return (
    <section className="m-2 md:m-6">
      <h3 className="text-2xl md:text-3xl font-roboto-condensed font-semibold mb-10 text-center">
        {"People's Favorite Items".toUpperCase()}
      </h3>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-8">
        {favoriteItems.map((item) => {
          return (
            <div key={item.id} className="rounded-xl shadow-md">
              <div>
                <img className="mb-2 rounded-t-xl" src={item.images[0]}></img>
              </div>
              <div className="space-y-2 p-2">
                <Link
                  to={`product/${item.id}`} className="text-base font-roboto-condensed font-semibold">
                  {item.name}
                </Link>
                <p className="text-sm">${(item.price / 100).toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FavoriteItems;
