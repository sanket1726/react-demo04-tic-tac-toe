import React from 'react'
import {FaTimes, FaPen, FaRegCircle, Fa500Px, FaAccessibleIcon, FaAmazon, FaGoogle, FaCcDiscover, FaCircle} from 'react-icons/fa'

const Icon = ({name}) => {
    switch (name) {
        case 'circle':
            return  <FaCircle className="icon" /> 

        case 'cross':
            return(
                <FaTimes className="icon" /> 
            )

        default:
            return <FaPen className="icon" />
    }
}

export default Icon;