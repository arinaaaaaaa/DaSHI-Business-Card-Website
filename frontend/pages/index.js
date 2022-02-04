import Header from "../components/universal/Header.js";
import Footer from "../components/universal/Footer.js";
import Question from "../components/universal/Question.js";
import Menu from "../components/universal/LeftMenu.js"
import styles from "../styles/MainPage.module.css";

function BigNews() {
  return (
      <div className={styles.bannerSection}>
        <div className={styles.bigNewsSection}>
          <span className={styles.titleSection}>
            <img src="icons/accessory.svg" alt="" />
            <p>ФОРСУНКИ И КОМПЛЕКТУЮЩИЕ<br/><span style={{color: '#F46628'}}>KAMAZ/YAMZ</span></p>
          </span>
          <span className={styles.top}>
            <img src="icons/quality.svg" alt="" />
            <p>Топ продаж в России 2021</p>
          </span>
        </div>
      </div>
  )
}
function DSService() {
  return (
    <div className={styles.DSService}>
      <div className={styles.sectionTitle}><span style={{color: '#F46628'}}>DS </span>СЕРВИС</div>
      <div className={styles.buyersInfo}>
        <span className={styles.buyers}>
          <a href="#">Сокращаем сроки <img src="icons/time.svg" alt="" /></a>
          <p>Экспресс доставка форсунок DS<br/>и комплектующих</p>
        </span>
        <span className={styles.buyers}>
          <a href="#">Упрощаем работу <img src="icons/check.svg" alt="" /></a>
          <p>Экспресс диагностика<br/>форсунок</p>
        </span>
      </div>
    </div>
  )
}
function SmallNews(props) {
  return (
      <span className={styles.smallNews}>
        <p className={styles.newsTitle}>{props.title}<span style ={{color: '#F46628'}}>{props.special}</span></p>
        <img src="icons/help.svg" alt="" />
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
              <SmallNews title="ЗАМЕНА ВЫШЕДШИХ ИЗ СТРОЯ ФОРСУНОК DS - E2 - " special="ВЫГОДА ДО 30%"/>
              <SmallNews title="КОНТРОЛЬ КАЧЕСТВА " special="ПРОДУКЦИИ DS"/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MainPage;