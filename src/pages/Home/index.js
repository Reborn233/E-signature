import React, {Component} from 'react';
import {
    Form, FormCell, CellHeader, CellBody, Input,
    Label, CellFooter, Button, ButtonArea
} from 'react-weui';
import Page from '@/components/Page';

import {withRouter} from 'react-router-dom';
import {observer, inject} from 'mobx-react';

const ONE_MIN = 60;

@inject('formStore')
@observer
class Home extends Component {

    constructor() {
        super();
        this.state = {
            timer: ONE_MIN,
            disabled: false,
            text: '点击发送',
        }
    }

    next() {
        this.props.history.push('/agreement');
    }

    sendHandler() {
        this.requestCode();
    }

    requestCode() {
        if (this.state.disabled) {
            return
        }
        this.countLoop();
        console.log('请求验证码');
    }

    countLoop() {
        let timer = this.state.timer;
        timer--;
        this.countDown(timer);
        let t = setTimeout(() => {
            this.countLoop()
        }, 1000);
        if (timer === 0) {
            clearTimeout(t);
            this.setState({
                timer: ONE_MIN,
                disabled: false
            })
        }
    }

    countDown(timer) {
        this.setState({
            timer: timer,
            text: '重新发送',
            disabled: true
        })
    }

    InputChangeHandler(e) {
        const {update} = this.props.formStore;
        const {name, value} = e.target;
        update(name, value);
    }

    componentDidMount() {
        console.log('env: ', process.env)
    }

    render() {
        const {name, identity, phone} = this.props.formStore.form;
        return (
            <Page>
                <Form className='mt0'>
                    <FormCell>
                        <CellHeader>
                            <Label>客户姓名</Label>
                        </CellHeader>
                        <CellBody>
                            <Input onInput={this.InputChangeHandler.bind(this)} name='name' type="text"
                                   placeholder="请输入姓名" defaultValue={name}/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>身份证号</Label>
                        </CellHeader>
                        <CellBody>
                            <Input onInput={this.InputChangeHandler.bind(this)} name='identity' type="text"
                                   placeholder="请输入身份证" defaultValue={identity}/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>手机号码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input onInput={this.InputChangeHandler.bind(this)} name='phone' type="tel"
                                   placeholder="请输入手机号码" defaultValue={phone}/>
                        </CellBody>
                    </FormCell>
                    <FormCell vcode>
                        <CellHeader>
                            <Label>验证码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="请输入验证码"/>
                        </CellBody>
                        <CellFooter>
                            <Button type='vcode' className={this.state.disabled ? 'weui-vcode-btn_disabled' : ''}
                                    onClick={this.sendHandler.bind(this)}>{this.state.text}{this.state.timer < ONE_MIN ? this.state.timer : ''}</Button>
                        </CellFooter>
                    </FormCell>
                </Form>
                <br/>
                <ButtonArea>
                    <Button onClick={this.next.bind(this)}>下一步</Button>
                </ButtonArea>
            </Page>
        );
    }
}

export default withRouter(Home);
