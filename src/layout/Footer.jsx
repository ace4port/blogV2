import React from 'react'
import { MdEmail, MdLocationCity, MdLocationPin, MdSmartphone } from 'react-icons/md'

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footer__main">
          <div className="footIntro">
            <h2>techBlog.</h2>
            News, Views, articles and reviews for all of your tech needs. All in one place. Right here
          </div>

          <div className="footContact">
            <h4>Contact Info</h4>
            <p>
              <MdLocationPin />
              street
            </p>
            <p>
              <MdLocationCity />
              city
            </p>
            <p>
              <MdEmail />
              email
            </p>
            <p>
              <MdSmartphone />
              phone
            </p>
          </div>
          <div className="footSupport">
            <h4>Support and Feedback</h4>
            <p>
              We would love to head your feedback and reviews. It helps us improve, learn and correct any bugs or errors
              you encounter. Mail them <a href="mailto:ace4port@gmail.com">here</a>
            </p>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  )
}

export default Footer

export const Copyright = () => (
  <div className="footer__bottom">
    <p>&copy; ace4port and STmg {new Date().getFullYear()}. All rights reserved</p>
  </div>
)
