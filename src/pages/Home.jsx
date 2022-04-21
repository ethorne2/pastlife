import React from 'react';
import DefinitionCard from '../components/DefinitionCard';
 /* Date Picker imports */
import { useState } from 'react';
import DatePicker from 'react-date-picker';

function Home() {

    const [birthdate, setBirthdate] = useState(new Date());

    /* Get the values of the birthday */
    const formattedBirthdate = birthdate.toISOString().slice(0,10);
    const BirthdateYear = formattedBirthdate.slice(0,4);
    const BirthdateMonth = formattedBirthdate.slice(5,7);
    const BirthdateDay = formattedBirthdate.slice(8,11);

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
            <p>Your Birthdate Year = {BirthdateYear} </p>
            <p>Your Birthdate Month = {BirthdateMonth} </p>
            <p>Your Birthdate Day = {BirthdateDay} </p>

            <div className='button-view-past-life'>
                <button>View My Past Life</button>
            </div>
        </div>
    );
}

export default Home;