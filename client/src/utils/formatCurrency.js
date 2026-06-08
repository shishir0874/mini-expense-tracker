export default function formatCurrency(value = 0, locale = 'en-US', currency = 'USD') {
  const num = Number(value) || 0
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(num)
}
