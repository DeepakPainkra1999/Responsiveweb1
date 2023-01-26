import React from 'react';
import data from '../data/contact.json';
import {Link} from 'react-router-dom';
import { socialLink } from '../global';


const Contact = ({isBg}) => {
    const {contact} = data;

  return (
    <section
    id="contact"
    className={`section-padding contact ${isBg==="yes"? "bg-one":""}`} 
    >
        <div className='container'>
            <div className="row">
                <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                    <div className="section-title-center text-center">
                        <span>{contact.subtitle}</span>
                        <h2 className="display-6">{contact.title}</h2>
                        <div className ="section-divider divider-traingle"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div 
                className="col-lg-8 col-md-6 col-sm-12 m-25px-b"
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-delay="200"
                >
                    <div className="contact-form-box">
                        <form
                        id="contact-form"
                        >
                            <div className="mb13">
                            <input
                            name="name"
                            className="contact-name"
                            id="contact-name"
                            type="text"
                            placeholder="Your Name"
                            required
                            />
                            </div>
                            <div className="mb13">
                            <input
                            name="email"
                            className="contact-email"
                            id="contact-email"
                            type="email"
                            placeholder="Your Email"
                            required
                            />
                            </div>
                            <div className="mb13">
                            <input
                            name="subject"
                            className="contact-subject"
                            id="contact-subject"
                            type="text"
                            placeholder="Subject"
                            required
                            />
                            </div>
                            <div className="mb30">
                            <textarea
                            name="message"
                            className="contact-message"
                            id="contact-message"
                            type="text"
                            placeholder="Your Message"
                            required
                            >
                            </textarea>
                            </div>
                            <button
                            type="submit"
                            className="button button_primary align-items-center"
                            >
                                <span>{contact.btnText}</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div 
                className="col-lg-4 col-md-6 col-sm-12 m-25px-b"
                >
                    <div className="contact_address p-30px">
                    <ul className="contact_address_content">
                        <li>
                            <span>{contact.address}</span>
                            {contact.addressText1}
                            <br/>
                            {contact.addressText2}
                        </li>
                        <li>
                            <span>{contact.phone}</span>
                            <a href="tel:1124447900">{contact.number}</a>
                        </li>
                        <li>
                            <span>{contact.email}</span>
                            <Link to="/#">{contact.emailText}</Link>
                        </li>
                    </ul>
                    <h4>{contact.socialTitle}</h4>
                    <ul className="social-icon mt-3">
                                    {socialLink.facebook===""? (
                                        ""
                                        ):(
                                            <li>
                                                <a href={socialLink.facebook}>
                                                    <img
                                                    className="img-fluid"
                                                    src="assets/icons/facebook.svg"
                                                    alt="icon"
                                                    width="25"
                                                    height="25"/>
                                                </a>
                                                
                                            </li>
                                        )}
                                        {socialLink.twitter===""? (
                                        ""
                                        ):(
                                            <li>
                                                <a href={socialLink.twitter}>
                                                    <img
                                                    className="img-fluid"
                                                    src="assets/icons/twitter.svg"
                                                    alt="icon"
                                                    width="25"
                                                    height="25"/>
                                                </a>
                                                
                                            </li>
                                        )}
                                        {socialLink.linkedin===""? (
                                        ""
                                        ):(
                                            <li>
                                                <a href={socialLink.linkedin}>
                                                    <img
                                                    className="img-fluid"
                                                    src="assets/icons/linkedin.svg"
                                                    alt="icon"
                                                    width="25"
                                                    height="25"/>
                                                </a>
                                                
                                            </li>
                                        )}
                                        {socialLink.youtube===""? (
                                        ""
                                        ):(
                                            <li>
                                                <a href={socialLink.youtube}>
                                                    <img
                                                    className="img-fluid"
                                                    src="assets/icons/youtube.svg"
                                                    alt="icon"
                                                    width="25"
                                                    height="25"/>
                                                </a>
                                                
                                            </li>
                                        )}
                                        {socialLink.whatsapp===""? (
                                        ""
                                        ):(
                                            <li>
                                                <a href={socialLink.whatsapp}>
                                                    <img
                                                    className="img-fluid"
                                                    src="assets/icons/whatsapp.svg"
                                                    alt="icon"
                                                    width="25"
                                                    height="25"/>
                                                </a>
                                                
                                            </li>
                                        )}
                                     </ul>
                                    </div>
                                </div>
                              </div>
                     </div>   
     </section>
  )
}

export default Contact;