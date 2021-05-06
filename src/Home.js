import { useState } from 'react'
import heartLamps from './Assets/heart-lamps.png'
import eventPicture from './Assets/event-picture.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,  faPhoneAlt, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import Map from './Map'

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
    const [is_form_sent, setFormSent] = useState(false)

    const currentYear = new Date().getFullYear()
    
    
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
            setFormSent(true)
        }
    }
    
    const validate = (e) => {
        !name? setNameInvalid(true) : setNameInvalid(false);
        !lastname? setLastnameInvalid(true) : setLastnameInvalid(false);
        !email? setEmailInvalid(true) : setEmailInvalid(false);
        !phone? setPhoneInvalid(true) : setPhoneInvalid(false);


        return !name || !lastname || !email || !phone? false : true;

    }

    const demoForm = () => {
        return (
            <div className="demo">
                
                { !is_form_valid && <div className="errorMessage mb-4"><strong>HEADS UP!</strong> There are errors in the form below</div>}

                <form onSubmit={handleSubmit}>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputName">First name <strong className="asterik">*</strong></label>
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
                            <label htmlFor="inputLastname">Last name <strong className="asterik">*</strong></label>
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
                            <label htmlFor="inputEmail">Email <strong className="asterik">*</strong></label>
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
                            <label htmlFor="inputPhone">Phone number <strong className="asterik">*</strong></label>
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

                    <button type="submit" className="submitButton">Sign up</button>

                </form>

            </div>
        )
        
    }
    
    const successMessage = () => {
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="icon"><FontAwesomeIcon icon={faCheckCircle} size="9x" className="checkIcon"/></div>
                    </div>
                    <div className="col">
                        <h2>Demo request sent!</h2>
                        <p>Someone will reach out to schedule your demo within the next 48 business hours</p>
                        <a className="customeLink" href="/#">Request another demo</a>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="home">

            <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white">
            
                <h1 className="mt-5 mb-3">Make event management a breeze</h1>

                <h3 className="mb-4">ACME Events Inc. makes making beautiful event landing pages a DIY adventure.</h3>

                <a href="#formAnchor"><input className="demoButton" type="button" value="BOOK A DEMO"/></a>

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
                            <a className="customeLink" href="/#">View full feature list</a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="videoSection">
                <div className="resp-container">
                    <iframe className="resp-iframe" src="https://www.youtube.com/embed/e0GHi9mf-54" title="Running Roosters" allow="autoplay" allowFullScreen></iframe>
                </div>
            </section>

            <a href="/#" name="formAnchor"></a>
            
            <section className="formSection">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col col-md-6 text-left">

                            <h2 className="mb-4">Book a demo</h2>

                            { is_form_sent ? successMessage() : demoForm() }

                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-md-end justify-content-sm-end mt-5">
                            <img className="img-fluid" src={eventPicture} alt="event img"/>
                        </div>
                    </div>
                </div>
            </section>


            <section className="mapSection mt-5">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-3 text-left">
                            <h6>Features</h6>
                            <p>Event organizer tools</p>
                            <p>Timer tools</p>
                            <p>Charity co-ordinator tools</p>
                            <p>Participant experience</p>
                        </div>
                        <div className="col-md-12 col-lg-3 text-left">
                            <h6>Tools</h6>
                            <p>Dashboard maker</p>
                            <p>Data &amp; analytics</p>
                            <p>Email marketing tool</p>
                            <p>Social promotion tool</p>
                        </div>
                        <div className="col-md-12 col-lg-3 text-left">
                            <h6>Contact</h6>
                            <p><FontAwesomeIcon icon={faPhoneAlt} size="sm"/> 1-888-555-5555</p>
                            <p><FontAwesomeIcon icon={faEnvelope} size="sm"/> example@example.com</p>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} size="sm"/> 123 Fake Street, London, ON</p>
                            <p>A1B 2C3</p>
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <Map/>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-6 col-md-4 d-flex justify-content-start pt-2">
                            <p><FontAwesomeIcon icon={faCopyright} size="xs"/> Copyright Acme Inc. {currentYear}</p>
                        </div>
                        <div className="col-6 col-md-4 ml-md-auto d-flex justify-content-end">
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="socialIcons"/>
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="socialIcons"/>
                            <FontAwesomeIcon icon={faInstagram} size="2x" className="socialIcons"/>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
 
export default Home;