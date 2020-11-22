import React from 'react'
import Logo from '../components/Logo'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SocialNetwork from '../components/SocialNetwork'
import ButtonsBottom from '../components/ButtonsBottom'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>12 rue du Code</p>
              <p>33000 Bordeaux</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0621830703" className="hover">
                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => alert('Téléphone copié !')}>06 21 83 07 03</p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="dsouks@yahoo.fr" className="hover">
                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => alert('Email copié !')}>dsouks@yahoo.fr</p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>DS Agency - 2020</p>
          </div>
        </div>
        <ButtonsBottom left={'/project-4'} />
      </div>
    </main>
  )
}

export default Contact
