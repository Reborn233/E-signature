import React, {Component} from 'react';
import Icon from 'react-svg';
import camera from '../../svg/camera.svg';
import './media';

const styles = {
    camera: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        right: '20px',
        bottom: '45px',
    },
    capBox: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'none',
        backgroundColor: '#000',
        zIndex: 9,
    },
    video: {
        backgroundColor: '#fff',
        position: 'relative',
        width: '100%',
        height: document.body.clientHeight - 200,
        top: '50px',
    },
};

class Camera extends Component {

    constructor() {
        super();

        this.state = {
            track: null,
            front: true,
        }
    }

    open() {
        this.media();
    }

    media() {
        const _this = this;
        const $video = this.refs.video;
        const front = this.state.front ? 'user' : 'environment';
        const constraints = {
            video: {
                width: 375,
                height: 500,
                facingMode: front
            }
        };
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                _this.setState({
                    track: stream.getTracks()[0]
                });
                $video.srcObject = stream;
                $video.onloadedmetadata = (e) => {
                    $video.play();
                    _this.show();
                }
            })
            .catch(err => {
                alert((err));
            });
    }

    show() {
        const $capBox = this.refs.capBox;
        $capBox.style.display = 'block';
    }

    hide() {
        this.state.track.stop();
        const $capBox = this.refs.capBox;
        $capBox.style.display = 'none';
    }

    photo() {
        const {photo} = this.props;
        this.hide();
        photo && photo();
    }

    reversal() {
        const front = this.state.front;
        this.setState({
            front: !front
        });
        this.media();
    }

    render() {
        return (
            <div ref='capBox' style={styles.capBox}>
                <div className="close icon white" onClick={this.hide.bind(this)}></div>
                <video ref='video' style={styles.video}/>
                <button className='capBtn' onClick={this.photo.bind(this)}/>
                <Icon src={camera}
                      svgStyle={styles.camera}
                      onClick={this.reversal.bind(this)}
                />
            </div>
        )
    }
}

export default Camera;