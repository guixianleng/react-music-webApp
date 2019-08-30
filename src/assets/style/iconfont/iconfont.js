import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
src: url('iconfont.eot?t=1567144730723'); /* IE9 */
src: url('iconfont.eot?t=1567144730723#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
url('iconfont.woff?t=1567144730723') format('woff'),
url('iconfont.ttf?t=1567144730723') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
url('iconfont.svg?t=1567144730723#iconfont') format('svg'); /* iOS 4.1- */
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

.iconyduixiayiqu:before {
content: "\e6a1";
}

.iconyduishangyiqu:before {
content: "\e60c";
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

.iconswticonyinle2:before {
content: "\e614";
}

.iconguanbi:before {
content: "\e603";
}

.iconsousuo:before {
content: "\e604";
}

.icondanquxunhuan:before {
content: "\e608";
}

.iconliebiaoxunhuan:before {
content: "\e609";
}

.iconshoucang1:before {
content: "\e64f";
}

.iconsuijibofang:before {
content: "\e66b";
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

.iconGroup-1:before {
content: "\e68e";
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

.iconyinleliebiao:before {
content: "\e674";
}

.iconQQ1:before {
content: "\e62f";
}

.iconxia:before {
content: "\e624";
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

.iconyinpinbofang:before {
content: "\e666";
}

.iconzanting:before {
content: "\e669";
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

.iconsuiji:before {
content: "\e71f";
}

.iconlianjie:before {
content: "\e63c";
}
`