import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
    render() {
        const {bg} = this.props;
        return (
            <div className='page' style={{backgroundColor: bg}}>
                {this.props.children}
            </div>
        )
    }
}

Page.propTypes = {
    bg: PropTypes.string
};

export default Page;