import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import styles from "../../styles/News.module.css";
import Dropdown from '../../components/Dropdown.js';
import axios from 'axios';

function Banner() {
    return (
        <div className={styles.bannerSection}>
            <div className={styles.news}>
                <p className={styles.title}><span style={{color: '#F46628'}}>АКТУАЛЬНЫЕ</span> СОБЫТИЯ<br/>И ПРЕДЛОЖЕНИЯ</p>
                <img src="images/news.png" alt="" />
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
                <img className={styles.maskImg} src="/images/maskNews.png" alt="" />
            </span>
            <div className={styles.newsWrapper}>
                <span className={styles.information}>
                    <span className={styles.infoTopic}>
                        <p className={styles.newsTitle}>{props.title}</p>
                        {   props.shortPart && !fullNew ? 
                                <p className={styles.shortPart}>{props.shortPart}</p> :
                            props.shortPart && fullNew ? 
                                <p className={styles.newsTopic}>{props.newsTopic}</p> :
                            !props.shortPart ?
                            <p className={styles.newsTopic}>{props.newsTopic}</p> : null
                        }
                    </span>
                    {props.shortPart ? 
                        <button className={`${styles.showMore} underlined_link`} onClick={() => startAnimation()}>
                            {!fullNew ? "Читать полностью" : "Скрыть новость"}
                            <animated.img src="/icons/showAnswer.svg" alt="" style={arrowRotate}/>
                        </button>
                    : null }
                </span>
            </div>
        </span>
    )
}

function NewsList() {
    const [topic, setTopic] = useState("");
    const [newsList, setNewsList] = useState(null);
    const [newsCount, setNewsCount] = useState(false);

    function getNewsList() {
        axios(`${process.env.api_hostname}/news/list/`, { withCredentials: true })
        .then((response) => { 
            setNewsList(response.data)
        })
    }

    useEffect(() => {getNewsList()}, [])

    function shortPart(fullText) {
        return fullText.slice(0,265) + "..."
    }

    if (newsList != null) {
        let newsArray = []
        if (topic == "") {
            if (newsCount == true) newsArray = newsList
            if (newsCount == false) newsArray = newsList.slice(0,3)
        }
        else if (topic != "") {
            if (newsCount == true) newsArray = newsList.filter(item => item.topics.includes(topic.id))
            if (newsCount == false) newsArray = newsList.filter(item => item.topics.includes(topic.id)).slice(0,3)
        }

        return (
            <div className={styles.newsSection}>
                <div className={styles.searchSection}>
                    <Dropdown topic = {topic} setTopic = {setTopic}/>
                    {topic != "" ?
                        <button className={styles.clear} onClick={() => setTopic("")}>
                            <img src="/icons/check.svg" alt="" />
                            СБРОСИТЬ
                        </button>
                    : null }
                </div>
                {newsArray.length != 0 ?
                    <div className={styles.newsList}>
                        {newsArray.map((item, index) =>
                            <NewsItem
                                icon={`${item.background}`}
                                key={index}
                                title={item.title}
                                newsTopic={item.content}
                                shortPart={(item.content).length > 268 ? shortPart(item.content) : null}
                            />
                        )}
                    </div>
                    : <p className={styles.noNews}>НОВОСТИ БУДУТ ЧУТЬ ПОЗЖЕ</p>
                }
                {(topic == "" && newsList.length > 3) || (topic != "" && newsList.filter(item => item.topics.includes(topic.id)).lenght > 3) ? 
                    <button className={styles.showAllNews} onClick={() => setNewsCount(!newsCount)}>
                        {!newsCount ? "Смотреть все" : "Скрыть новости"}
                    </button>
                : null}
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