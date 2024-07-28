import { shuffle } from "../utils"
import FavoriteItem from "./FavoriteItem"

const FavoriteItems = ({ items }) => {
  const favoriteItems = shuffle(items).slice(0, 8)

  return (
    <section className="m-2 md:m-6">
      <h3 className="text-2xl md:text-3xl font-roboto-condensed font-semibold mb-10 text-center">
        {"PEOPLE'S FAVORITE ITEMS"}
      </h3>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-8">
        {favoriteItems.map((item) => (
          <FavoriteItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default FavoriteItems
