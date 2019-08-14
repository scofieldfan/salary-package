
import React from 'react';
import Salary from './Salary';
import Company from './Company'
import Tabs from './Tabs'
import data from '../data/companys'

console.log(data);
export default class Content extends React.Component {

    render() {

        return <div className="content">
            {/* <Salary /> */}
            <Tabs />
            <div className="companys">
                {data.map((item, index) =>
                    <Company key={index} data={item} />
                )}
            </div>

        </div >
    }
}