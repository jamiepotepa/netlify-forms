import React from 'react';

export default () => (
    <div>
        <h2>Index route</h2>
        <div>
           <form name="contact" data-netlify="true" netlify-honeypot="bot-field" method="POST">

               <label htmlFor="name">Name</label>
               <input type="text" name="name" id="name" placeholder="enter your name here" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="enter your email here" />

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="enter your message here" />

                <button type="submit">Send</button>

           </form>
        </div>
    </div>
);