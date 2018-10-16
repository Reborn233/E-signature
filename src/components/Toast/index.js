import React, {Component} from 'react';
import {Toast, Toptips} from 'react-weui';
import ReactDOM from 'react-dom';

class RToast extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
            showWarn: false,
            errorMsg: 'error !',
            msg: '请稍后...',
            icon: 'success-no-circle',
        }
    }

    timer = null;

    success = (msg = '成功') => {
        let timer = null;
        this.setState({
            show: true,
            msg: msg,
            icon: 'success-no-circle'
        }, () => {
            timer = setTimeout(() => {
                this.close();
                clearTimeout(timer);
            }, 1500)
        })
    };

    load = (msg = '请稍等...') => {
        this.setState({
            show: true,
            msg: msg,
            icon: 'loading'
        })
    };

    error = (msg = '错误信息') => {
        clearTimeout(this.timer);
        this.setState({
            showWarn: true,
            errorMsg: msg,
        }, () => {
            this.timer = setTimeout(() => {
                this.setState({
                    showWarn: false,
                }, () => {
                    clearTimeout(this.timer);
                });

            }, 2000);
        })
    };

    close = () => {
        this.setState({
            show: false,
        })
    };

    render() {
        return (
            <div>
                <Toast icon={this.state.icon} show={this.state.show}>{this.state.msg}</Toast>
                <Toptips type="warn" show={this.state.showWarn}> {this.state.errorMsg} </Toptips>
            </div>

        )
    }
}

const div = document.createElement('div');
const props = {};
document.body.appendChild(div);

const Toa = ReactDOM.render(React.createElement(
    RToast,
    props
), div);

export default Toa;