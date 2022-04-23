import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Results() {

    const location = useLocation();
    const country = location.state.country;
    const deathsArray = location.state.deathsArray;
    const birthYear = location.state.birthYear;

    /* function to send user back to the homepage and try again! */
    const navigate = useNavigate();
    const sendtoHome = () => {
        navigate('/');
    };

 //let pastLifeFound = false;
    // loop over json, look for year that matches birthYear
    //while (pastLifeFound === false) {
        //deathsArray.forEach((death) => {
            //console.log(`${death.year} is when your past life died`);
            //pastLifeFound = true
            // compare the year of death to birthdateYearInt
            //if (death.year == death.year){
                //pastLifeFound = true;
            //};
            


        //});
    //};




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