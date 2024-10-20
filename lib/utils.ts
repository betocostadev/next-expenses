export function addCommasFinance(num: number): string {
  const value = num.toFixed(2)
  // return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
