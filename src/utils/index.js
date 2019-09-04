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

// 查找是否存在
export const findIndex = (id, list) => {
  return list.findIndex(item => {
    return id === item.id
  })
}

// 生成随机数
export const rand = (function(){
  const today = new Date()
  let seed = today.getTime()
  function rnd () {
    seed = ( seed * 9301 + 49297 ) % 233280
    return seed / ( 233280.0 )
  }
  return function rand(number) {
    return Math.ceil(rnd(seed) * number)
  }
})()
