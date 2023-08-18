import React, { useEffect } from 'react'
import "./SignUp.css"
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";



function SignUp() {
    useEffect(()=> window.scrollTo(0,0),[])
    return (
        <motion.div
        initial={{opacity:0 , translateY:30}}
        animate={{opacity:1 , translateY:0}}
        className='signUpFlex'>
            <div className='signUp'>
                <div className="top">
                    <div className='signUpContainer'>
                        <h4>Sign up to Salinaka</h4>
                        <div className="flexForm">
                            <div className="signUpForm">
                                <form action="">
                                    <div className='labelInput'>
                                        <label htmlFor="">*Fullname</label>
                                        <input type="text" placeholder='John Doe' />
                                    </div>
                                    <div className='labelInput'>
                                        <label htmlFor="">*Email</label>
                                        <input type="email" placeholder='test@example.com'/>
                                    </div>
                                    <div className='labelInput'>
                                        <label htmlFor="">*Password</label>
                                        <input type="password" placeholder='Your Password' />
                                    </div> 
                                    <button onClick={(e)=>e.preventDefault()}>Sign Up 🡪</button>  
                                </form>
                            </div>
                            <div className="contactSignUp">
                                <div className='facebook'>
                                    <AiOutlineFacebook style={{fontSize:"17px"}}/>
                                    <p>Continue with Facebook</p>
                                </div>
                                <div className='google'>
                                    <AiOutlineGoogle style={{fontSize:"17px"}}/>
                                    <p>Continue with Google</p>
                                    </div>
                                <div className='github'>
                                    <AiOutlineGithub style={{fontSize:"17px"}}/>
                                    <p>Continue with Github</p>
                                    </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p>Already have an account ?</p>
                    <Link to="/signin"><button>Sign In</button></Link>
                </div>
            </div>
        </motion.div>
    )
}

export default SignUp