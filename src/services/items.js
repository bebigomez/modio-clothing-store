import axios from "axios"

export const getAll = () => {
  return axios.get(
    "https://gist.githubusercontent.com/bebigomez/19a2a2a461051227d61e15ffd7738203/raw/3795535b7bc56a2f89da21d6f1c35293463c53f5/modioItems.json"
  )
}
