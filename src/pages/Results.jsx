import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Results() {

    // defining constant variables
    const location = useLocation();
    const country = location.state.country;
    const deathsArray = location.state.deathsArray;
    const birthYear = location.state.birthYear;

    /* function to send user back to the homepage and try again! */
    const navigate = useNavigate();
    const sendtoHome = () => {
        navigate('/');
    };

    // Determine who the user's past life is, save as matchedDeath
    var matchedDeath = {};
    for (let i = 0; i < deathsArray.length; i++) {
        if(deathsArray[i].year <= birthYear) {
            matchedDeath = deathsArray[i];
            break;
        };
    };

    console.log(matchedDeath.year);


    return (
        <div>
            <br></br>
            <h1 className='page-title'>Your Past Life Results</h1>
            <p>This is your birth country: {country.label}</p>
            <p>This is your birth year: {birthYear}</p>
            <div className='cta-button-container'>
                <button className='cta-button' onClick={() => {sendtoHome()}}>Try Again</button>
            </div>
        </div>
    );
}

export default Results;