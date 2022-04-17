import React, { useState } from 'react';
import Link from 'next/link';
import Switch from "react-switch";
import styles from "../../styles/components/Header.module.css";

import { useRouter } from 'next/router';

export function HeaderLink(props) {
    const router = useRouter();

    const [active, setActive] = useState(router.asPath.match(props.reference));

    return (
        <Link href={props.reference}>
            <a 
                className={`${styles.linkItem} ${active ? "" : "underlined_link"}`}
                style={{
                    color: active ? "#F46628" : "#2B1A51"
                }}
            >
                {props.name}
            </a>
        </Link>
    )
}

function HeaderLinks() {

    return (
        <div className = {styles.linksSection}>
            <HeaderLink reference="/products" name="ПРОДУКЦИЯ DaSHI"/>
            <HeaderLink reference="/buyers" name="ПОКУПАТЕЛЯМ"/>
            <HeaderLink reference="/partners" name="ПАРТНЕРАМ"/>
            <HeaderLink reference="/about" name="О DaSHI"/>
            <HeaderLink reference="/news" name="НОВОСТИ"/>
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
            <div className={styles.contactsLink}>
            <HeaderLink reference="/contacts" name="КОНТАКТЫ"/>
            </div>
            
        </div>
    )
}

export default Header;