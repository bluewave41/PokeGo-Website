import React from 'react';
import axios from 'axios';

const LogoutComponent = () => {
    const onClick = (e) => {
        axios.post('/api/logout').then(function() {
            window.location.reload();
        });
    }
    return (
        <>
            <img src="/logout.svg" title="Logout" alt="Logout" onClick={onClick}/>
            <style jsx>{`
                img {
                    background-color: white;
                    filter: invert(100%);
                    width: 20px;
                    height: 20px;
                    margin-right: 20px;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}

export default LogoutComponent;