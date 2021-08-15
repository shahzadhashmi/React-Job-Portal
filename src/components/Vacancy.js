import React from 'react';


// we are using props(vacancy) here 
const Vacancy = ({vacancy, handleDelete}) => {
    return (
        <div>
             <div className="box mt-4 mb-4">
                            <h1 className="title is-5">{vacancy.title}</h1>
                            <span>{vacancy.company}</span>
                            <p>{vacancy.city}</p>
                            <div className="block"></div>
                            <p>{vacancy.description}</p>
                            <div className="is-flex is-justify-content-space-between">
                               {/* For real life project we'll send data to backend to store  */}
                                <button onClick={() =>{
                                    window.alert(`Successfully applied for the position ${vacancy.title} `);
                                }} 
                                className="button is-primary mt-4">Apply</button>

                                <button onClick={() => handleDelete(vacancy.id)} className="button is-danger mt-4">Delete</button>
                            </div>
                        </div>
        </div>
    )
}

export default Vacancy;
