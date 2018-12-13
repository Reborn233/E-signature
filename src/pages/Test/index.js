import React, { Component } from 'react'
import { Tab, TabBar, Button, Agreement, ButtonArea, NavBar } from 'react-weui'
import Page from '../../components/Page'
import { observer, inject } from 'mobx-react'

import { withRouter } from 'react-router-dom'
import Serve from './server'

@inject('formStore')
@observer
class Agree extends Component {
  checkHandler(e) {
    const { agree } = this.props.formStore
    agree(e.target.checked)
  }

  next() {
    this.props.history.push('/Agreement')
  }

  render() {
    const { checked } = this.props.formStore
    return (
      <Page>
        <Tab>
          <NavBar style={{ display: 'block' }}>
            <h3 className="title">试乘试驾协议书</h3>
          </NavBar>
          <Serve />
          <TabBar style={{ display: 'block' }}>
            <Agreement
              defaultChecked={checked}
              onChange={this.checkHandler.bind(this)}
            >
              &nbsp;&nbsp;我已认真阅读并同意 <a>认证授权</a>
            </Agreement>
            <ButtonArea>
              <Button disabled={!checked} onClick={this.next.bind(this)}>
                协议签署
              </Button>
            </ButtonArea>
          </TabBar>
        </Tab>
      </Page>
    )
  }
}

export default withRouter(Agree)
