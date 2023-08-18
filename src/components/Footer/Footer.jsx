import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>
        <div className='footerContainer' style={{margin:"0 auto", width:"90%"}}>
                <div>
                    <div><p>Developed by Ismixan Taghiyev</p></div>
                </div>
                <div className='footerImg'>
                    <img src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt="" />
                </div>
                <div>
                    <p>Fork this project  HERE</p>
                </div>
            </div>
        </div>
    )
}

export default Footer