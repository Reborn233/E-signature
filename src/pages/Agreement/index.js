import React, {Component} from 'react';
import {
    TabBody, Tab, TabBar, Button, Agreement, ButtonArea, Article, NavBar
} from 'react-weui';
import Page from '../../components/Page';
import {observer, inject} from 'mobx-react';

import {withRouter} from 'react-router-dom';


@inject('formStore')
@observer
class Agree extends Component {

    checkHandler(e) {
        const {agree} = this.props.formStore;
        agree(e.target.checked);
    }

    next() {
        this.props.history.push('/face');
    }

    render() {
        const {checked} = this.props.formStore;
        return (
            <Page>
                <Tab>
                    <NavBar style={{display: 'block'}}>
                        <h3 className='title'>协议</h3>
                    </NavBar>
                    <TabBody style={{paddingBottom: '120px'}}>
                        <Article className='bg-white'>
                            <h1>一、注意事项</h1>
                            <p>
                                注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项
                            </p>
                            <h1>二、用户须知</h1>
                            <p>
                                用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知
                            </p>
                            <h1>一、注意事项</h1>
                            <p>
                                注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项
                            </p>
                            <h1>二、用户须知</h1>
                            <p>
                                用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知
                            </p>
                            <h1>一、注意事项</h1>
                            <p>
                                注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项
                            </p>
                            <h1>二、用户须知</h1>
                            <p>
                                用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知
                            </p>
                            <h1>一、注意事项</h1>
                            <p>
                                注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项
                            </p>
                            <h1>二、用户须知</h1>
                            <p>
                                用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知
                            </p>
                            <h1>一、注意事项</h1>
                            <p>
                                注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项
                            </p>
                            <h1>二、用户须知</h1>
                            <p>
                                用户须知用户须知用户须知用户须知用户须知用户须知用户须知用户须知
                            </p>
                        </Article>
                    </TabBody>
                    <TabBar style={{display: 'block'}}>
                        <Agreement defaultChecked={checked} onChange={this.checkHandler.bind(this)}>
                            &nbsp;&nbsp;我已认真阅读并同意 <a>认证授权</a>
                        </Agreement>
                        <ButtonArea>
                            <Button disabled={!checked} onClick={this.next.bind(this)}>协议签署</Button>
                        </ButtonArea>
                    </TabBar>
                </Tab>
            </Page>
        );
    }
}

export default withRouter(Agree);
