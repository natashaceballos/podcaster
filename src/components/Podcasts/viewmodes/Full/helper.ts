export const formatTime = (time: string) => {
  let seconds = Math.floor(Number(time) / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  minutes = minutes % 60

  const stringSeconds = String(seconds).padStart(2, '0')
  const stringMinutes = String(minutes).padStart(2, '0')
  const stringHours = String(hours).padStart(2, '0')

  return hours == 0
    ? `${stringMinutes}:${stringSeconds}`
    : `${stringHours}:${stringMinutes}:${stringSeconds}`
}
