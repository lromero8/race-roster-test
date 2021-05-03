import heartLamps from './Assets/heart-lamps.png'

const Home = () => {
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
                <div class="resp-container">
                    <iframe class="resp-iframe" src="https://www.youtube.com/embed/e0GHi9mf-54" gesture="media"  allow="encrypted-media" allowfullscreen></iframe>
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