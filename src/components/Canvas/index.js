import React, {Component} from 'react';
import {Button} from 'react-weui';
import PropTypes from 'prop-types';

const styles = {
    box: {
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        padding: '10px',
        backgroundColor: '#fff',
        zIndex: 99,
        // display:'none',

    },
    canvas: {
        border: '1px solid #3399EA',
    }
};


class Canvas extends Component {

    constructor() {
        super();
        this.canvas = null;
        this.ctx = null;
        this.pos = null;
    }

    componentDidMount() {
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.pos = this.canvas.getBoundingClientRect();
    }

    onTouchStart(e) {
        this.ctx.strokeStyle = "#000";
        this.ctx.beginPath();
        const pageX = e.changedTouches[0].clientX - this.pos.left;
        const pageY = e.changedTouches[0].clientY - this.pos.top;
        this.ctx.moveTo(pageX, pageY);
    }

    onTouchMove(e) {
        const pageX = e.changedTouches[0].clientX - this.pos.left;
        const pageY = e.changedTouches[0].clientY - this.pos.top;
        this.ctx.lineTo(pageX, pageY);
        this.ctx.stroke()
    }

    onTouchEnd(e) {
        this.ctx.closePath();
    }

    confirm(){
        const {confirm} = this.props;
        confirm(this.save())
    }

    clear() {
        const {width, height} = this.pos;
        this.ctx.clearRect(0, 0, width, height);
    }

    save() {
        return this.canvas.toDataURL("image/png");
    }

    render() {
        return (
            <div ref='box' style={styles.box}>
                <canvas ref='canvas'
                        style={styles.canvas}
                        width={document.body.clientWidth - 22}
                        height={document.body.clientHeight - 150}
                        onTouchStart={this.onTouchStart.bind(this)}
                        onTouchMove={this.onTouchMove.bind(this)}
                        onTouchEnd={this.onTouchEnd.bind(this)}
                />
                <Button onClick={this.confirm.bind(this)}>确定</Button>
                <Button type='default' onClick={this.clear.bind(this)}>清除</Button>
            </div>
        )
    }
}

Canvas.popTypes = {
    confirm: PropTypes.func.isRequired
};

export default Canvas;