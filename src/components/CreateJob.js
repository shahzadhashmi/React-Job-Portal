import React, {useState} from 'react';

const CreateJob = ({submit }) => {
 
    // we are storing form data inside the state.
    //  by default it's empty string.
    const [form, setForm] = useState({
        title: '',
        company: '',
        city: '',
        description: '',
    });

    const handleInput = (event) => {
        // making dynamic form
        // clone the current state(...form)
        // event.target.name will get the key from state,    
        setForm({...form, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        // ...spreding form data and generating unique id/string using date constructor.
        submit({...form, id: new Date().getTime().toString() });
        // console.log('submitting........')
    };

    return (
        <div className="box">
            <h1 className="title is-5">Create a Vacancy</h1>
            <form onSubmit = {handleSubmit} >
                {/* controlled input or two way binding  
                onChange will send value to state using function*/}
                
                <input type="text" className="input" placeholder="Job title" value= {form.title} name = "title" 
                onChange= { handleInput } required />

                <input type="text" className="input" placeholder="Company name" value= {form.company} name = "company" 
                onChange= { handleInput } required />
                
                <input type="text" className="input" placeholder="City name" value= {form.city} name = "city" 
                onChange= { handleInput } required />
                
                <textarea className="input" type="text" placeholder="Description" value= {form.description} name = "description" 
                onChange= { handleInput } required></textarea>
                
                <button className="button is-primary">Create</button>
            </form>
        </div>
    )
}

export default CreateJob;
