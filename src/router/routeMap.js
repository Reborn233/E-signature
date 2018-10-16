import asyncComponent from '../components/AsyncComponent';

const Home = asyncComponent(() => import('../pages/Home'));
const Agreement = asyncComponent(() => import('../pages/Agreement'));
const Face = asyncComponent(() => import('../pages/Face'));
const Signature = asyncComponent(() => import('../pages/Signature'));


export default [
    {path: '/home', name: '首页', component: Home},
    {path: '/agreement', name: '协议', component: Agreement},
    {path: '/face', name: '人脸识别', component: Face},
    {path: '/signature', name: '电子签名', component: Signature}
]