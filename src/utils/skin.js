import storage from '../utils/storage'

const skins = {}

skins.qqGreen = {
  backgroundColor: '#31C27C',
  color: '#31C27C'
};

skins.mangoYellow = {
  backgroundColor: '#FFA500',
  color: '#FFA500'
}

skins.coolBlack = {
  backgroundColor: '#212121',
  color: '#212121'
};

skins.kuGouBlue = {
  backgroundColor: '#2CA2F9',
  color: '#2CA2F9'
};

skins.netBaseRed = {
  backgroundColor: '#D43C33',
  color: '#D43C33'
};

const setSkinStyle = (skin) => {
  if (!skin) {
    return false
  }
  return skin
};

// 设置皮肤
setSkinStyle(skins[storage.getSkin()]);

export { skins, setSkinStyle }