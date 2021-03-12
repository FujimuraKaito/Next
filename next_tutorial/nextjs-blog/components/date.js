import { parseISO, format } from 'date-fns'
import { de } from 'date-fns/locale'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  // returnもHTML要素っぽく
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}