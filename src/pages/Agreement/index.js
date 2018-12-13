import React, { Component } from 'react'
import { Tab, NavBar } from 'react-weui'
import Page from '../../components/Page'
import { observer, inject } from 'mobx-react'

import { withRouter } from 'react-router-dom'
import Table from './table'

@inject('formStore')
@observer
class Agree extends Component {
  checkHandler(e) {
    const { agree } = this.props.formStore
    agree(e.target.checked)
  }

  next() {
    this.props.history.push('/face')
  }

  render() {
    return (
      <Page>
        <Tab>
          <NavBar style={{ display: 'block' }}>
            <h3 className="title">试乘试驾反馈表</h3>
          </NavBar>
          <Table />
        </Tab>
      </Page>
    )
  }
}

export default withRouter(Agree)
