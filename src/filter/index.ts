import { formatYYYYMMDD } from '../utils/time'
const currency: String = 'Rp'
function currencyText(text: any) {
  return `${currency} ${text}`
}
export {
  formatYYYYMMDD,
  currencyText
}