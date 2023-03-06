// Paso 1
import numeral from 'numeral'

// Paso 2
// Función que recibe un argumento (Número o String numérico) y lo devuelve formateado
// Si no hay numero, devolvemos 0
const formatNumber = (num) => {
  if (!num) {
    return 0
  }
  return numeral(Number(num)).format()
}

// Paso 3
export {
  formatNumber
}