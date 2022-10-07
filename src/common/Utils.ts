import { sortBy } from 'lodash'

export namespace Utils {
  export function makeTimeString(n: number | null) {
    if (!n) return '00:00'
    const minutes = Math.floor(n / 60)
    const seconds = Math.floor(n % 60)
    return String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
  }

  export function median(numbers: number[]) {
    const filtered = numbers.filter(n => !!n)
    const sorted = sortBy(filtered, n => n)
    if (sorted.length === 0) return 0
    const median = sorted.length % 2 === 0 ? sorted.length / 2 : Math.floor(sorted.length / 2) + 1
    return sorted[median]
  }

  export function ellipsis(str: string, max: number) {
    if (str.length < max) return str
    else return str.substr(0, max) + '...'
  }
}
