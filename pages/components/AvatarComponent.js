import React from 'react';
import LogoutComponent from './LogoutComponent';

const AvatarComponent = (props) => {
	return (
        <>
		    <span>{props.username}</span><img className='avatar' src={props.link} />
            <LogoutComponent />
            <style jsx>{`
                .avatar {
                    border-radius: 50%;
                    background-color: transparent;
                    width: 45px;
                    height: 45px;
                    margin-right: 10px;
                }
                span {
                    margin-left: auto;
                    margin-right: 10px;
                    background-color: black;
                }
            `}</style>
        </>
    )
}

export default AvatarComponent;