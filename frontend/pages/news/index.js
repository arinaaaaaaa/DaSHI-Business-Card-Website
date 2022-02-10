import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import styles from "../../styles/News.module.css";

function Banner() {
    return (
        <div className={styles.bannerSection}>
            <div className={styles.news}>
                <p className={styles.title}><span style={{color: '#F46628'}}>АКТУАЛЬНЫЕ</span> СОБЫТИЯ<br/>И ПРЕДЛОЖЕНИЯ</p>
                <img src="images/news.svg" alt="" />
            </div>
            <div className={styles.subTitle}>НОВОСТИ DS</div>
        </div>
    )
}

function NewsItem(props) {

    const[fullNew, changeNewsStyle] = useState(false);
    const [doContinue, setDoContinue] = useState(false);
    const [doReverse, setDoReverse] = useState(false);

    const arrowRotate = useSpring({
        cancel: !doContinue,
        from: {
            transform: 'rotate(0deg)'
        },
        to: {
            transform: 'rotate(-180deg)'
        },
        reverse: doReverse,
        config: {duration: 150},
        onStart: () => {
            changeNewsStyle(!fullNew);
        },
        onRest: () => {
            setDoContinue(false);
        }
    });

    function startAnimation() {
        if (!doContinue) {
            setDoReverse(fullNew); 
            setDoContinue(true);
        }
    }

    return (
        <span className={styles.newsItem}>
            <span className={styles.newsImage}>
                <img src={props.icon} alt="" />
                <img className={styles.maskImg} src="images/maskNews.svg" alt="" />
            </span>
            <div className={styles.newsWrapper}>
                <span className={styles.information}>
                    <span className={styles.infoTopic}>
                        <p className={styles.newsTitle}>{props.title}</p>
                        {!fullNew ? 
                            <p className={styles.shortPart}>{props.shortPart}</p> :
                            <p className={styles.newsTopic}>{props.newsTopic}</p>
                        }
                    </span>
                    <button className={styles.showMore} onClick={() => startAnimation()}>
                        {!fullNew ? "Читать полностью" : "Скрыть новость"}
                        <animated.img src="icons/showAnswer.svg" alt="" style={arrowRotate}/>
                    </button>
                </span>
            </div>
        </span>
    )
}

function NewsList() {
    return (
        <div className={styles.newsSection}>
            <div className={styles.searchSection}>
                <select className={styles.filter} size="1">
                    <option value="" selected>Выберите из списка</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                </select>
                <span className={styles.search}>
                    <input type="text" placeholder="Ключевое слово для поиска"/>
                    <button><img src="icons/search.svg" alt="" /></button>
                </span>
            </div>
            <div className={styles.newsList}>
                <NewsItem icon="images/news1.svg"
                    title="Форсунки и комплектующие KAMAZ, YAMZ – топ продаж (хит продаж) в России в 2021г"
                    shortPart="Форсунки для КамАЗ и ЯМЗ по итогам продаж в 2021 году стали одними из наиболее 
                    популярных и востребованных. Современная конструкция этих форсунок позволяет обеспечивать 
                    не только простое техобслуживание, но и экономичность расхода топлива..."
                    newsTopic="Форсунки для КамАЗ и ЯМЗ по итогам продаж в 2021 году стали одними из наиболее 
                    популярных и востребованных. Современная конструкция этих форсунок позволяет обеспечивать 
                    не только простое техобслуживание, но и экономичность расхода топлива...Форсунки для КамАЗ 
                    и ЯМЗ по итогам продаж в 2021 году стали одними из наиболее популярных и востребованных. 
                    Современная конструкция этих форсунок позволяет обеспечивать не только простое техобслуживание, 
                    но и экономичность расхода топлива...Форсунки для КамАЗ и ЯМЗ по итогам продаж в 2021 году стали 
                    одними из наиболее популярных и востребованных. Современная конструкция этих форсунок позволяет 
                    обеспечивать не только простое техобслуживание, но и экономичность расхода топлива..."
                />
                <NewsItem icon="images/news2.svg"
                    title="Сервис DS. Замена б/у и неисправных форсунок DS Евро 2 на новые – выгода до 30%"
                    shortPart="Мы предлагаем вам возможность заменить вышедшую из строя форсунку DS Евро 2 на новую форсунку DS с таким же номером. При этом вы получите значительную скидку.
                    Как это сделать..."
                    newsTopic="Мы предлагаем вам возможность заменить вышедшую из строя форсунку DS Евро 2 на новую форсунку DS с таким же номером. При этом вы получите значительную скидку. 
                    Как это сделать...Мы предлагаем вам возможность заменить вышедшую из строя форсунку DS Евро 2 на новую форсунку DS с таким же номером. При этом вы получите значительную скидку. 
                    Как это сделать...Мы предлагаем вам возможность заменить вышедшую из строя форсунку DS Евро 2 на новую форсунку DS с таким же номером. При этом вы получите значительную скидку. 
                    Как это сделать..."
                />
            </div>
            <button className={styles.showAllNews}>Смотреть все</button>
        </div>
    )
}

function News() {
    return (
        <>
            <Header/>
            <Banner/>
            <div className={styles.wrapper}>
                <NewsList/>
            </div>
            <Footer/>
        </>
    )
}

export default News;