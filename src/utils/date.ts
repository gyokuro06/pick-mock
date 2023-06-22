export const getJpnDay = (date: Date) => {
  switch(date.getDay()) {
    case 0: return '日'
    case 1: return '月'
    case 2: return '火'
    case 3: return '水'
    case 4: return '木'
    case 5: return '金'
    case 6: return '土'
  }
}

export const toFormattedDateString = (date: Date): string => {
  const m = date.getMonth() + 1
  const d = date.getDate()
  const day = getJpnDay(date)
  return m + '月' + d + '日(' + day + ')'
}

export const toFormattedDateTimeString = (date: Date): string => {
  const d = toFormattedDateString(date)
  const h = date.getHours().toString().padStart(2, '0')
  const m = date.getMinutes().toString().padStart(2, '0')
  const s = date.getSeconds().toString().padStart(2, '0')
  return d + ' ' + h + ':' + m + ':' + s
}

export const nDaysLaterFrom = (date: Date, n: number) => {
  const nDaysLaterDate = new Date(date.getTime())
  nDaysLaterDate.setDate(date.getDate() + n)
  return nDaysLaterDate
}
