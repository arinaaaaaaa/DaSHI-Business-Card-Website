import React, { useState } from 'react';
import Link from 'next/link';
import Switch from "react-switch";
import styles from "../../styles/components/Header.module.css";

function HeaderLinks() {
    return (
        <div className = {styles.linksSection}>
            <Link href="/products"><a className={`${styles.linkItem} underlined_link`}>ПРОДУКЦИЯ DaSHI</a></Link>
            <Link href="/buyers"><a className = {`${styles.linkItem} underlined_link`}>ПОКУПАТЕЛЯМ</a></Link>
            <Link href="/partners"><a className = {`${styles.linkItem} underlined_link`}>ПАРТНЕРАМ</a></Link>
            <Link href="/about"><a className = {`${styles.linkItem} underlined_link`}>О DaSHI</a></Link>
            <Link href="/news"><a className = {`${styles.linkItem} underlined_link`}>НОВОСТИ</a></Link>
        </div>
    )
}

function LanguageSwitch() {
    
    const [checked, setChecked] = useState(false);

    return (
        <>
            <div className={styles.languageSwitcher}>
                <span className = {!checked? `${styles.language} ${styles.active}` : styles.language}>RU</span>
                <Switch 
                    checked = {checked}
                    onChange = {() => setChecked(!checked)}
                    onColor="#f46628"
                    offColor = "#f46628"
                    onHandleColor="#fff"
                    handleDiameter={16}
                    width = {41}
                    height = {22}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    className = {styles.switcher}
                    activeBoxShadow = "0"
                />
                <span className = {checked? `${styles.language} ${styles.active}` : styles.language}>EN</span>
            </div>
        </>
    )
}

function Header() {
    return (
        <div className = {styles.headerNavigation}>
            <Link href="/">
                <a className = {styles.logo}>
                    <img src="/icons/LogoIcon.svg" alt="" />
                </a>
            </Link>
            <HeaderLinks/>
            <div className={styles.contactsLink}><Link href="/contacts"><a className='underlined_link'>КОНТАКТЫ</a></Link></div>
            
        </div>
    )
}

export default Header;