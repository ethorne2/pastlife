import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { access_token, access_email } from '../WikiMediaAccess';

function Loading() {

    // defining constants
    let loadingGif = require("../loading-buffering.gif");
    const navigate = useNavigate();
    const location = useLocation();
    const birthdate = location.state.birthdate;
    const birthdateYear = birthdate.slice(0,4);
    const birthdateYearInt = parseInt(birthdateYear);
    const birthdateMonth = birthdate.slice(5,7);
    const birthdateDay = birthdate.slice(8,11);
    const country = location.state.country;

    let url = 
    `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/deaths/${birthdateMonth}/${birthdateDay}`;

    // Get the results of deaths that happened on their birthday
    const fetchResults = async function () {
        const response = await fetch (url,
        {
            headers: {
                'Authorization': access_token,
                'Api-User-Agent': access_email
            }
        });
        const data = await response.json();
        return data;
    };

    // async function that returns a promise
    function getDeathData(){
        return Promise.all([fetchResults()])
    };

    const sendtoResults = (deathData) => {
        // ensures that we have defined deathData before sending user to Results
        if (deathData !== undefined){
            if(deathData !== {}){
                navigate('/results', 
                {state:
                    {country:country, 
                     deathsArray:deathData.deaths,
                     birthDay: birthdateDay,
                     birthMonth: birthdateMonth,
                     birthYear: birthdateYearInt
                    }});
            };
        };
    };

    // useEffect called once and then sends user to Results
    useEffect(() => {
        getDeathData().then(([deathData]) => {
            sendtoResults(deathData);
        })
    }, []);

    return (
        <div>
            <br></br>
            <h1 className='page-title'>Loading Your Past Life</h1>
            <br></br>
            <div className='loading-gif-container'>
                <img className='loading-gif' src={loadingGif} alt="wait until results are ready" />
            </div>
        </div>
    );
}

export default Loading;