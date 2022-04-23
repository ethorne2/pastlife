import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { access_token, access_email } from '../WikiMediaAccess';

function Loading() {

    const location = useLocation();
    const birthdate = location.state.birthdate;
    const birthdateYear = birthdate.slice(0,4);
    const birthdateYearInt = parseInt(birthdateYear);
    const birthdateMonth = birthdate.slice(5,7);
    const birthdateDay = birthdate.slice(8,11);
    const country = location.state.country;

    const [fetchedData, setFetchData] = useState({});

    let url = 
    `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/deaths/${birthdateMonth}/${birthdateDay}`;

    /* Get the results of deaths that happened on their birthday */
    const fetchResults = async function () {
        const response = await fetch (url,
        {
            headers: {
                'Authorization': access_token,
                'Api-User-Agent': access_email
            }
        });
        const data = await response.json();
        setFetchData(data);
    };

    useEffect(() => {
        fetchResults();
    }, []);

    //async function sleep() {
      //  await new Promise(resolve => setTimeout(resolve, 5000));
      //}
      
    //sleep();

    const deathsArray = fetchedData.deaths;
    console.log(deathsArray);

    let pastLifeFound = false;
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
            <h1 className='page-title'>Your results are loading</h1>
            <br></br>
            <p>{birthdate}</p>
            <p>{country.label}</p>
        </div>
    );
}

export default Loading;