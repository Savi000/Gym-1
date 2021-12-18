import React from 'react'
import { motion } from 'framer-motion'
import classes from '../styles/Modal.module.scss';

const Backdrop = ({ children, closeModal }) => {
    return (
        <motion.div onClick={closeModal} className={classes.backdrop} >
            {/* {children} */}
        </motion.div>
    )
}

export default Backdrop
