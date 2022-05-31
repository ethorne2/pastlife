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

    
    function determinePastlife(deathData, birthdateYear){
        // function to determine who the user's past life is and return the matchedDeath
        var matchedDeath = {};
        var deathsArray = deathData.deaths;
        for (let i = 0; i < deathsArray.length; i++) {
            if(deathsArray[i].year <= birthdateYear) {
                matchedDeath = deathsArray[i];
                break;
            };
        };
        return matchedDeath;
    };

    function getMemoryTriggers(description){
        // function to get memory trigger nouns using pastlife description 
        // uses pos module
        var nounsArray = [];
        var nounsString = "";
        let pos = require('pos');
        var words = new pos.Lexer().lex(description);
        var tagger = new pos.Tagger();
        var taggedWords = tagger.tag(words);
        for (var i in taggedWords) {
            var taggedWord = taggedWords[i];
            var word = taggedWord[0];
            var tag = taggedWord[1];
            // checks that word is a noun (singular or plural)
            if (tag === 'NN' || tag === 'NNS'){
                // checks that the word doesn't start with a capital letter
                if(word.charAt(0) !== word.charAt(0).toUpperCase()){
                    if (! nounsArray.includes(word)){
                        nounsArray.push(word);
                        nounsString += word + ', ';
                    }
                }
            }
        }
        // remove ", " from end of the string
        nounsString = nounsString.slice(0, -2);
        return nounsString;
    };

    const sendtoResults = (deathData) => {
        // ensures that we have defined deathData before sending user to Results
        if (deathData !== undefined){
            if(deathData !== {}){
                // determines pastlife using deathData and birhtdateYear
                let matchedDeath = determinePastlife(deathData, birthdateYear);

                //retrieve more info from Past Life's page on wikipedia
                var description = "Your past life was secretive, there are no more details...";
                var urlPastLife = "";
                var matchedPastlifeImage = "";
                if (matchedDeath.pages.length > 0){
                    description = matchedDeath.pages[0].extract;
                    let content_urls = matchedDeath.pages[0].content_urls;
                    let desktopOptions = content_urls['desktop'];
                    urlPastLife = desktopOptions['page']; 
                    matchedPastlifeImage = matchedDeath.pages[0].originalimage.source;  
                };

                // finds nouns from the description to get the memory triggers, returns nounsString
                let nounsString = getMemoryTriggers(description);

                // send to Results
                navigate('/results', 
                {state:
                    {country:country, 
                     description: description,
                     nounsString: nounsString,
                     urlPastLife: urlPastLife,
                     matchedPastlifeImage: matchedPastlifeImage,
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