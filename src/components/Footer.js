import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FaCircleNotch} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <Container>
              <Row>
                  <Col sm={3}>
                         <div className="logo-footer text-white d-flex align-items-center">
                               <h1 className='footer-logo'>Dan<span>Shop</span></h1>
                               <FaCircleNotch size={30} style={{color: 'orangered', marginLift: '10px'}}/>
                         </div>
                  
                  </Col>
                  <Col sm={3}>
                      <h6 className='text-white'>LET US HELP YOU</h6>
                      <ul className='text-white'>
                          <li>Help Center</li>
                          <li>Contact Us</li>
                          <li>Delivery options and timelines</li>
                          <li>Corporate and bulk purchases</li>
                          <li>Report a Product</li>
                           
                      </ul>
                  </Col>
                  <Col sm={3}>
                      <h6 className='text-white'>MAKE MONEY WITH DANSHOP</h6>
                      <ul className='text-white'>
                          <li>Help Center</li>
                          <li>Contact Us</li>
                          <li>Delivery options and timelines</li>
                          <li>Corporate and bulk purchases</li>
                          <li>Report a Product</li>
                           
                      </ul>
                  </Col>
                  <Col sm={3}>
                      <h6 className='text-white'>ABOUT DANSHOP</h6>
                      <ul className='text-white'>
                          <li>Help Center</li>
                          <li>Contact Us</li>
                          <li>Delivery options and timelines</li>
                          <li>Corporate and bulk purchases</li>
                          <li>Report a Product</li>
                           
                      </ul>
                  </Col>
              </Row>

              <div className="text-white text-center mt-5">
                  <h6>Developed By DanCode</h6>
                  <p>ezealidaniel90@gmail.com</p>
              </div>
        </Container>
    </div>
  )
}

export default Footer