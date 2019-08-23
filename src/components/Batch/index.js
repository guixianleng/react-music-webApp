import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { forceCheck } from 'react-lazyload'
import { CSSTransition } from 'react-transition-group'
import { Container } from './style'

import Scroll from '../../components/Scroll'
import Header from './header'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static propTypes = {
    close: PropTypes.func.isRequired,
    songList: PropTypes.array,
    show: PropTypes.bool
  }
  static defaultProps = {
    songList: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
    show: false
  }
  handleClose() {
    this.props.close()
  }
  handleSelectAll = (val) => {
    console.log(val)
  }
  render() {
    const { songList, show } = this.props
    return (
      <CSSTransition
        in={show}
        timeout={300}
        classNames="pop"
        appear={true}
        unmountOnExit
      >
        <Fragment>
          <Container className="batch">
            <Header
              selectAll={this.handleSelectAll.bind(this)}
              close={this.handleClose.bind(this)}
            >
            </Header>
            <div className="wrapper-batch">
              <Scroll onScroll={() => { forceCheck() }}>
                <div>
                  <ul className="batch-ul">
                    {
                      songList.map((item, index) => {
                        return (
                          <li key={item + index} className="batch-li">
                            <div className="song-select">{index + 1}</div>
                            <div className="song-info">
                              <span>遇见</span>
                              <span>童珺</span>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </Scroll>
            </div>
            <div className="footer">
              <div>
                <i className="iconfont">&#xe60b;</i>
                <span>下载</span>
              </div>
              <div>
                <i className="iconfont">&#xe605;</i>
                <span>添加到</span>
              </div>
            </div>
          </Container>
        </Fragment>
      </CSSTransition>
    )
  }
}
