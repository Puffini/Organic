
import '../fonts.css'
import logo2 from '../img/test-tube-1.svg'
import logo3 from '../img/Union.svg'
import logo4 from '../img/Fill 329.svg'
import header_log from'../img/header_logo.svg'
import React from 'react';
import Modal from '../index.tsx'
import '../modal.css'


export default function Ecosystem() {
    const [isModal, setModal] = React.useState(false)
  const onClose = () => setModal(false)
  return (
    <div  className="Ecosystem">
        <Modal 
                        visible={isModal}
                        title="Blogger Contest"
                        content={<p className='Bloger_text1'> Blogger contest is a major blogger competition, record videos or create posts with an overview of our project, leave your referral link. At the end of the contest, we will announce the best reviewers. The best videos will be posted on our website.     
                        <p>Strating time: will be announced.</p> <p>Winning places are limited, you can read more in our WhitePaper.</p></p>  }
                        
                        footer={<button className="close2" onClick={onClose}>Close</button>}
                        onClose={onClose}/>
         <h1 className="kitchen">The Organic Farm Ecosystem</h1>
                        <div className="fillpull">
                            <div className="pull__content">
                                <div className="pull__content_mini">
                                    <img src={logo2} className="pull_logo1" alt=""/>
                                </div>
                                <p className="pull__text">
                                    <p className='pull__first-text'>Blogger Contest</p><br/>Competitions of the best bloggers for
                                    the season, increase your income by inviting new users!
                                </p>
                                <div className="pull_button">
                                    <p>
                                    <button className='button_text' onClick={() => setModal(true)}>Apply now</button>
                                    </p>
                                </div>
                            </div>
                            <div className="pull__content">
                                <div className="pull__content_mini"><img src={logo3} className="pull_logo1" alt=""/></div>
                                <p className="pull__text"><p className='pull__first-text'>Token</p><br/>
                                    Buy a token and fly up to the moon with us. Use the token in all the functionality of our
                                    project!
                                </p>
                                <div className="pull_button2"><p className="button_text2">Coming Soon</p></div>
                            </div>
                            <div className="pull__content">
                                <div className="pull__content_mini"><img src={logo4} className="pull_logo1" alt=""/></div>
                                <p className="pull__text3"><p className='pull__first-text3'>P2E</p><br/>
                                    Play to earn, games from Organic Farm will allow you to show your skills and get rewards for
                                    it!
                                </p>
                                <div className="pull_button2"><p className="button_text2">Coming Soon</p></div>
                            </div>
                            </div>
            </div>
    );
    }
