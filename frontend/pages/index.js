import React, { useEffect, useState } from 'react';
import Header from "../components/universal/Header.js";
import Footer from "../components/universal/Footer.js";
import Question from "../components/universal/Question.js";
import Menu from "../components/universal/LeftMenu.js"
import styles from "../styles/MainPage.module.css";
import axios from 'axios';

function BigNews() {
  const [bannerInfo, setBannerInfo] = useState(null);

  function getBanner() {
    axios('http://localhost:8000/news/banner/', { withCredentials: true })
    .then((response) => { 
        setBannerInfo(response.data)
    })
  }
  useEffect(() => {getBanner()}, [])

  if (bannerInfo != null) {
    return (
        <div className={styles.bannerSection}>
          <div className={styles.bigNewsSection}>
            <span className={styles.titleSection}>
              <img src={"http://localhost:8000" + bannerInfo.titleIcon} alt="" style={{width: 34 +"px", height: 44 +"px"}}/>
              <a className={styles.newsTitleBanner} href="http://localhost:3000/news">{bannerInfo.title}<br/><span style={{color: '#F46628'}}>{bannerInfo.special}</span></a>
            </span>
            <span className={styles.top}>
              <img src={"http://localhost:8000" + bannerInfo.subtitleIcon} alt="" style={{width: 25 +"px", height: 25 +"px"}}/>
              <p>{bannerInfo.subtitle}</p>
            </span>
          </div>
        </div>
    )
  }
  else return null;
}
function DSService() {
  return (
    <div className={styles.DSService}>
      <div className={styles.sectionTitle}><span style={{color: '#F46628'}}>DS </span>СЕРВИС</div>
      <div className={styles.buyersInfo}>
        <span className={styles.buyers}>
        <span  class="tooltip">
          <span style={{display: "flex"}} className={styles.buyersTitle}>
            Сокращаем сроки 
            <img src="icons/time.svg" alt="" style={{marginLeft: 10+"px"}}/>
          </span>
          <span class="promt">
            <p>В случае возникновения экстренной ситуации или детали необходимы срочно, вы можете обратиться для заказа экспресс-доставки. <a href="http://localhost:3000/buyers">Подробнее</a></p>
          </span>
        </span>
          <p className={styles.buyersText}>Экспресс доставка форсунок DS<br/>и комплектующих</p>
        </span>
        <span className={styles.buyers}>
        <span  class="tooltip">
          <span style={{display: "flex"}} className={styles.buyersTitle}>
            Упрощаем работу 
            <img src="icons/check.svg" alt="" style={{marginLeft: 10+"px"}}/>
          </span>
          <span class="promt">
            <p>В случае возникновения неисправности форсунки бренда DS, завод предлагает возможность провести экспресс-диагностику детали на оборудовании DS со скидкой до 50%. <a href="http://localhost:3000/buyers">Подробнее</a></p>
          </span>
        </span>
          <p className={styles.buyersText}>Экспресс диагностика<br/>форсунок</p>
        </span>
      </div>
    </div>
  )
}
function SmallNews(props) {
  return (
      <span className={styles.smallNews}>
        <p className={styles.newsTitle}>{props.title}<span style ={{color: '#F46628'}}>{props.special}</span></p>
        <span  class="tooltip">
          <img src="icons/help.svg" alt="" />
          <span class="promt">
            {props.promt}
            {props.link != null ? <a href={props.link}>Подробнее</a> : null}
          </span>
        </span>
      </span>
  )
}

function MainPage() {
  return (
    <>
      <Header/>
      <Question/>
      <div className="contentSection">
        <div className="content">
          <Menu page='main'/>
          <div className={styles.banner}>
            <BigNews/>
            <DSService/>
            <div className={styles.smallNewsSection}>
              <SmallNews
                title="ЗАМЕНА ВЫШЕДШИХ ИЗ СТРОЯ ФОРСУНОК DS - E2 - "
                special="ВЫГОДА ДО 30%"
                promt="Мы предлагаем возможность заменить вышедшую из строя форсунку DS Евро 2, на новую со значительной скидкой. "
                link = "http://localhost:3000/news"
              />
              <SmallNews
                title="КОНТРОЛЬ КАЧЕСТВА "
                special="ПРОДУКЦИИ DS"
                promt = "Проверить подлинность продукции DS вы можете на сайте официальных представителей в разделе «Проверка подлинности DS / Контроль качества DS». "
                link="http://localhost:3000/buyers#quelityControl"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MainPage;