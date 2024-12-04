export const formatDate = (date: Date) => {
  const d = Date.parse(String(date));
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }
  return new Intl.DateTimeFormat('ru', options).format(new Date(d))
}