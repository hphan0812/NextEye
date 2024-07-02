import React, { startTransition } from "react";
import { Button } from "components/Button"; // Adjust the path if necessary
import { Background } from "components/Background"; // Adjust the path if necessary
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        startTransition(() => {
            navigate('/profile');
        });
    };

    return (
        <Background>
            <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Face Registration</h1>
            <p style={{ fontSize: '18px', marginBottom: '32px' }}>
                Welcome 👏 Let's start by uploading a picture of your face!
            </p>
            <Button className='w-48 mt-4 w bg-primary' type="button" onClick={handleClick}>
                Start
            </Button>
        </Background>
    );
};

export default WelcomePage;
