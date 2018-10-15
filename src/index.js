import React from 'react';
import ReactDOM from 'react-dom';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './assets/style/index.css';

import {Provider} from 'mobx-react';
import stores from './store';

import App from './router';
import registerServiceWorker from './registerServiceWorker';
import VConsole from 'vconsole';

new VConsole();


ReactDOM.render(
    <Provider {...stores}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
