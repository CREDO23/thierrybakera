import profil from '../assets/profil.png'


export default function(){
    return <section className='home'>
        <div className='catch-phrase'>
            <h1>Hi , I am Thierry <br /> <span>SoftWare Developper</span></h1>    
            <p>I Design and code beautifully Web Application and <br /> I love what I do</p>
            <div className='buttons'>
                <button className='cv'>
                    Download CV
                </button>
                <button className='hire-me'>
                    Hire me now
                </button>
            </div>
        </div>
        <div className='profil'>
            <img src={profil} alt="" srcset="" />
        </div>
    </section>
}