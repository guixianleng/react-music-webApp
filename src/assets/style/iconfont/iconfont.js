import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
src: url('iconfont.eot?t=1566367255837'); /* IE9 */
src: url('iconfont.eot?t=1566367255837#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
url('iconfont.woff?t=1566367255837') format('woff'),
url('iconfont.ttf?t=1566367255837') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
url('iconfont.svg?t=1566367255837#iconfont') format('svg'); /* iOS 4.1- */
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

.iconshoucang:before {
content: "\e60a";
}

.iconfenxiang-copy:before {
content: "\e632";
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

.iconyinle1:before {
content: "\e601";
}

.iconshoucangdaogedan:before {
content: "\e607";
}

.iconfenxiang:before {
content: "\e626";
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

.icongengduo:before {
content: "\eb30";
}

.iconqqyinle:before {
content: "\e634";
}

.iconxiangyou:before {
content: "\e649";
}

.iconcaidan:before {
content: "\e610";
}
`