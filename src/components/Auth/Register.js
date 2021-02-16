import React from 'react';
import registerImage from '../../assets/images/register.png'
import { Link } from "react-router-dom";

function Register(){
    return(
        <div id="auth-container">
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={registerImage} alt='register'/>
                    </div>
                    <div id='form-section'>
                        <h2>Create an account</h2>
                        <form>
                            <div className='input-field mb-1' >
                                <input placeholder="First name"></input>
                            </div>
                            <div className='input-field mb-1' >
                                <input placeholder="Last name"></input>
                            </div>
                            <div className='input-field mb-1' >
                                <input placeholder="Email"></input>
                            </div>
                            <div className='input-field mb-1' >
                                <select>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                </select>
                            </div>
                            <div className='input-field mb-2'>
                                <input placeholder="Password"></input>
                            </div>
                            <button>REGISTER</button>
                        </form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;