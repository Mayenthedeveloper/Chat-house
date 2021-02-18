import React, {useState, Fragment} from 'react';
import './Navbar.scss'
import Modal from '../../../Modal/Modal'
// import { useSelector } from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Navbar(){

    const [showProfileOptions, setShowProfileOptions] = useState(false)
    const [showProfileModal, setShowProfileModal] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState('')

    const submitForm = (e) => {
        e.preventDefault()

    
    }
    

    return(
        <div id='navbar' className='card-shadow'>
            <h2>Chat House</h2>
            <div onClick={()=> setShowProfileOptions(!showProfileOptions)} id='profile-menu'>
                <img width='40'  height='40' src='female.png' alt='Avatar'/>
                <p>Mayen Akpan</p>
                <FontAwesomeIcon icon='caret-down' className='fa-icon' />
                
                {
                    showProfileOptions && 
                    <div id='profile-options'>
                    <p onClick={() => setShowProfileModal(true)}>Update profile</p>
                    <p>Logout</p>
                </div>
                }
            
            {
                showProfileModal &&
                <Modal click={() => setShowProfileModal(false)}>
                    <Fragment key='header'>
                        <h3 className='m-0'>Update profile</h3>
                    </Fragment>
                    <Fragment key='body'>
                    <form>
                                <div className='input-field mb-1'>
                                    <input
                                        onChange={e => setFirstName(e.target.value)}
                                        value={''}
                                        required='required'
                                        type='text'
                                        placeholder='First name' />
                                </div>

                                <div className='input-field mb-1'>
                                    <input
                                        onChange={e => setLastName(e.target.value)}
                                        value={''}
                                        required='required'
                                        type='text'
                                        placeholder='Last name' />
                                </div>

                                <div className='input-field mb-1'>
                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        value={''}
                                        required='required'
                                        type='text'
                                        placeholder='Email' />
                                </div>

                                <div className='input-field mb-1'>
                                    <select
                                        onChange={e => setGender(e.target.value)}
                                        value={''}
                                        required='required'
                                    >
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                    </select>
                                </div>

                                <div className='input-field mb-2'>
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        value={''}
                                        required='required'
                                        type='password'
                                        placeholder='Password' />
                                </div>

                                <div className='input-field mb-2'>
                                    <input
                                        onChange={e => setAvatar(e.target.files[0])}
                                        type='file' />
                                </div>
                            </form>
                    </Fragment>
                    <Fragment key='footer'>
                    <button className='btn-success' onClick={submitForm}>UPDATE</button>
                    </Fragment>
                </Modal>
            }
            </div>
        </div>
    )
}

export default Navbar;