import React from 'react';

const AvatarComponent = (props) => {
	return (
        <>
		    <span>{props.username}</span><img className='avatar' src={props.link} />
            <style jsx>{`
                .avatar {
                    border-radius: 50%;
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