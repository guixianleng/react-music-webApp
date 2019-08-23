import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
src: url('iconfont.eot?t=1566532575411'); /* IE9 */
src: url('iconfont.eot?t=1566532575411#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
url('iconfont.woff?t=1566532575411') format('woff'),
url('iconfont.ttf?t=1566532575411') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
url('iconfont.svg?t=1566532575411#iconfont') format('svg'); /* iOS 4.1- */
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