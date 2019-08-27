import React, { Component } from 'react'
import { Tabs, TabsItem } from '../../baseUI/Tabs'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIndex: '1'
    }
  }
  handleChangeTabs (item) {
    this.setState({
      activeIndex: item.key
    })
  }
  render() {
    return (
      <div>
        <Tabs activeIndex={this.state.activeIndex} onChange={this.handleChangeTabs.bind(this)}>
          <TabsItem name="tab1" key="1">
            撒噶是的贵
          </TabsItem>
          <TabsItem name="tab2" key="2">
            是根深蒂固多少
          </TabsItem>
          <TabsItem name="tab1" key="3">
            撒噶是的贵
          </TabsItem>
          <TabsItem name="tab2" key="4">
            是根深蒂固多少
          </TabsItem>          
        </Tabs>
      </div>
    )
  }
}
