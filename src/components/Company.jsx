
import React from 'react';

export default class Company extends React.Component {


    render() {
        const levels = this.props.data.levels.map((item, index) =>
            <div key={index} className="company-level" style={{ height: item.height }}>
                <div className="salary-desc">
                    <p>{item.level}</p>
                    <p>{item.desc}</p>
                </div>

            </div>
        );
        const name = this.props.data.name;
        return <div className="company">
            <div className="company-title">{name}</div>
            {levels}
        </div>

    }
}