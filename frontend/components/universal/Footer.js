import React from 'react';
import Link from 'next/link';
import { HeaderLink } from './Header';
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
                <HeaderLink reference="/contacts" name="КОНТАКТЫ"/>
                <HeaderLink reference="/products" name="ПРОДУКЦИЯ DaSHI"/>
                <HeaderLink reference="/partners" name="ПАРТНЕРАМ"/>
                <Link  href="/contacts#feedback"><a className="underlined_link">НАПИШИТЕ НАМ</a></Link>
                <HeaderLink reference="/buyers" name="ПОКУПАТЕЛЯМ"/>
                <HeaderLink reference="/about" name="О DaSHI"/>
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