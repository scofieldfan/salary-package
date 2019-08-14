
import React from 'react';

export default class Navagation extends React.Component {

    render() {
        return <nav className="nav">
            <div>
                <div><i className="fa fa-tripadvisor fa-5x"></i><span></span></div>
                <div>
                    <select className="job-list">
                        <option>开发工程师</option>
                        <option>算法工程师</option>
                        <option>产品经理</option>
                        <option>管理岗</option>
                    </select>
                </div>
            </div>

        </nav>
    }
}