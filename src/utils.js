export const shuffle = (array) => {
  let currentIndex = array.length

  // Mientras queden elementos por mezclar...
  while (currentIndex != 0) {
    // Elegir un elemento restante...
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // E intercambiarlo con el elemento actual.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

export const formatPrice = (price) => {
  return (price / 100).toFixed(2)
}
