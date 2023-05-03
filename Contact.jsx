import React from 'react';

function Contact() {

     
        const handleSubmit = (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            console.log({
            });
            const jsonData = { 
                name: data.get('name'),
                email: data.get('email'),
                message: data.get('message')
            }
            fetch('http://localhost:3000/contact',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData),
            })
            .then(response => response.json())
            .then(data =>{
             if (data.status === 'ok') {
                alert('success')
             }else {
                alert('error')
             }
          })
          .catch((error) => {
            console.error('Error:',error);
          });
          
 
         }
        
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form>
                <input type='text' placeholder='Full Name' required/>
                <input type='email' placeholder='Type Your E-Mail ' required/>
                <textarea placeholder='Write Here.....' name='message'></textarea>
                <input type='submit' value='Send'/>
            </form>
        </div>  
    )
}

export default Contact;