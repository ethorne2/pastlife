import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { access_token, access_email } from '../WikiMediaAccess';

function Loading() {

    const navigate = useNavigate();
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
        return data;
    };

    function getDeathData(){
        return Promise.all([fetchResults()])
    };

    useEffect(() => {
        getDeathData().then(([deathData]) => {
            setFetchData(deathData);
            const sendtoResults = () => {
                if (fetchedData !== undefined){
                    if(fetchedData !== {}){
                        navigate('/results', 
                        {state:
                            {country:country, 
                             deathsArray:fetchedData.deaths,
                             birthYear: birthdateYearInt
                            }});
                    };
                };
            };
            sendtoResults();
        })
    }, []);

    return (
        <div>
            <br></br>
            <h1 className='page-title'>Loading your Past Life</h1>
            <br></br>
            <p>{birthdate}</p>
            <p>{country.label}</p>
        </div>
    );
}

export default Loading;