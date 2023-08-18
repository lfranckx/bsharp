import React, { useEffect, useState } from 'react';
import '../styles/ContactPage.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [messageSuccess, toggleMessageSuccess] = useState(false);
    const [buttonState, handleButtonState] = useState('Send');
    const [buttonDisabled, handleButtonDisabled] = useState(false);
    const [message, handleMessage] = useState('');

    const submitForm = (values) => {
        handleButtonState('Sending');
        const newValues = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            age: values.age,
            message: values.message,
            user_instrument: values.instrument,
            user_experience: values.experience,
            lesson_type: values.lesson_type,
            goals: values.goals,
            reply_to: values.email
        }

        try {
            emailjs.send("service_yz67t52", "template_7c0ldzm", newValues, "user_4ZnH44kohKcJmQhnL2VGX")
            .then(res => {
                    toggleMessageSuccess(true);
                    handleButtonState('Sent');
                    handleButtonDisabled(true);
                }
            )
        } catch (error) {
            handleMessage(error.message);
        }
    }

    const instruments = {
        drums: "Drums",
        guitar: "Guitar",
        bass: "Bass",
        piano: "Piano",
        vocals: "Vocals"
    };
    const experience = {
        beginner: "Beginner",
        intermeddiate: "Intermediate",
        advanced: "Advanced"
    };
    const lesson_type = {
        in_person: "In-Person",
        online: "Online"
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const contactFormSchema = Yup.object().shape({
        name: Yup.string().min(2, '* Name is too short').max(20, "* 20 maximum characters").required('* Required'),
        email: Yup.string().email("* Invalid email").required("* Required"),
        phone: Yup.string().matches(phoneRegExp, "* This doesn't look like a phone number").required('* Required'),
        age: Yup.number().typeError('* Age must be a number').min(3, '* Age is too low').max(90, '* Age is too old').required('* Required'),
        message: Yup.string().min(4, "* Message is too short").max(800, "* 800 maximum characters").required("* Required"),
        instrument: Yup.string().oneOf(Object.values(instruments), "* Must select one of the valid options").required("* Required"),
        experience: Yup.string().oneOf(Object.values(experience), "* Must select one of the valid options").required("* Required"),
        lesson_type: Yup.string().oneOf(Object.values(lesson_type), "* Must select one of the valid options").required("* Required"),
        goals: Yup.string().min(4, "* Text is too short").max(300, "* 300 maximum characters").required("* Required")
    });

    return (
        <>
            <Helmet >
                <title>Contact | B# Music Lessons</title>
                <meta name='description' content='Get in touch with B# Music Lessons for your first free lesson!'/>
            </Helmet>
            <div id='contact-page'>
                <header className='header'>
                    <h1>Contact</h1>
                </header>
                <main>
                    <div className='form-wrap'>
                        <Formik 
                            initialValues={{ name: "", email: "", age: "", message: "", instrument: "", experience: "", lesson_type: ""}} 
                            validationSchema={contactFormSchema}
                            onSubmit={submitForm}
                        >
                            <Form id='contact-form'>
                                <div className='flex'>
                                    <fieldset className='fieldset'>
                                        <div className='wrap'>
                                            <div className="label">
                                                <label htmlFor="name" id='name'>
                                                    Name
                                                    <Field
                                                        name="name"
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <ErrorMessage component="div" className='error' name='name' />
                                            </div>
                                        </div>

                                        <div className='wrap'>
                                            <div className="label">
                                                <label htmlFor="phone" id='phone'>
                                                    Phone
                                                    <Field
                                                        name="phone"
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <ErrorMessage component="div" className='error' name='email' />
                                            </div>
                                        </div>
                                        
                                        <div className='wrap'>
                                            <div className="label">
                                                <label htmlFor="email" id='email'>
                                                    Email
                                                    <Field
                                                        name="email"
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <ErrorMessage component="div" className='error' name='email' />
                                            </div>
                                        </div>
                                        
                                        <div className='wrap'>
                                            <div className="label">
                                                <label htmlFor="age" id='age'>
                                                    Age
                                                    <Field
                                                        name="age"
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <ErrorMessage component="div" className='error' name='age' />
                                            </div>
                                        </div>

                                        <div className='wrap'>
                                            <div className="label">
                                                <label htmlFor="goals" id='goals' className='custom'>
                                                    <Field
                                                        name="goals"
                                                        as='textarea'
                                                        rows='6'
                                                        placeholder='Goals/Expectations'
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <ErrorMessage component="div" className='error' name='goals' />
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset className='fieldset'>
                                        <div className='wrap'>
                                            <div className="label">
                                                <label htmlFor="instrument" id='instrument'>
                                                    Instrument
                                                    <Field
                                                        name="instrument"
                                                        as='select'
                                                    >
                                                        <option value=''>Select an Option</option>
                                                        <option value='Guitar'>Guitar</option>
                                                        <option value='Piano'>Piano</option>
                                                        <option value='Bass'>Bass</option>
                                                        <option value='Drums'>Drums</option>
                                                        <option value='Vocals'>Vocals</option>
                                                    </Field>
                                                </label>
                                            </div>
                                            <div>
                                                <ErrorMessage component="div" className='error' name='instrument' />
                                            </div>
                                        </div>
                                        
                                        <div className='wrap'>
                                            <div className="label">
                                                <label htmlFor="experience" id='experience'>
                                                    Musical Experience
                                                    <Field
                                                        name="experience"
                                                        as='select'
                                                    >
                                                        <option value=''>Select an Option</option>
                                                        <option value='Beginner'>Beginner</option>
                                                        <option value='Intermediate'>Intermediate</option>
                                                        <option value='Advanced'>Advanced</option>
                                                    </Field>
                                                </label>
                                            </div>
                                            <div>
                                                <ErrorMessage component="div" className='error' name='experience' />
                                            </div>
                                        </div>

                                        <div className='wrap'>
                                            <div className="label">
                                                <label htmlFor="lesson_type" id='lesson_type'>
                                                    Lesson Type
                                                    <Field
                                                        name="lesson_type"
                                                        as='select'
                                                    >
                                                        <option value=''>Select an Option</option>
                                                        <option value='In-Person'>In-Person</option>
                                                        <option value='Online'>Online</option>
                                                    </Field>
                                                </label>
                                            </div>
                                            <div>
                                                <ErrorMessage component="div" className='error' name='lesson_type' />
                                            </div>
                                        </div>
                                        
                                        <div className='wrap'>
                                            <div className="label">
                                                <label htmlFor="message" id='message' className='custom'>
                                                    <Field
                                                        name="message"
                                                        as='textarea'
                                                        rows='10'
                                                        placeholder='Message'
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <ErrorMessage component="div" className='error' name='message' />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>


                                <div className='btn-wrap'>
                                    <button className="btn-secondary" type="submit" disabled={buttonDisabled}>
                                        {buttonState}
                                    </button>
                                </div>
                            </Form>
                        </Formik>

                        {message && <div className='message'>{message}</div>}
                    </div>
                </main>
            </div>
        </>
    );
}

export default ContactPage;