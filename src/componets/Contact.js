import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
    const [sent, setSent] = useState("sent-hidden")
    const [message, setMessage] = useState("")

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yyq18bo', 'template_rl4tugf', form.current, 'NgcVLhhwELYD-f1PA')
            .then((result) => {
                setSent("sent")
                setMessage("Sent Successfully. Can't Wait To Connect!")
            }, (error) => {
                setSent("not-sent")
                setMessage("Sorry! Something Went Wrong, Try Again")
            });
        e.target.reset()
    };

    return (
        <>
        <div className='login'>

             <form className="form" ref={form} onSubmit={sendEmail}>
                <h1> Get In Touch!</h1>
                <input placeholder='Name' type="text" name="name" />
                <br></br>
                <input placeholder='Email' type="email" name="email" />
                <br></br>

                <input placeholder='Subject' type="text" name="subject" />
                <br></br>

                <textarea placeholder='Message' name="message" />
                <br></br>
                <input className='send' type="submit" value="Send" />
            </form>
            <h1 className={sent}>{message}</h1>
        </div>
           
        </>
    );
};
export default Contact