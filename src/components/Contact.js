import React from 'react';

export default () => {

    return (
        <div>
           <form name="contact-form" netlify method="post">

               <label for="name">Name</label>
               <input type="text" name="name" id="name" placeholder="enter your name here" />

                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="enter your email here" />

                <label for="message">Message</label>
                <textarea name="message" id="message" placeholder="enter your message here" />

                <button type="submit">Send</button>

           </form>
        </div>
    )
}