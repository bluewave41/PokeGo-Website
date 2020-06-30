import React from 'react';

const AvatarComponent = (props) => {
	return (
        <>
		    <img className='avatar' src={`https://cdn.discordapp.com/avatars/${props.discordID}/${props.avatarID}`} />
            <style jsx>{`
                .avatar {
                    border-radius: 50%;
                    margin-left: auto;
                }
            `}</style>
        </>
    )
}

export default AvatarComponent;