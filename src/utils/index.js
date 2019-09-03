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

export {debounce}

export const findIndex = (song, list) => {
  return list.findIndex(item => {
    return song.id === item.id
  })
}