import React from 'react';
import {
    TabBody, Article
} from 'react-weui';

export default ()=>{
    return (
        <TabBody style={{paddingBottom: '120px'}}>
            <Article className='bg-white'>
                <p>
                    试乘试驾车型选择:
                    &nbsp;
                    <i className='fa fa-square-o fa-lg' />&nbsp;AMKC
                    &nbsp;
                    <i className='fa fa-check-square-o fa-lg' />&nbsp;SMKZ
                    &nbsp;
                </p>
                <p>
                    提供何种服务:
                    &nbsp;
                    <i className='fa fa-square-o fa-lg' />&nbsp;试乘
                    &nbsp;
                    <i className='fa fa-check-square-o fa-lg' />&nbsp;试驾
                    &nbsp;
                </p>
                <p>
                    试驾路线: 路线一
                </p>
                <p>
                    试乘试驾时间及里程:&nbsp;
                    时间:&nbsp;14时30分 至 15时00分;
                    公里:&nbsp; 5 km - 10 km;
                </p>
                <b>A:对自驾同时作如下陈述与声明:</b>
                <p style={{paddingLeft:15}}>
                    1.本协议系本人真实自愿的意思表示，不存在欺诈、胁迫、趁人之危等情形;<br/>
                    2.本人声明本人至少具有二年以上汽车驾龄，同时拥有相等年限的实际驾驶经验，并有能力独自承担造成事故后的相应赔偿责任。为保证试驾 活动的规范和顺利进行，本人同意将居民身份证和驾驶证作为法定身份证明并愿提供复印件作为本协议的附件，本人承诺本人所提供的信息/证件完全 属实;<br/>
                    3.本人驾驶证所批准的准驾车型与试驾的车型是一致的，本人没有超越驾驶证所规定的准驾车型，否则因本人的行为所导致的一切责任本人自 愿承担，给经销商造成损失的，本人自愿赔偿;<br/>
                    4.本人在试驾车辆过程中，愿服从经销商提出的要求与指示，以尽最大努力和善意保护试乘、试驾车辆的安全和完好，如造成试乘、试驾车辆 损坏，本人自愿赔偿;<br/>
                    5.本人在试驾车辆过程中，因本人交通违法行为所导致的罚款、扣车等情形(包括但不限于闯红灯/单行线/禁区、违章停车)，本人自愿承担 所引起的一切责任;<br/>
                    6.本人在试驾车辆过程中，发生单车交通事故，导致车辆/车内人员毁损、受伤或物品毁损的，车辆投保的保险无法赔偿的部分本人愿意承担一 切损失;<br/>
                    7.本人在试驾车辆过程中，发生非单车交通事故(包括但不限于与机动车、非机动车、行人的事故)，导致本方车辆及车内人员或对方车辆及 人员以及行人毁损、受伤或造成财产损失的，车辆投保的保险无法赔偿的部分本人愿意承担一切损失。<br/>
                    8.因本人的原因造成的车辆被罚款、扣押而产生的拖车费、停车费、违章费用、下一年度保险费增加的费用等均由本人承担;<br/>
                    9.在试驾车辆过程中，非因经销商的过错给经销商所造成的一切损失，包括但不限于律师费、调查费、鉴定费、交通费、诉讼费等均由本人承 担。<br/>
                </p>
            </Article>
        </TabBody>
    )
}