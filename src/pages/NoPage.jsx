import React from 'react';
import {  useNavigate } from 'react-router-dom';

function NoPage() {

    // function to send user back to the homepage
    const navigate = useNavigate();
    const sendtoHome = () => {
        navigate('/');
    };
    return (
        <div>
            <br></br>
            <h1 className='page-title'>404</h1>
            <h2 className='uncovered-text'>Sorry the page you were looking for does not exist</h2>
            <div className='cta-button-container'>
                <button className='cta-button' onClick={() => {sendtoHome()}}>Go to Home</button>
            </div>
        </div>
    );
}

export default NoPage;