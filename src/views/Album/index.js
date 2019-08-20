import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import NavBar from '../../components/NavBar'
import { Content } from './style'
import bgImg from '../../assets/images/skin_bg.jpg'

export default class Album extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }
  componentDidMount () {
    this.setState({
      show: true
    })
  }
  componentWillUnmount () {
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <CSSTransition
        in={this.state.show}
        timeout={300}
        classNames="pop-right"
        appear={true} 
        unmountOnExit
        onExited={() => this.props.history.goBack()}
      >
        <Content bgImg={bgImg}>
          <NavBar title="专辑" />
        </Content>
      </CSSTransition>
    )
  }
}
