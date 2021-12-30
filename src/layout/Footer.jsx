import React from 'react'
import { MdEmail, MdLocationCity, MdLocationPin, MdSmartphone } from 'react-icons/md'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footIntro">
          <h2>logo.</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta porro sint consequatur recusandae.
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
          <h4>Support and Downloads</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi soluta porro reiciendis temporibus minima,
            odit adipisci vitae. Quaerat corrupti atque asperiores consectetur! Corrupti dolor fuga laborum, ad
            voluptatum distinctio esse?
          </p>
        </div>
      </div>
      <Copyright />
    </div>
  )
}

export default Footer

export const Copyright = () => (
  <div className="footer__bottom">
    <p>&copy; ace4port and STmg. All rights reserved</p>
  </div>
)
