import React from 'react';

const LogoComponent = () => {
    return (
        <>
            <img src="/avatar.png" alt="PokeGo Logo" />
            <style jsx>{`
                img {
                    background-color: transparent;
                    width: 45px;
                    height: 45px;
                    margin-right: 20px;
                }
            `}</style>
        </>
    )
}

export default LogoComponent;