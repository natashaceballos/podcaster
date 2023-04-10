export const formatTime = (time: string) => {
  let seconds = Math.floor(Number(time) / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(seconds / 3600)
  seconds = seconds % 60
  minutes = minutes % 60
  hours = hours % 3600

  const stringSeconds = seconds < 10 ? '0' + seconds : seconds
  const stringMinutes = minutes < 10 ? '0' + minutes : minutes
  const stringHours = hours < 10 ? '0' + hours : hours
  return hours == 0? `${stringMinutes}:${stringSeconds}`: `${stringHours}:${stringMinutes}:${stringSeconds}`
}
