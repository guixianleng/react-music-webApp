import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from './style'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default class Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  static propTypes = {
    bannerList: PropTypes.array
  }
  static defaultProps = {
    bannerList: []
  }
  componentDidMount () {
    if (!this.sliderSwiper) {
      this.sliderSwiper = new Swiper('.slider-container', {
        observer: true,
        observeParents: true,
        loop: true,
        autoplay: true,
        autoplayDisableOnInteraction: false,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
  toLink (linkUrl) {
    /* 使用闭包把参数变为局部变量使用 */
    return () => {
      window.location.href = linkUrl
    }
  }
  render () {
    const { bannerList } = this.props
    return (
      <Container>
        <div className="slider-container">
          <div className="swiper-wrapper">
            {
              bannerList.map(slider => {
                return (
                  <div className="swiper-slide" key={slider.id}>
                    <div className="slider-nav" onClick={this.toLink(slider.linkUrl)}>
                      <img src={slider.picUrl} width="100%" height="100%" alt="推荐" />
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div> 
      </Container>
    )
  }
}
