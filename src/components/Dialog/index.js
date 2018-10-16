import React, {Component} from 'react';
import {Dialog} from 'react-weui';
import ReactDOM from 'react-dom';

class RDialog extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
            msg: 'error !',
            button: {
                title: '提示',
                buttons: [
                    {
                        type: 'primary',
                        label: '知道了',
                        onClick: this.close.bind(this)
                    }
                ]
            }
        }
    }

    open = (opt = {}) => {
        return new Promise(resolve => {
            this.setState({
                show: true,
                msg: opt.msg,
                button: {
                    title: '提示',
                    buttons: [
                        {
                            type: 'primary',
                            label: '知道了',
                            onClick: this.close.bind(this)
                        }
                    ]
                }
            }, () => {
                resolve();
            })
        })
    };

    confirm = (opt = {}) => {
        return new Promise(resolve => {
            this.setState({
                show: true,
                msg: opt.msg,
                button: {
                    title: '提示',
                    buttons: [
                        {
                            type: 'default',
                            label: '取消',
                            onClick: this.close.bind(this)
                        },
                        {
                            type: 'primary',
                            label: '确定',
                            onClick: () => {
                                opt.confirm && opt.confirm();
                                this.close();
                            }
                        }
                    ]
                }
            }, () => {
                resolve();
            })
        })
    };


    close = () => {
        this.setState({
            show: false
        })
    };

    render() {
        return (
            <Dialog
                type="ios"
                title={this.state.button.title}
                buttons={this.state.button.buttons}
                show={this.state.show}
            > {this.state.msg}</Dialog>
        )
    }
}

const div = document.createElement('div');
const props = {};
document.body.appendChild(div);

const Dia = ReactDOM.render(React.createElement(
    RDialog,
    props
), div);

export default Dia;