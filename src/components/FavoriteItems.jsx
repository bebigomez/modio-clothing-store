import { Link } from "react-router-dom"
import { shuffle, formatPrice } from "../utils"

const FavoriteItems = ({ items }) => {
  const favoriteItems = shuffle(items).slice(0, 8)

  return (
    <section className="m-2 md:m-6">
      <h3 className="text-2xl md:text-3xl font-roboto-condensed font-semibold mb-10 text-center">
        {"PEOPLE'S FAVORITE ITEMS"}
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
                  to={`product/${item.id}`}
                  className="text-base font-roboto-condensed font-semibold"
                >
                  {item.name}
                </Link>
                <p className="text-sm">{formatPrice(item.price)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FavoriteItems
