import React from 'react';
import {
    TabBody, Article
} from 'react-weui';
const data = [{
    items: [{
        name: '起步动力'
    }, {
        name: '加速动力'
    }, {
        name: '动力平稳性'
    }, {
        name: '变速的平稳性'
    }]
}, {
    items: [{
        name: '悬挂的软硬程度'
    }, {
        name: '方向盘的掌握感'
    }, {
        name: '刹车制动力'
    }]
}, {
    items: [{
        name: '座椅质感的舒适性'
    }, {
        name: '内部空间'
    }, {
        name: '音响带给您的听觉效果'
    }]
}, {
    items: [{
        name: '低速时的引擎声'
    }, {
        name: '高速行驶中的隔音效果'
    }]
}, {
    items: [{
        name: '陪同试乘试驾人员的服务'
    }]
}];

const row = (data) => {
    return data.map((item, index) => {
        return (
            <tr key={index}>
                <td>
                    {index + 1}、{item.name}
                </td>
                <td align="center"><i className='fa fa-square-o fa-lg'/></td>
                {/*<td><i className='fa fa-square-o fa-lg'/></td>*/}
                <td align="center"><i className='fa fa-square-o fa-lg'/></td>
                <td align="center"><i className='fa fa-square-o fa-lg'/></td>
                <td align="center"><i className='fa fa-square-o fa-lg'/></td>
            </tr>
        )

    })
};
const Row = 5;

export default ()=>{
    return (
        <TabBody style={{paddingBottom: '0'}}>
            <Article className='bg-white' style={{paddingLeft: 5, paddingRight: 5}}>
                <table className='table'>
                    <tbody>
                    <tr>
                        <td width="150">试乘试驾车型选择:&nbsp;</td>
                        <td colSpan={Row-1}>
                            <i className='fa fa-square-o fa-lg'/>&nbsp;AMKC
                            &nbsp;
                            <i className='fa fa-check-square-o fa-lg'/>&nbsp;SMKZ
                        </td>
                    </tr>
                    <tr>
                        <td>
                            提供何种服务:&nbsp;
                        </td>
                        <td colSpan={Row-1}>
                            <i className='fa fa-square-o fa-lg'/>&nbsp;试乘
                            &nbsp;
                            <i className='fa fa-check-square-o fa-lg'/>&nbsp;试驾
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>评估表(请打“√”)</td>
                        <td>非常满意</td>
                        {/*<td>很满意</td>*/}
                        <td>满意</td>
                        <td>一般</td>
                        <td>不满意</td>
                    </tr>
                    <tr>
                        <td colSpan={Row}><b>一、动力</b></td>
                    </tr>
                    {row(data[0].items)}
                    <tr>
                        <td colSpan={Row}><b>二、操控</b></td>
                    </tr>
                    {row(data[1].items)}
                    <tr>
                        <td colSpan={Row}><b>三、舒适性</b></td>
                    </tr>
                    {row(data[2].items)}
                    <tr>
                        <td colSpan={Row}><b>四、静肃性</b></td>
                    </tr>
                    {row(data[3].items)}
                    <tr>
                        <td colSpan={Row}><b>五、试驾服务品质</b></td>
                    </tr>
                    {row(data[4].items)}
                    <tr>
                        <td colSpan={Row}>
                            <div>
                                <b>六、尊敬的客户，您试乘/试驾的总体感受如何?哪方面有待提升?</b>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <p style={{textAlign:'right',paddingRight:75}}>宾客签字 : </p>
                                <p style={{textAlign:'right',paddingRight:75}}>陪驾人 : </p>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Article>
        </TabBody>
    )
}