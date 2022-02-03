import React from 'react';
import styles from "../../styles/components/Components.module.css";

function Menu() {
    return (
        <span>
            <div className = {styles.linksSection}>
                <a href="#">Стать партнером DS</a>
                <a href="#">Запчасти DS в наличии<img src="icons/help.svg" alt="" /></a>
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