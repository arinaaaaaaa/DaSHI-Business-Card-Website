import React from 'react';
import Link from 'next/link';
import styles from "../../styles/components/Footer.module.css";

function CompanyInfo() {
    return (
        <span>
            <Link href="/"><a className={styles.logo}><img src="icons/LogoIcon.svg" alt="Logo" /></a></Link>
            <p className={styles.companyInfo}>© 2004—2021 ООО «Da Shi».<br/>Продукция сертифицирована.<br/>Копирование изделий запрещено. </p>
        </span>
    )
}

function Navigation() {
    return (
        <span>
            <div className = {styles.linksSection}>
                <Link href="/contacts"><a>КОНТАКТЫ</a></Link>
                <Link href="/products"><a>ПРОДУКЦИЯ DaSHI</a></Link>
                <Link href="/partners"><a>ПАРТНЕРАМ</a></Link>
                <Link href="/contacts#feedback"><a>НАПИШИТЕ НАМ</a></Link>
                <Link href="/buyers"><a>ПОКУПАТЕЛЯМ</a></Link>
                <Link href="/about"><a>О DaSHI</a></Link>
            </div>
            <div className = {styles.productsDS}>
                <p className = {styles.partnersNote}><span style={{color: '#F46628'}}>ПРОДУКЦИЯ DS</span>, ПРЕДСТАВЛЕННАЯ<br/>ПАРТНЕРАМИ НА</p>
                <span className = {styles.partnersLogo}>
                    <img src="/images/ozonLogo.png" alt="ozon" style={{height:31 + "px"}}/>
                    <img src="/images/wbLogo.png" alt="wildberries" style={{height: 47 + "px"}}/>
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