import React from 'react'
import "../CSS/Footer.css"

export default function Footer() {

  return (
    <>
    <div className="feedback ">
        <h3>
            Your feedback is highly valuable to us.
            
        </h3>

        <form  className='feedback-form' id='feedback-form'>
            <input type="text" name="feedback" id="feedback" placeholder='Your feedback'/>
            <button type="submit">Send</button>
        </form>
    </div>
    <div className='footer'>

        <div className="footer-title">
        <img src={require("../Assets/devfeed-logo2.png")} alt="" id='footer-logo' />
        </div>
        <div className="copyright">
            &copy; Copyrights by DevFeed. All rights reserved 
        </div>
    </div>
    </>
  )
}
