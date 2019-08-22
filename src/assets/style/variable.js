const noWrap = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `
}

const fixedPosition = () => {
  return `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `
}

export default {
  'theme-color': '#d44439',
  'font-color-light': '#f1f1f1',
  'font-desc': '#2E3030',
  'font-size-ss': '10px',
  'font-size-s': '12px',
  'font-size-m': '14px',
  'font-size-l': '16px',
  'font-size-ll': '18px',
  'border-color': '#e4e4e4',
  'background-color': '#f2f3f4',
  noWrap,
  fixedPosition
}