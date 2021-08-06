import React from 'react';
import Navbar from '@components/Navbar';
import styles from './layout.module.css'

const Layout: React.FC = ({children})=>{
    return(
        <div className={styles['text-container'] + ' container'}>
            <Navbar/>
            {children}
            <footer className="footer-text">
                this is the footer
            </footer>
            <style jsx>{`
              .footer-text {
                background: aqua;
              }
            `}</style>
        </div>
    )
}

export default Layout