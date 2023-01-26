import React from 'react';
import { Link } from "react-scroll";
import Ctav3 from '../ctav3';
import data from '../../data/footer.json';
import { SiteLogo } from '../../global';
import { socialLink } from '../../global';

const Footer = ({menu, isBg}) => {
  const {footer} = data;
  return (
    <><Ctav3 />
    <footer
      className={`footer overflow-hidden ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="footer_top m-50px-t m-50px-b">
          <div className="row">
            <div className="col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-lg-0 justify-content-lg-start">
              <a href="/">
                <img src={SiteLogo.logo} alt={SiteLogo.alt} />
              </a>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-lg-0">
              <ul className="footer_menu">
                {menu?.map((data ,i) =>(
                  <li key={i}>
                  <Link 
                  activeClass="active"
                  className="benefits"
                  to={`${data.link}`}
                  spy={true}
                  smooth={true}
                  duration={500}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  offset={-60}
                  >
                    {data.title}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 d-flex justity-content-center align-items mb-3 justify-content-lg-end">
            <ul className="social-icon">
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
        <div className ="footer_copyright m-20pxt m-20px-b">
          <div className="row">
            <div className="col-12">
              <p className ="m-0 text-center">
                &copy; {new Date().getFullYear()} All right reserved. Made With
                <img 
                className="image-fluid"
                src={footer.icon}
                alt="footer icon"
                width="20"
                height="20"
                />
                by <a href="#footer">{footer.name}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer></>
  )
}

export default Footer;