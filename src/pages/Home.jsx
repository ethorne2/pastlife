import React from 'react';
import DefinitionCard from '../components/DefinitionCard';
 /* Date Picker and Country Picker imports */
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import countryList from 'react-select-country-list';


function Home() {

    /* useState for birthdate */
    const [birthdate, setBirthdate] = useState(new Date());

    /* useState for birth country */
    const [country, setCountry] = useState('');
    const options = useMemo(() => countryList().getData(), []);

    const countryChangeHandler = country => {
        setCountry(country);
    };

    /* Get the values of the birthday */
    const formattedBirthdate = birthdate.toISOString().slice(0,10);

    /* function to send formattedBirthdate and country to the loading screen for fetching from API */
    const navigate = useNavigate();
    const sendtoLoading = () => {
        navigate('/loading', {state:{birthdate:formattedBirthdate, country:country}});
    };


    return (
        <div className='centered-home-screen'>
            <br></br>
            <h1 className='page-title'>Welcome to Past Life</h1>
            <br></br>
            <DefinitionCard />
            <h2 className='instruction-title'>Instructions</h2>
            <p className='instruction-text'>Ready to find your past life?</p>
            <p className='instruction-text'><b>Enter your birthdate and birth country 
            to learn about your past life.</b></p>
            <br></br>
            <h2 className='instruction-title'> Enter your birthdate</h2>
            <div className='date-picker'>
                <DatePicker onChange={setBirthdate} value={birthdate}/>
            </div>
            <br></br>
            <h2 className='instruction-title'> Enter your birth Country</h2>
            <div className='country-picker-container'>
                <Select options={options} value={country} onChange={countryChangeHandler} />
            </div>
            <div className='button-view-past-life'>
                <button className='home-button' onClick={() => {sendtoLoading()}}>View My Past Life</button>
            </div>
        </div>
    );
}

export default Home;