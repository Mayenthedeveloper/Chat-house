import React, {useState, Fragment} from 'react';
import './Navbar.scss'
import Modal from '../../../Modal/Modal'
// import { useSelector } from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Navbar(){

    const [showProfileOptions, setShowProfileOptions] = useState(false)

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
                    <p>Update profile</p>
                    <p>Logout</p>
                </div>
                }
            
            {
                <Modal>
                    <Fragment>
                        
                    </Fragment>
                </Modal>
            }
            </div>
        </div>
    )
}

export default Navbar;