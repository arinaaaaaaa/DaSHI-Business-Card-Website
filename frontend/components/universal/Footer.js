import React from 'react';
import styles from "../../styles/components/Footer.module.css";

function CompanyInfo() {
    return (
        <span>
            <a href="/" className={styles.logo}><img src="icons/LogoIcon.svg" alt="Logo" /></a>
            <p className={styles.companyInfo}>© 2004—2021 ООО «Da Shi».<br/>Продукция сертифицирована.<br/>Копирование изделий запрещено. </p>
        </span>
    )
}

function Navigation() {
    return (
        <span>
            <div className = {styles.linksSection}>
                <a href="#">КОНТАКТЫ</a>
                <a href="#">ПРОДУКЦИЯ DaSHI</a>
                <a href="#">ПАРТНЕРАМ</a>
                <a href="#">НАПИШИТЕ НАМ</a>
                <a href="#">ПОКУПАТЕЛЯМ</a>
                <a href="#">О DaSHI</a>
            </div>
            <div className = {styles.productsDS}>
                <p className = {styles.partnersNote}><span style={{color: '#F46628'}}>ПРОДУКЦИЯ DS</span>, ПРЕДСТАВЛЕННАЯ<br/>ПАРТНЕРАМИ НА</p>
                <span className = {styles.partnersLogo}>
                    <img src="/icons/ozonLogo.svg" alt="ozon" />
                    <img src="/icons/wbLogo.svg" alt="wildberries" />
                </span>
            </div>
        </span>
    )
}

function Footer() {
    return (
        <footer className={styles.footerSection}>
            <CompanyInfo/>
            <Navigation/>
        </footer>
    )
}

export default Footer;