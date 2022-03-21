import React from 'react';
import styles from "../../styles/components/Components.module.css";

function Menu(props) {
    let menuType = 0
    if (props.page == 'partners') menuType = 1
    else if (props.page == 'buyers') menuType = 2

    return (
        <span className={styles.menu}>
            <div className = {styles.linksSection}>
                {menuType == 0 ?
                    <>
                        <a href="#">Стать партнером DS</a>
                        <a href="#">Запчасти DS в наличии
                            <span  class="tooltip">
                                <span className="tooltipIcon dark" style={{marginLeft: 11 + "px"}}>?</span>
                                <span class="promt">
                                    На сайтах наших партнеров и представителей DS в разделе «Продукция DaSHI» вы сможете
                                    проследить путь каждой детали – запуск в производство («На заводе»), срок поставки и
                                    местонахождение («В пути»), размещение на складе в России («В наличии»).
                                </span>
                            </span>
                        </a>
                    </>
                : menuType == 1 ?
                    <a href="http://localhost:3000/buyers">Склады DS в России и других странах</a>
                : menuType == 2 ?
                    <>
                        <a href="http://localhost:3000/partners">Стать партнером DS</a>
                        <a href="http://localhost:3000/partners">Пакет "DS+"</a>
                        <a href="http://localhost:3000/guarantee" style={{marginTop: 20 + 'px'}}>Упаковка DS</a>
                    </>
                : "" }
            </div>
            <div className = {styles.feedbackSection}>
                <div className={styles.imgLinks}>
                    <a href="#"><img src="icons/world.svg" alt="" /></a>
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