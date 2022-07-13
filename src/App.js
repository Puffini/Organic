
import Ecosystem from "./components/Ecosystem";
import Footer  from "./components/Footer";
import Refferals from "./components/Refferals";
import Facts from "./components/Facts";
import Connect from "./components/Connect";
import GameButtons from "./components/GameButtons";
import logo from './img/header_logo.svg'
import './fonts.css'
import { BrowserRouter } from "react-router-dom";
import React from 'react'
import Modal from "./index.tsx";


function App() {
    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)
  return (
    <BrowserRouter>
    <div className="App">
      <main className="main">
          <div className="wrapper">
              <div className="container">
                  <div className="header__logo">
                      <a href="/" className='header__logo-link'>
                          <img src={logo} className="header__logo-pic" alt="Organic Farm"/>
                      </a>
                  </div>
                  <Connect />
                  <GameButtons />
                  <Facts />
                  <Refferals />
                  <Ecosystem />
                  <div className="pull_buttton">
                      <p>
                          <button className='button_text' onClick={() => setModal(true)}>Apply now</button>
                      </p>
                  </div>
              </div>
              <Footer />
          </div>
          <Modal
              visible={isModal}
              title="Blogger Contest"
              content={<p className='Bloger_text1'> Blogger contest is a major blogger competition, record videos or create posts with an overview of our project, leave your referral link. At the end of the contest, we will announce the best reviewers. The best videos will be posted on our website.
                  <p>Strating time: will be announced.</p> <p>Winning places are limited, you can read more in our WhitePaper.</p></p>  }

              footer={<button className="close2" onClick={onClose}>Close</button>}
              onClose={onClose}/>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
