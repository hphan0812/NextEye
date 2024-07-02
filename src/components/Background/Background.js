import React from 'react';

const Background = ({ children }) => {
    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'column',
            color: 'white',
        }}>
            <img
                src="/img/night_bg.png"
                alt="background"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />
            {children}
        </div>
    );
}

export default Background;
