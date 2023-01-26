import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import data from '../data/hero.json';

function SubscribeForm (){
    return(
        <form>
            <div className="input-group">
                <input
                type='email'
                required
                placeholder="Your email"
                />
                <button type="submit" className="button button_primary">
                <span>subscribe</span>
            </button>
            </div>
            
        </form>
    )
}

const Hero = ({isBg}) => {
    const {herov1}=data;
  return (
    <section id="hero"
    className={`hero hero_padding overflow-hidden position-relative ${isBg ==="yes"? "bg-one":""}`}>
        <div className="circle x1"></div>
        <div className="circle x2"></div>
        <div className="circle x3"></div>
        <div className="circle x4"></div>
        <div className="circle x5"></div>
        <div className="container">
            <div className='row align-item-center'>

                <div className="col-lg-6 m-0px -b md-m-30px-b">
                    <div className="hero_content position-relative">
                        <div className="badge-text mb-2 text-uppercase">
                            {herov1.subtitle}
                        </div>
                        <h1 className="display-4 mb-4 text-capitalizer">{herov1.title}</h1>
                        <p claName="text-muted mb-5 fs-5">{herov1.description}</p>
                        <MailchimpSubscribe 
                             render={({subscribe,status,message})=>(
                                <SubscribeForm
                                status={status}
                                message={message}
                                onValidated={(formData)=>subscribe(formData)}
                                />
                             )}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hero_images text-center">
                        <img className="img-fluid" src={herov1.image} alt=''/>
                        <div className ="hero_images--budge">
                            <span>
                                <span className="hero_images--budge--text1">
                                    {herov1.tagTitle}
                                </span>
                                <span className="hero_images--budge--tex2">
                                    {herov1.tagText}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </section>
  )
}

export default Hero;