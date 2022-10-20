import emailjs from '@emailjs/browser';
import { useRef } from "react";

const boxStyle = {
    backgroundColor: "turqoise"
}

const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ww15m6o', 'template_qnckd74', form.current, 'HuO3ReZ7WLqyQEDaf')
        .then((result) => {
            console.log(result.text);
            console.log('message sent')
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div className='bg-neutral-300 rounded-lg p-1 mt-2'>
            <div style = {boxStyle}>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col mt-4 pl-3 pr-3'>
                    <label className='font-bold pb-2' >Name</label><br/>
                    <input type="text" name="user_name" /><br/>
                    <label className='font-bold pb-2 pt-2'>Email</label><br/>
                    <input type="email" name="user_email" /><br/>
                    <label className='font-bold pb-2 pt-2'>Message</label><br/>
                    <textarea name="message" /><br/>
                    <input className='font-bold hover:text-lg pt-2 pb-2'type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
  };
  
  export default ContactUs;
  