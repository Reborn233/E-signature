import React, {Component} from 'react';
import Page from '../../components/Page';
import Icon from 'react-svg';
import faces from '../../svg/face.svg';
import {Button, ButtonArea} from 'react-weui';
import {withRouter} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import {isImage, zipImg, base64toBlob} from '../../assets/utils';
import axios from 'axios';

const styles = {
    iconSize: {
        width: document.body.clientWidth,
        height: '400px',
    },
    title: {
        marginTop: '15px',
        textAlign: 'center',
        width: '100%',
        fontWeight: 'normal'
    },
    tip: {
        padding: '10px 20px',
        backgroundColor: '#f6f6f6',
        textAlign: 'center'
    },


};


@inject('formStore')
@observer
class Face extends Component {

    next() {
        const file = this.refs.input.files[0];
        if (!isImage((this.refs.input))) {
            alert('文件格式必须为：png/jpg/jpeg');
            return;
        }
        const {image} = this.props.formStore;
        const zipFile = base64toBlob(image);
        console.log('zipFile: ', zipFile.size);
        if (zipFile.size > 1024 * 1024) {
            alert('图片大小不能超过1M');
            return;
        }
        const url = '/test/testFace';
        let params = new FormData();
        params.append('file', zipFile, zipFile.name);
        params.append('name', '沈冬明');
        params.append('identity', '310112199311041817');
        params.append('phone', '15021209145');
        const config = {
            headers: {'Content-Type': 'multipart/form-data'}
        };
        axios.post(url, params, config)
            .then(response => {
                console.log(response)
            })
        // this.props.history.push('/signature')

    }

    openMedia() {
        this.refs.input.click();
    }


    // 获取照片base64
    photo() {
        const file = this.refs.input;
        const files = file.files;
        if (files.length === 0) return;
        // 压缩图片
        try {
            zipImg(files[0], (base64) => {
                const {setImage} = this.props.formStore;
                setImage(base64);
            });
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const {image} = this.props.formStore;
        return (
            <Page bg='#fff'>
                <h3 style={styles.title}>人脸识别认证</h3>
                {
                    image ?
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={image}
                                height='350'
                                alt='照片'
                                onClick={this.openMedia.bind(this)}/>
                        </div>
                        :
                        <Icon src={faces}
                              svgStyle={styles.iconSize}
                              onClick={this.openMedia.bind(this)}
                        />
                }
                <input ref='input' style={{display: 'none'}}
                       type="file"
                       accept="image/*"
                       capture="camera"
                       onChange={this.photo.bind(this)}
                />
                <div style={styles.tip}>请某某某本人亲自完成,面部正对手机</div>
                <br/>
                <ButtonArea>
                    <Button disabled={image ? false : true} onClick={this.next.bind(this)}>下一步</Button>
                </ButtonArea>
            </Page>
        )
    }
}

export default withRouter(Face);