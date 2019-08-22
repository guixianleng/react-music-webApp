import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
src: url('iconfont.eot?t=1566463774678'); /* IE9 */
src: url('iconfont.eot?t=1566463774678#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
url('iconfont.woff?t=1566463774678') format('woff'),
url('iconfont.ttf?t=1566463774678') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
url('iconfont.svg?t=1566463774678#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
font-family: "iconfont" !important;
font-size: 16px;
font-style: normal;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
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