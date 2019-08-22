import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { Container } from './style'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {  }
  }
  static propTypes = {
    close: PropTypes.func.isRequired,
    shareTypes: PropTypes.array
  }
  static defaultProps = {
    shareTypes: [
      {
        name: '微信好友',
        iconName: '&#xe637;',
        className: 'wechat',
        id: 1
      },
      {
        name: '朋友圈',
        iconName: '&#xe667;',
        className: 'friends',
        id: 2
      },
      {
        name: 'QQ好友',
        iconName: '&#xe62f;',
        className: 'qq',
        id: 3
      },
      {
        name: 'QQ空间',
        iconName: '&#xe80f;',
        className: 'zone',
        id: 4
      },
      {
        name: '新浪微博',
        iconName: '&#xe631;',
        className: 'sina',
        id: 5
      },
      {
        name: '私信',
        iconName: '&#xe612;',
        className: 'letter',
        id: 6
      },
      {
        name: '二维码',
        iconName: '&#xe600;',
        className: 'q-code',
        id: 7
      }
    ]
  }
  handleClose () {
    this.props.close()
  }
  render() {
    const { shareTypes } = this.props
    return (
      <CSSTransition
        in={this.props.show}
        timeout={300}
        classNames="pop"
        appear={true}
        unmountOnExit
      >
        <Container className="share" onClick={this.handleClose.bind(this)}>
          <div className="wrapper-share">
            <div className="types">
              {
                shareTypes.map(item => {
                  return (
                    <div className="types-items" key={item.id}>
                      <div>
                        <i
                          className={`iconfont ${item.className}`}
                          dangerouslySetInnerHTML={{__html: item.iconName}}
                        >
                        </i>
                      </div>
                      <span>{item.name}</span>
                    </div>
                  )
                })
              }
            </div>
            <div className="close" onClick={this.handleClose.bind(this)}>取消</div>
          </div>
        </Container>
      </CSSTransition>
    )
  }
}
