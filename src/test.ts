const str = "03-o-ser-humano-desordenado-apos-o-pecado"
let peaces = str.split("-")
let newPeaces = peaces.map((peace) => {
  let firstLetter = peace[0]
  let rest = peace.substring(1)
  return firstLetter?.toUpperCase() + rest
})


console.log(newPeaces.join(" "));