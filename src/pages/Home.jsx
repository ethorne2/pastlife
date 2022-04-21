import React from 'react';
import DefinitionCard from '../components/DefinitionCard';
 /* Date Picker imports */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';

function Home() {

    const [birthdate, setBirthdate] = useState(new Date());

    /* Get the values of the birthday */
    const formattedBirthdate = birthdate.toISOString().slice(0,10);

    /* function to send formattedBirthdate to the loading screen for fetching from API */
    const navigate = useNavigate();
    const sendtoLoading = () => {
        navigate('/loading', {state:{formattedBirthdate}});
    };

    return (
        <div className='centered-home-screen'>
            <br></br>
            <h1 className='page-title'>Welcome to Past Life</h1>
            <br></br>
            <DefinitionCard />
            <br></br>
            <h2 className='instruction-title'>Instructions</h2>
            <p className='instruction-text'>Ready to find your past life?</p>
            <p className='instruction-text'>Enter your birthdate and birth location 
            to learn about your past soul.</p>
            <br></br>
            <h2 className='instruction-title'> Enter your birthdate</h2>
            <br></br>
            <div className='date-picker'>
                <DatePicker onChange={setBirthdate} value={birthdate}/>
            </div>
            <p>Your date = {formattedBirthdate} </p>
            <div className='button-view-past-life'>
                <button className='home-button' onClick={() => {sendtoLoading()}}>View My Past Life</button>
            </div>
        </div>
    );
}

export default Home;