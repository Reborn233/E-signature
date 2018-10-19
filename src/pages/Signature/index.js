import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {toJS} from 'mobx';
import Page from '../../components/Page';
import {Article, Button, ButtonArea} from 'react-weui';
import {Link} from 'react-router-dom';
import Canvas from '../../components/Canvas';

const styles = {
    box: {
        width: '100%',
        height: '200px',
        textAlign: 'center',
        color: '#ccc',
        lineHeight: 2,
        border: '1px solid #3399EA',
    }
};


@inject('formStore')
@observer
class Signature extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
        };

    }

    save(data) {
        const base64 = data;
        const {update} = this.props.formStore;
        this.setState({
            show: false
        });
        update('signature', base64.substring(base64.indexOf(',') + 1));
        const img = `
            <img src="${base64}" alt="签名" height="200" />
        `;
        this.refs.box.innerHTML = img;
    }

    show() {
        this.setState({
            show: true
        });
    }

    bound = async () => {
        const params = this.props.formStore.form;
        console.log(toJS(params));
        // try {
        //     const response = await testApi(toJS(params));
        //     console.log(response);
        // } catch (e) {
        //     console.log(e)
        // }
    };

    render() {
        return (
            <Page>
                <Article style={{textIndent: 30}}>
                    本人已阅读并了解相关<Link to='/'>《电子签名委托协议书》</Link>，
                    并同意遵守上述内容对应的相关责任条款和协议。保证所填写内容及所提供的资料真实、准确，
                    并确认申请内容中各项功能选择皆处于本人真实意愿。
                </Article>
                <div style={{padding: '0 7px'}}>
                    <div ref='box'
                         style={styles.box}
                         onClick={this.show.bind(this)}
                    >
                        <p style={{marginTop: '60px',}}>请在此处签名</p>
                        <p>并视为认同上述所有操作和描述</p>
                    </div>
                    {
                        this.state.show ?
                            <Canvas ref='canvas'
                                    confirm={this.save.bind(this)}
                            /> : ''
                    }
                </div>
                <ButtonArea>
                    <Button onClick={this.bound.bind(this)}>绑定</Button>
                </ButtonArea>
                <pre style={{whiteSpace:'normal',padding:'15px'}}>
                    {navigator.userAgent}
                </pre>
            </Page>
        )
    }
}

export default Signature;