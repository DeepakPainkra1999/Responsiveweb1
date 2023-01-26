import React from 'react';
import data from '../data/ctav5.json'

const Ctav3 = () => {
    const {ctav3}=data;
  return (
    <section id="ctav3" className="ctave3 bg-one p-80px-t">
        <div className="container bg-one">
            <div className ="ctav3_content">
                <h2 className="m-25px-b">
                    {ctav3.title1}<br/>
                    {ctav3.title2}
                </h2>
                <h2 className="display-4 m-25px-b">
                    <a href="tel:1234567890">{ctav3.number}</a>
                </h2>
                <a href="#contact" className="smooth button button_primary"><span>{ctav3.btnText}</span></a>
                <div className="ctav3_content_icon">
                    <i className="icofont-read-book"></i>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ctav3;