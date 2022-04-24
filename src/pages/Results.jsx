import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Results() {

    // defining constant variables
    const location = useLocation();
    const country = location.state.country;
    const deathsArray = location.state.deathsArray;
    const birthYear = location.state.birthYear;
    const birthDay = location.state.birthDay;
    const birthMonth = location.state.birthMonth;

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


    //retrieve more info from Past Life's page on wikipedia
    var description = "Your past life was secretive, there are no more details...";
    var urlPastLife = "";
    if (matchedDeath.pages.length > 0){
        description = matchedDeath.pages[0].extract;
        let content_urls = matchedDeath.pages[0].content_urls;
        console.log(content_urls);
        let desktopOptions = content_urls['desktop'];
        urlPastLife = desktopOptions['page'];
    };

    return (
        <div>
            <br></br>
            <h1 className='page-title'>Your Past Life Results</h1>
            <br></br>
            <p className='uncovered-text'>~ You have uncovered your past life ~</p>
            <p className='results-text'>Your past life connection was made with your 
            <b> {birthMonth}/{birthDay}/{birthYear}</b> birthdate 
            and your birth country of <b>{country.label}</b>.</p>
            <div className='tables-container'>
            <table>
                <thead>
                    <tr>
                        <th>Your Past Life</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{matchedDeath.text}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className='tables-container'>
            <table>
                <thead>
                    <tr>
                        <th> Date of Past Death</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{birthMonth}/{birthDay}/{matchedDeath.year}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className='tables-container'>
            <table>
                <thead>
                    <tr>
                        <th>Your Past Life Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{description}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className='tables-container'>
            <table>
                <thead>
                    <tr>
                        <th>Get More Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href={urlPastLife} target="_blank">
                            View Your Past Life's Wikipedia Page</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className='cta-button-container'>
                <button className='cta-button' onClick={() => {sendtoHome()}}>Try Again</button>
            </div>
        </div>
    );
}

export default Results;