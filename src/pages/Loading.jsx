import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { access_token, access_email } from '../WikiMediaAccess';

function Loading() {

    let loadingGif = require("../loading-buffering.gif");
    // defining constants
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
                // get info on deathData
                // Determine who the user's past life is, save as matchedDeath
                var matchedDeath = {};
                var deathsArray = deathData.deaths;
                for (let i = 0; i < deathsArray.length; i++) {
                    if(deathsArray[i].year <= birthdateYear) {
                        matchedDeath = deathsArray[i];
                        break;
                    };
                };
                //retrieve more info from Past Life's page on wikipedia
                var description = "Your past life was secretive, there are no more details...";
                var urlPastLife = "";
                if (matchedDeath.pages.length > 0){
                    description = matchedDeath.pages[0].extract;
                    let content_urls = matchedDeath.pages[0].content_urls;
                    let desktopOptions = content_urls['desktop'];
                    urlPastLife = desktopOptions['page'];   
                };


                // send to Results
                navigate('/results', 
                {state:
                    {country:country, 
                     description: description,
                     urlPastLife: urlPastLife,
                     deathsArray: deathData.deaths,
                     matchedDeath: matchedDeath,
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