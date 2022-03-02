import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import styles from "../../styles/News.module.css";
import axios from 'axios';

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
                <img src={props.icon} style = {{height: 233 + "px", width: 386 + "px"}} alt="" />
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
    const [newsList, setNewsList] = useState(null)

    function getNewsList() {
        axios('http://localhost:8000/news/list/', { withCredentials: true })
        .then((response) => { 
            setNewsList(response.data)
        })
    }

    useEffect(() => {getNewsList()}, [])

    function shortPart(fullText) {
        return fullText.slice(0,300) + "..."
    }

    if (newsList != null) {
        return (
            <div className={styles.newsSection}>
                <div className={styles.searchSection}>
                    <select className={styles.filter} size="1">
                        <option selected>Выберите из списка</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <span className={styles.search}>
                        <input type="text" placeholder="Ключевое слово для поиска"/>
                        <button><img src="icons/search.svg" alt="" /></button>
                    </span>
                </div>
                <div className={styles.newsList}>
                    {newsList.map((item) =>
                        <NewsItem
                            icon={"http://localhost:8000" + item.background}
                            title={item.title}
                            newsTopic={item.content}
                            shortPart={shortPart(item.content)}
                        />
                    )}
                </div>
                <button className={styles.showAllNews}>Смотреть все</button>
            </div>
        )
    }
    return null
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