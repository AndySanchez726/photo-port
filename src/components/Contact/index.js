import React from 'react';

function ContactForm() {
    return (
        <section>
            <h1>Contact me</h1>
            <form id='contact-form'>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='tetx' name='name' />
            </div>
            <div>
                <label htmlFor='email'>Email address:</label>
                <input type='email' name='email' />
            </div>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea name='message' row='5' />
            </div>
            <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;