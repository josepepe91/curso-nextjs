import React from 'react';
import Navbar from '@components/Navbar';
import styles from './layout.module.css'

const Layout: React.FC = ({children})=>{
    return(
        <div className={styles['text-container'] + ' container'}>
            <Navbar/>
            {children}
            <footer>
                this is the footer
            </footer>
        </div>
    )
}

export default Layout