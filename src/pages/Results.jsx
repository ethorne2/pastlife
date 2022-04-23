import React from 'react';
import { useLocation } from 'react-router-dom';

function Results() {

    const location = useLocation();
    const country = location.state.country;
    const deathsArray = location.state.deathsArray;
    const birthYear = location.state.birthYear;

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
        </div>
    );
}

export default Results;