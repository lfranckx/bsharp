import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUpForm = () => {

    const [message, handleMessage] = useState('');

    const submitForm = async (values) => {
        const { email } = values;

        // try {
        //     const payload = {
        //         email_address: email
        //     };

        //     await axios.post("https://serene-journey-81970.herokuapp.com/", payload, 'bsharp');
        //     handleMessage("Thank you for signing up. You'll be the first to know about upcoming news and events!");

        // } catch (error) {
        //     console.log(error.message);
        //     handleMessage(error.message);
        // }

        handleMessage("Thank you for signing up. You'll be the first to know about upcoming news and events!");
    }

    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email("* Invalid email").required("* Email is Required"),
        name: Yup.string().min(2, '* Name is too short').max(20, "* 20 maximum characters").required('* First Name is Required'),
    })

    return (
        <>
            <Formik
                initialValues={{ email: ''}}
                validationSchema={SignUpSchema}
                onSubmit={submitForm}
            >
                <Form>
                    <label htmlFor='name' id='name'>
                        <Field name='name' placeholder='First Name' />
                    </label>
                    <ErrorMessage component="div" className='error' name='name' />

                    <label htmlFor='email' id='email'>
                        <Field name='email' placeholder='Email' />
                    </label>
                    <ErrorMessage component="div" className='error' name='email' />
                    
                    <button 
                        className='btn' 
                        type='submit'>SEND</button>
                </Form>
            </Formik>
            {message && <div className='message'>{message}</div>}
        </>
    )
}

export default SignUpForm;