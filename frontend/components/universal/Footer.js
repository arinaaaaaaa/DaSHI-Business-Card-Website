import React from 'react';
import Link from 'next/link';
import styles from "../../styles/components/Footer.module.css";

function CompanyInfo() {
    return (
        <span>
            <Link href="/"><a className={styles.logo}><img src="icons/LogoIcon.svg" alt="Logo" /></a></Link>
            <p className={styles.companyInfo}>© 2019-2022 ООО «Da SHI».<br/>Продукция сертифицирована.<br/>Копирование изделий запрещено. </p>
        </span>
    )
}

function Navigation() {
    return (
        <span>
            <div className = {styles.linksSection}>
                <Link  href="/contacts"><a className="underlined_link">КОНТАКТЫ</a></Link>
                <Link  href="/products"><a className="underlined_link">ПРОДУКЦИЯ DaSHI</a></Link>
                <Link  href="/partners"><a className="underlined_link">ПАРТНЕРАМ</a></Link>
                <Link  href="/contacts#feedback"><a className="underlined_link">НАПИШИТЕ НАМ</a></Link>
                <Link  href="/buyers"><a className="underlined_link">ПОКУПАТЕЛЯМ</a></Link>
                <Link  href="/about"><a className="underlined_link">О DaSHI</a></Link>
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
        <footer id={styles.footerBox}>
            <div className={styles.footerSection}>
                <CompanyInfo/>
                <Navigation/>
            </div>
        </footer>
    )
}

export default Footer;