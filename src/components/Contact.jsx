import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function(){

    const [form , setForm] = useState({
      from_name : '',
      to_name : 'Thierry Bakera',
      message : ''
    })

    const [loading , setLoading] = useState(false)

    const handleForm = (e , key) => {
      setForm({
        ...form,
        [key] : e.target.value
      })
    }

    const hanldeSend = async ( e, form) => {

      e.preventDefault()

      

      if (form.from_name && form.to_name && form.message)
      {
        setLoading(true)
        emailjs.send(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,{
          from_name: form.from_name,
          to_name : 'Thierry Bakera',
          message : form.message
          } , import.meta.env.VITE_PUBLIC_KEY).then(re =>{
            setLoading(false);
            if (re.status == 200){
                toast.success('Your email has been sent successfully', {
                  style : {
                    fontSize : '12px'
                  }
                })
            }else{
              toast.error('Something went wrong !', {
                style : {
                  fontSize : '12px'
                }
              })
            }
          });
      }else{
          toast.error('Please fill in all fields', {
            style : {
              fontSize : '12px'
            }
          })
      }
    }


    return <section id="Contact" className="contact">
        <h2>Contact Me</h2>
        <form onSubmit={(e) => hanldeSend(e,form)} data-aos='zoom-in' >
          <div>
            <label htmlFor="name">Your Name</label>
            <input onChange={(e) => handleForm(e,'from_name')}  type="text" id='name' />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input onChange={(e) => handleForm(e,'from_email')} type="email" id='email' />
          </div>
          <div>
            <label htmlFor="message">Your Message</label>
            <textarea onChange={(e) => handleForm(e,'message')} id="message" cols="22" rows="4"></textarea>
          </div>
          <div>
            <button  type='submit'>{`${loading ? 'Sending...' : 'Send'}`}</button>
          </div>
        </form>
    </section>
}