

export default function(){
    return <section id="Contact" className="contact">
        <h2>Contact Me</h2>
        <form >
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id='name' />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input type="email" id='email' />
          </div>
          <div>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" cols="22" rows="4"></textarea>
          </div>
          <div>
            <button type='submit'>Envoyer</button>
          </div>
        </form>
    </section>
}