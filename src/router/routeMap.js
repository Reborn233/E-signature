import asyncComponent from '../components/AsyncComponent';

const Home = asyncComponent(() => import('../pages/Home'));
const Agreement = asyncComponent(() => import('../pages/Agreement'));
const Test = asyncComponent(() => import('../pages/Test'));
const Face = asyncComponent(() => import('../pages/Face'));
const Signature = asyncComponent(() => import('../pages/Signature'));


export default [
    {path: '/home', name: '首页', component: Home},
    {path: '/Test', name: '协议', component: Test},
    {path: '/agreement', name: '反馈表', component: Agreement},
    {path: '/face', name: '人脸识别', component: Face},
    {path: '/signature', name: '电子签名', component: Signature}
]