import React from 'react'
import ReviewImg from "../asset/review-1.png"
import HeroImg from "../asset/headset-1.png"

const Hero = () => {
  return (
    <div className='all-hero shadow d-flex justify-content-between align-items-center'>
           <div className="hero-left">
                <div className="deals d-flex align-items-center">
                    <i className="fa fa-edit"></i>
                    <h5>Hot Deal In This Week</h5>


                </div>
                <div className="hero-header">
                    <h3>
                        <span>Daniels Wireless</span>
                        <span>HeadPhone</span>
                    </h3>
                </div>

                <div className="hero-last-left d-flex align-items-center">
                    <div className="shop-btn">
                          <a href="#shop">Shop Now</a>
                    </div>
                    <div className="review-section d-flex align-items-center">
                          <div className="review-img">
                                <img src={ReviewImg} alt="" />
                                <img src={ReviewImg} alt="" />
                                <img src={ReviewImg} alt="" />
                              
                          </div>
                          <div className="star-review">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <div>
                                   100+ Review
                              </div>
                          </div>
                    </div>
                </div>
           </div>
           <div className="hero-right">
              <img className='img-fluid w-100' src={HeroImg} alt="" />
           </div>
    </div>
  )
}

export default Hero