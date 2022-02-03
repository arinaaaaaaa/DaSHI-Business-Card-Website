import React, { useState } from 'react';
import Switch from "react-switch";
import styles from "../../styles/components/Header.module.css";

function HeaderLinks() {
    return (
        <div className = {styles.linksSection}>
            <a href="#" className = {styles.linkItem}>ПРОДУКЦИЯ DaSHI</a>
            <a href="#" className = {styles.linkItem}>ПОКУПАТЕЛЯМ</a>
            <a href="#" className = {styles.linkItem}>ПАРТНЕРАМ</a>
            <a href="#" className = {styles.linkItem}>О DaSHI</a>
        </div>
    )
}

function LanguageSwitch() {
    
    const [checked, setChecked] = useState(0);

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
            <a href="/" className = {styles.logo}>
                <img src="/icons/LogoIcon.svg" alt="" />
            </a>
            <HeaderLinks/>
            <div className={styles.contactsLink}><a href="#">КОНТАКТЫ</a></div>
            <LanguageSwitch/>
        </div>
    )
}

export default Header;