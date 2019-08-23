/**
 * 数字单位转换
 * @param {需要转化的数} num 
 */
export const transNumber = (num) => {
  let numStr = parseInt(num).toString()
  if (numStr.length < 5) { // 一万以内直接返回 
    return num
  } else if (numStr.length > 8) { // 大于8位数是亿
    let decimal = numStr.substring(numStr.length - 8)
    return parseInt(parseInt(num / 100000000) + '.' + decimal) + '亿'
  } else {
    let decimal = numStr.substring(numStr.length - 4)
    return parseInt(parseInt(num / 10000) + '.' + decimal) + '万'
  }
}

