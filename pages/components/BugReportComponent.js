import React from 'react';
import axios from 'axios';

const BugReportComponent = (props) => {
    const handleKeyDown = (e) => {
        if(e.keyCode == 13) {
            let text = e.target.value;
            axios.post('/api/answerBugReport', {id: e.target.id, response: text});
        }
    }
    let heading = props.admin ? <h4>{props.username} | {props.discordID}</h4> : null;
    return (
        <div className="bugreport">
            {heading}
            <p>{props.message}</p>
            <p>{props.response ? 'Response: ' + props.response : props.admin ? <input type="text" id={props.id} onKeyDown={handleKeyDown}></input> : 'No response yet.'}</p>
            <style jsx>{`
                input {
                    width:1200px;
                }
                .bugreport {
                    margin-bottom: 20px;
                }
            `}</style>
        </div>
    )
}

export default BugReportComponent;