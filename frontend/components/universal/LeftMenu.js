import React from 'react';
import styles from "../../styles/components/Components.module.css";

function Menu(props) {
    let menuType = 0
    if (props.page == 'partners') menuType = 1
    else if (props.page == 'buyers') menuType = 2

    return (
        <span>
            <div className = {styles.linksSection}>
                {menuType == 0 ?
                    <>
                        <a href="#">Стать партнером DS</a>
                        <a href="#">Запчасти DS в наличии<img src="icons/help.svg" alt="" /></a> 
                    </>
                : menuType == 1 ?
                    <a href="#">Склады DS в России и других странах</a>
                : menuType == 2 ?
                    <>
                        <a href="#">Стать партнером DS</a>
                        <a href="#">Пакет "DS+"</a>
                        <a href="#" style={{marginTop: 20 + 'px'}}>Упаковка DS</a>
                    </>
                : "" }
            </div>
            <div className = {styles.feedbackSection}>
                <div className={styles.imgLinks}>
                    <a href="#"><img src="icons/world.png" alt="" /></a>
                    <a href="#"><img src="icons/headset.svg" alt="" /></a>
                    <a href="#"><img src="icons/phone.svg" alt="" /></a>
                    <a href="#"><img src="icons/mail.svg" alt="" /></a>
                </div>
                <a href="#" className={styles.feedbackLink}>Форма обратной связи</a>
            </div>
        </span>
    )
}

export default Menu;