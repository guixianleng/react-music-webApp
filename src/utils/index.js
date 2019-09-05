//节流函数
let timer
const debounce = (func, delay) => {
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export { debounce }

// 查找是否存在
export const findIndex = (id, list) => {
  return list.findIndex(item => {
    return id === item.id
  })
}

// 生成随机数
export const rand = (function () {
  const today = new Date()
  let seed = today.getTime()
  function rnd() {
    seed = (seed * 9301 + 49297) % 233280
    return seed / (233280.0)
  }
  return function rand(number) {
    return Math.ceil(rnd(seed) * number)
  }
})()

export function getCurrentTime (second) {
  second = Math.floor(second)
  let minute = Math.floor(second / 60)
  second = second - minute * 60
  return minute + ':' + formatTime(second)
}

export function formatTime (time) {
  let timeStr = '00'
  if (time > 0 && time < 10) {
    timeStr = '0' + time;
  } else if (time >= 10) {
    timeStr = time
  }
  return timeStr
}
