import React from 'react';
import Link from 'next/link';
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
                        <Link href="/partners"><a className='underlined_link'>Стать партнером DS</a></Link>
                        <a><span>Запчасти DS в наличии</span>
                            <span  className="tooltip">
                                <span className="tooltipIcon dark" style={{marginLeft: 11 + "px"}}>?</span>
                                <span className="promt">
                                    На сайтах наших партнеров и представителей DS в разделе «Продукция DaSHI» вы сможете
                                    проследить путь каждой детали – запуск в производство («На заводе»), срок поставки и
                                    местонахождение («В пути»), размещение на складе в России («В наличии»).
                                </span>
                            </span>
                        </a>
                    </>
                : menuType == 1 ?
                    <Link href="/buyers"><a className="underlined_link">Склады DS в России и других странах</a></Link>
                : menuType == 2 ?
                    <>
                        <Link href="/partners"><a className="underlined_link">Стать партнером DS</a></Link>
                        <Link href="/partners"><a className="underlined_link">Пакет &quot;DS+&quot;</a></Link>
                        <Link href="/"><a style={{marginTop: 20 + 'px'}} className="underlined_link">Упаковка DS</a></Link>
                    </>
                : "" }
            </div>
            <div id={styles.characterRect}></div>
            <div className = {styles.feedbackSection}>
                <div className={styles.imgLinks}>
                    <Link href="#"><a><img src="icons/world.svg" alt="" /></a></Link>
                    <Link href="#"><a><img src="icons/headset.svg" alt="" /></a></Link>
                    <Link href="#"><a><img src="icons/phone.svg" alt="" /></a></Link>
                    <Link href="#"><a><img src="icons/mail.svg" alt="" /></a></Link>
                </div>
                <Link href="#"><a className={`${styles.feedbackLink} underlined_link`}>Форма обратной связи</a></Link>
            </div>
        </span>
    )
}

export default Menu;