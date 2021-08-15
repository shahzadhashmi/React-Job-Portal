import React, { useState, useEffect } from 'react';
import { vacancies as jobs, vacancies } from '../data';
import Vacancy from '../components/Vacancy';
import CreateJob from '../components/CreateJob';

const Home = () => {

    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        setVacancies(jobs);

    }, []);

    const handleSubmit = (form) =>{
        // ...spreding vacancies here 
        setVacancies([form, ...vacancies]);
        // console.log(form);
    };

    const handleDelete = (id) =>{
        const _vacancies = vacancies.filter(vacancy => vacancy.id !== id);
        setVacancies(_vacancies);
    };

    return (
        <>
            <section className="hero">
                <div className="hero-body">
                    <p className="title">Find your dream job today</p>
                    <p className="subtitle">
                        Apply for any vacancies below
                    </p>
                </div>
            </section>

            <section>
                {/* we'll get data from component to our parent component, pass a normal function reference as a props and call a fun inside the component and pass the data into the function*/}
                <CreateJob submit= {handleSubmit} />
            </section>

            <section>
                {/* display dynamic data using map */}
                {
                    vacancies.map(vacancy => {
                        return (
                            // by doing this we'll send props to vacancy component. pass unique key here.
                            // passing data in component
                            <Vacancy key={vacancy.id} vacancy={vacancy} handleDelete= {handleDelete}/>
                        );
                    })}
            </section>
        </>
    );
};

export default Home;
