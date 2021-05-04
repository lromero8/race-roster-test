import heartLamps from './Assets/heart-lamps.png'
import eventPicture from './Assets/event-picture.png'
import { useState } from 'react'

const Home = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [name_invalid, setNameInvalid] = useState(false)
    const [lastname_invalid, setLastnameInvalid] = useState(false)
    const [email_invalid, setEmailInvalid] = useState(false)
    const [phone_invalid, setPhoneInvalid] = useState(false)

    const [is_form_valid, setFormValid] = useState(true)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {name, lastname, email, phone}

        let temp = validate()
        setFormValid(temp)

        if (temp) {
            console.log(form)
            setName('')
            setLastname('')
            setEmail('')
            setPhone('')
        }
    }
    
    const validate = (e) => {
        !name? setNameInvalid(true) : setNameInvalid(false);
        !lastname? setLastnameInvalid(true) : setLastnameInvalid(false);
        !email? setEmailInvalid(true) : setEmailInvalid(false);
        !phone? setPhoneInvalid(true) : setPhoneInvalid(false);

        return !name || !lastname || !email || !phone? false : true;

    }
    return (
        <div className="home">

            <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white">
            
                <h1 className="mt-5 mb-3">Make event management a breeze</h1>

                <h3 className="mb-4">ACME Events Inc. makes making beautiful event landing pages a DIY adventure.</h3>

                <input className="demoButton" type="button" value="BOOK A DEMO"/>

            </div>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-4">
                            <img className="lampImg" src={heartLamps} alt="heart lamp"/>
                        </div>
                        <div className="col-lg-6 col-xl-8 text-left pl-xl-5 mt-2">
                            <h2 className="mb-4">Make your ticket holders happy</h2>
                            <p>
                                A beautiful little sunset. Talent is a pursued interest. That is to say, anything you practice you can do. This
                                is probably the greatest thing that's ever happened in my life. These things happen automatically. All you
                                have to do is just let them happen.
                            </p>
                            <p>
                                Just let go - and fall like a little waterfall. Nothing's gonna make your husband or wife madder than coming
                                home and having a snow-covered dinner. Just pretend you are a whisper floating across a mountain. Zip.
                                That easy.
                            </p>
                            <a className="featureLink" href="/#">View full feature list</a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="videoSection">
                <div className="resp-container">
                    <iframe className="resp-iframe" src="https://www.youtube.com/embed/e0GHi9mf-54" title="Running Roosters" allow="autoplay" allowFullScreen></iframe>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col text-left">

                            <div className="demo">
                                
                                <h2>Book a demo</h2>

                                { !is_form_valid && <div className="errorMessage">HEADS UP! There are errors in the form below</div>}

                                <form onSubmit={handleSubmit}>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="inputName">First name</label>
                                            <input 
                                                type="text"
                                                className={'form-control ' + (name_invalid ? 'is-invalid' : '')}
                                                id="inputName"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <div className="invalid-feedback">
                                                First name is required
                                            </div>

                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="inputLastname">Last name</label>
                                            <input 
                                                type="text"
                                                className={'form-control ' + (lastname_invalid ? 'is-invalid' : '')}
                                                id="inputLastname"
                                                value={lastname}
                                                onChange={(e) => setLastname(e.target.value)}
                                            />
                                            <div className="invalid-feedback">
                                                Last name is required
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="inputEmail">Email</label>
                                            <input 
                                                type="email"
                                                className={'form-control ' + (email_invalid ? 'is-invalid' : '')}
                                                id="inputEmail"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <div className="invalid-feedback">
                                                Expected email format: example@example.com
                                            </div>
                                            <div className="invalid-feedback">
                                                Email name is required
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="inputPhone">Phone number</label>
                                            <input 
                                                type="phone"
                                                className={'form-control ' + (phone_invalid ? 'is-invalid' : '')}
                                                id="inputPhone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                            <div className="invalid-feedback">
                                                Phone number is required
                                            </div>
                                        </div>
                                    </div>                                                         

                                    <button type="submit" className="btn btn-primary">Sign in</button>

                                </form>

                            </div>


                        </div>
                        <div className="col">
                            <img className="event img" src={eventPicture} alt="event img"/>
                        </div>
                    </div>
                </div>
            </section>


            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}
 
export default Home;