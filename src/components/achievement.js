import React from 'react';
import data from '../data/achievement.json';

const Achievement= ({isBg}) => {
    const {achievements}=data;
  return (
    <section id="achievements" className={`achievement section-padding  ${isBg==="yes"? "bg-one":""}`}>
        <div className="container">
            <div className="row">
                <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                    <div className="section-title-center text-center">
                        <span>{achievements.subtitle}</span>
                        <h2 className="display-6">{achievements.title}</h2>
                        <div className="section-divider divider-traingle"></div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2">
              {achievements?.awards?.map((data,i)=>(
                <div
                key={data.id}
                className="m-15px-tb"
                data-aos ='fade-up'
                data-aos-duration='1000'
                data-aos-delay={(i+2)*50}
                >
                  <div className="achievement_item h-100 translateEffect1">
                    <div className ="row row-cols-2">
                      <div className="col mt-0">
                        <img
                        className="img-fluid"
                        src={data.image}
                        alt={data.title}
                        />
                      </div>
                      <div className="col mt-0">
                        <div className="achievement_content">
                          <div className="achievement_content_icon">
                            <img
                            className="img-fluid"
                            src={achievements.icon}
                            alt="icon"
                            width="80"
                            />
                          </div>
                          <h3>{data.title}</h3>
                          <p>{data.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Achievement;