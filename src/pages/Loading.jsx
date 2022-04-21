import React from 'react';
import { useLocation } from 'react-router-dom';
import { access_token, access_email } from '../WikiMediaAccess';

function Loading() {

    const location = useLocation();
    const Birthdate = location.state.formattedBirthdate;
    const BirthdateYear = Birthdate.slice(0,4);
    const BirthdateMonth = Birthdate.slice(5,7);
    const BirthdateDay = Birthdate.slice(8,11);

    let url = 
    `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/deaths/${BirthdateMonth}/${BirthdateDay}`;

    /* Get the results of deaths that happened on their birthday */
    async function fetchResults() {
        const response = await fetch (url,
        {
            headers: {
                'Authorization': access_token,
                'Api-User-Agent': access_email
            }
        });
    const data = await response.json()
        .then(console.log).catch(console.error);
}
    fetchResults();

    return (
        <div>
            <br></br>
            <h1 className='page-title'>Your results are loading</h1>
            <br></br>
            <p>{location.state.formattedBirthdate}</p>
        </div>
    );
}

export default Loading;