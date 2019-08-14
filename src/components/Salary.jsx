
import React from 'react';
import Submission from './Submission'

export default class Salary extends React.Component {

    render() {
        return <div className="submission-container">
            <div className="submission-title"> Recent Salary Submissions</div>
            <div className="submission-list">
                <Submission></Submission>
                <Submission></Submission>
                <Submission></Submission>
                <Submission></Submission>

            </div>
        </div>
    }
}