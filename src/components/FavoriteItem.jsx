import { Link } from "react-router-dom"
import { formatPrice } from "../utils"

const FavoriteItem = ({ item }) => {
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
        <p className="text-sm">${formatPrice(item.price)}</p>
      </div>
    </div>
  )
}

export default FavoriteItem