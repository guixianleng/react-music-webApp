import { createGlobalStyle } from 'styled-components';

export const AnimateStyle = createGlobalStyle`
  /* 菜单动画 */
  .fade {
    &-enter {
      opacity: 0;
      &-active {
        transition: opacity .3s;
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
    &-exit {
      transition: opacity .3s;
      transform: translate3d(0, 0, 0);
      opacity: 1;
      &-active {
        opacity: 0
      }
    }
  }
  /* 菜单动画 */
  .fade-left {
    &-enter {
      transform: translate3d(-90%, 0, 0);
      &-active {
        transition: transform .3s;
        transform: translate3d(0, 0, 0);
      }
    }
    &-exit {
      transform: translate3d(0, 0, 0);
      &-active {
        transition: transform .3s;
        transform: translate3d(-100%, 0, 0);
      }
    }
  }
  /* 皮肤中心过度动画效果 */
  .pop {
    &-enter {
      transform: translate3d(0, 100%, 0);
      &-active {
        transition: transform .3s;
        transform: translate3d(0, 0, 0);
      }
    }
    &-exit {
      transform: translate3d(0, 0, 0);
      &-active {
        transition: transform .3s;
        transform: translate3d(0, 100%, 0);
      }
    }
  }
  /* 皮肤中心过度动画效果 */
  .pop-right {
    &-enter {
      transform: translate3d(100%, 0, 0);
      &-active {
        transition: transform .3s;
        transform: translate3d(0, 0, 0);
      }
    }
    &-exit {
      transform: translate3d(0, 0, 0);
      &-active {
        transition: transform .3s;
        transform: translate3d(100%, 0, 0);
      }
    }
  }
  .fly {
    &-enter {
      transform: rotateZ(30deg) translate3d(100%, 0, 0);
      &-active {
        transition: transform .3s;
        transform: rotateZ(0deg) translate3d(0, 0, 0);
      }
    }
    &-appear {
      transform: rotateZ(30deg) translate3d(100%, 0, 0);
      &-active {
        transition: transform .3s;
        transform: rotateZ(0deg) translate3d(0, 0, 0);
      }
    }
    &-exit{
      transform: rotateZ(0deg) translate3d(0, 0, 0);
      &-active{
        transition: transform .3s;
        transform: rotateZ(30deg) translate3d(100%, 0, 0);
      }
    }
  }
`