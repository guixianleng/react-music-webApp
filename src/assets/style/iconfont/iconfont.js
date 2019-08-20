import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1566266861832'); /* IE9 */
  src: url('iconfont.eot?t=1566266861832#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAU0AAsAAAAACrAAAATlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDdAqHWIZRATYCJAMgCxIABCAFhG0HaxtOCVFUTxpkX2DbsKcV09xhdIodBxMpiCABAAAAAHgCCAGIh2g/2pud/XK+h4jH64hGEpEkWukQxUr37qUSymkm/+HfS1/yUsvHzTmxYnKDnXYCgpmf4P6vaUosbIQqySpCBZvdy7vLAaUfB2ptvq4jtBR+r9bUBlAmMgrXvYtQse4uQKwAuMCqslNHQlUoAJSARreqDlAoXwewu2WfTmDWIbGQa8f7C7oqfb1APEtjgm7CrlZwwmjqC3at4iMzY3lVbgIfvJePLcvoUnRJP9PtB4cQ1qtYO/N/Io1JEjmcF+yyJC4AquEVhf7XYJC6AJqVCzF3gWZ8Rshq1WurlU58aFtu05TpD3106oNSIBXDRv/xOj3R0/XzoN9LD6xWiyBZ7QkKq01ebbgFq4DhBwgqa42gY2unwQFTx7UbYB8Qh4H4TtBXvEXFIYoUBtvautp6Wdm62/p42ep+c8TKoNheqp9+y2Pe8bkPQva9WLpky6xt7oJlppHZbnzFcvuQW8l+muYxDJ/jhCw79i6PniVgWdNqEqa83Gx+4ZYMyaNxfJkrutRDslxovcQ/kpvNcg+4rJ2kc/nUjuhhgeAkXdoB81MZBh9qs9HbI6AdSp5MPcp6r7qQk+Ah1mBlw+4LE2k6bhczQZM/ZBheFseNOcMaO0wvxdTTI4n/J/hKKkK43RQu2LbDUyFrlCuaRluvpGaPmIZn7QiYY18x2sZhNkBIa/tZCGKCghRWHwjJh2aBgWYPDeRgWx1dgVZLEKUK14gp79+9iHsW93+x+Fv8t/xoEAiLT2P//2PQnKYw1FRdyx1emV+F3zoTuV612o9kr/ND9KAF9RYvba41mS0xa6JaU2beGpMIF8FE+nLgy6ww3P30aWzXsp7aGgFvoiTMSKA7KEjAIeIoBDqEUlTkgAaZOw9Vo5q5czW4xLy5iAZRz5sHZhx8utEmP9G1z761CFsypb0t/tSbLl7E+gNaC7GsyeJXgkhRW4JugZUovCFUpNRVjzGrzwtV5BQX+fWlNMcVD0yPLdNPcKx1BEEXsk5if/9iJw1EYVsd1dk8yNgIOQ5Cs5HCUFOL+P7xauDxkC5Uh8UGXlmDBUR8/AmV2pA4AQgiBukOLY3yjEF6QntCg6IAx9uokhh+TAyIcbTRjDE65ojmQ5E+mk4FAKbTeT4PQD6vf+W5J/M29s7yJAdQ/pYA+amwP/bb2Nz6nvQ1yf0/zlXw72XXN+wykRXkC8Co0FjxGysajqmKSneMVRqaZRdDGa//GYmCWWMSP294m+dDGnc2riSMdkZQDA5CGp0gV/oF6MxZgd7oIsw6r2LvOdu1aYg6g3OmEhCaPVAs+gOpuUWu9GfQ2eUb9Fo0YNadcDnknFOR9ks0k+UQ8V9UBVJFpsv2/eoHx64gHVd5/E/WJo1iUnxiOnviivUQW7T7eNlhI5RrKbGcOBsXhaBRS8aBnSqtfa8SEuRFtzSVSAl9V2mMWCyEcL+QSkBUImd6q595/gcWcwpEVwwoS35impEuHCWJl9iAfNJXjQZcSmM7L7bUQSYiSM5WihIqJ72sMFICGYtXyrCANaXskHhbSSAnkjfVT6c3lnd6HszSr2iMEhk1uuhjiDFmDA/F/Tiqej0p/aYmEddutyLGSSuxVFVwG5eIqrhbgZxl/5y0JZSGVAEAAAAA') format('woff2'),
  url('iconfont.woff?t=1566266861832') format('woff'),
  url('iconfont.ttf?t=1566266861832') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1566266861832#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icongouxuan:before {
  content: "\e648";
}

.iconxiayishou:before {
  content: "\e606";
}

.iconsousuo:before {
  content: "\e604";
}

.iconyinle:before {
  content: "\e6bb";
}

.iconbofang:before {
  content: "\e710";
}

.iconxiangzuo:before {
  content: "\eb15";
}

.iconcaidan:before {
  content: "\e610";
}


`