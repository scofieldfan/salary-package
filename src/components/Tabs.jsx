
import React from 'react';

export default class Tabs extends React.Component {

    render() {
        return <div>
            <div className="tab-name">公司名</div>
            <div className="tabs">
                <div className="tab">腾讯</div>
                <div className="tab">阿里巴巴</div>
                <div className="tab">百度</div>
            </div>
        </div>
    }
}