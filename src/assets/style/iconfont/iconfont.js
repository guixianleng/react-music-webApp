import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1567065551197'); /* IE9 */
  src: url('iconfont.eot?t=1567065551197#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1567065551197') format('woff'),
  url('iconfont.ttf?t=1567065551197') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1567065551197#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconbofang1:before {
  content: "\e62c";
}

.iconqqkongjian:before {
  content: "\e80f";
}

.icongouxuan:before {
  content: "\e648";
}

.iconshoucang:before {
  content: "\e60a";
}

.iconfenxiang-copy:before {
  content: "\e632";
}

.iconyinlemusic215:before {
  content: "\e618";
}

.iconicon_weibo:before {
  content: "\e631";
}

.iconxiazai1:before {
  content: "\e60b";
}

.iconxiayishou:before {
  content: "\e606";
}

.iconguanbi:before {
  content: "\e603";
}

.iconsousuo:before {
  content: "\e604";
}

.iconshoucang1:before {
  content: "\e64f";
}

.iconpinglun:before {
  content: "\e61a";
}

.icon-sixin:before {
  content: "\e612";
}

.iconyinle1:before {
  content: "\e601";
}

.iconshoucangdaogedan:before {
  content: "\e607";
}

.iconlisten:before {
  content: "\e721";
}

.iconfenxiang:before {
  content: "\e626";
}

.iconGroup-:before {
  content: "\e68f";
}

.iconbofang:before {
  content: "\e710";
}

.iconxiazai:before {
  content: "\e64b";
}

.iconxiangzuo:before {
  content: "\eb15";
}

.iconQQ1:before {
  content: "\e62f";
}

.icontianjia:before {
  content: "\e605";
}

.iconweixin:before {
  content: "\e637";
}

.icongengduo:before {
  content: "\eb30";
}

.iconqqyinle:before {
  content: "\e634";
}

.iconshiting:before {
  content: "\e602";
}

.iconxiangyou:before {
  content: "\e649";
}

.iconerweima:before {
  content: "\e600";
}

.iconpengyouquan:before {
  content: "\e667";
}

.iconQQ:before {
  content: "\e668";
}

.iconcaidan:before {
  content: "\e610";
}

.iconlianjie:before {
  content: "\e63c";
}
`