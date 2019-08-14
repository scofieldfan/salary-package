
import React from 'react';
import Navagation from './components/Navagation';
import Content from './components/Content'
export default class App extends React.Component {

    render() {
        return <div>
            <Navagation />
            <Content />
        </div >

    }
}