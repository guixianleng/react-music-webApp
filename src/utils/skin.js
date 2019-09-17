import storage from '../utils/storage'

const skins = {}

/**
 * backgroundColor 主题背景色
 * bgColor 默认背景色
 * borderColor 边框色
 * color 默认颜色
 * themeColor 主题颜色
 */

skins.normal = {
  bgColor: '#FFF',
  color: '#333',
  borderColor: '#E4E4E4'
}

// QQ绿
skins.qqGreen = Object.assign({}, skins.normal, {
  backgroundColor: '#31C27C',
  themeColor: '#31C27C'
})

// 芒果黄
skins.mangoYellow = Object.assign({}, skins.normal, {
  backgroundColor: '#FFA500',
  themeColor: '#FFA500'
})

// 冷酷黑
skins.coolBlack = {
  backgroundColor: '#212121',
  bgColor: '#212121',
  borderColor: '#5C5E61',
  color: '#FFF',
  themeColor: '#B82525'
}

// 酷狗蓝
skins.kuGouBlue = Object.assign({}, skins.normal, {
  backgroundColor: '#2CA2F9',
  themeColor: '#2CA2F9'
})

// 网易红
skins.netBaseRed = Object.assign({}, skins.normal, {
  backgroundColor: '#D43C33',
  themeColor: '#D43C33'
})

// 芭比粉
skins.lovelyPink = Object.assign({}, skins.normal, {
  backgroundColor: '#FF7A9E',
  themeColor: '#FF7A9E'
})

// 优雅紫
skins.elegantPurple = Object.assign({}, skins.normal, {
  backgroundColor: '#341677',
  themeColor: '#341677'
})

// 暗金色
skins.gold = Object.assign({}, skins.normal, {
  backgroundColor: '#9B7300',
  themeColor: '#9B7300'
})

const setSkinStyle = (name, color) => {
  // 若为自定义
  if (name === 'userDefined') {
    skins.userDefined = Object.assign({}, skins.normal, {
      backgroundColor: color,
      themeColor: color
    })
  }
  return skins[name]
}

// 设置皮肤
setSkinStyle(storage.getSkin().name, storage.getSkin().color)

export { skins, setSkinStyle }
