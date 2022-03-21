import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import styles from "../../styles/Guarantee.module.css";

function Banner() {
    return (
        <div className={styles.bannerSection}>
            <div className={styles.guarantee}>
                <p className={styles.title}>ГАРАНТИЯ НА<br/>ПРОДУКЦИЮ<span style={{color: '#F46628'}}> DS</span></p>
                <img src="images/guarantee.png" alt="" />
            </div>
            <div className={styles.subTitle}>ГАРАНТИЯ</div>
        </div>
    )
}

function RuleItem(props) {

    const [isOpen, setOpen] = useState(false);
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
            setOpen(!isOpen);
        },
        onRest: () => {
            setDoContinue(false);
        }
    });

    function startAnimation() {
        if (!doContinue) {
            setDoReverse(isOpen); 
            setDoContinue(true);
        }
    }

    return (
        <div className={styles.ruleItem}>
            <div className={styles.ruleSection}>
                <p>{props.rule}</p>
                {props.description != null ? <animated.img style={arrowRotate} src="icons/showAnswer.svg" alt="" onClick={() => startAnimation()}/> : null}
            </div>
            {isOpen ?
                <div className={styles.descriptionSection} style = {props.long == "yes" ? {marginTop: 10+"px"} : null} >
                    {props.description}
                </div>
            : ""}
        </div>
    )
}

function Package(props) {
    return (
        <span className={styles.packageExample}>
            <img src="images/packageExample.svg" alt="" />
            <p>{props.description}</p>
        </span>
    )
}

function Rules() {
    return (
        <div className={styles.rulesSection}>
            <p className={styles.rules}>При обращении по гарантийному случаю или при оформлении претензии необходимо следовать определенным правилам:</p>
            <div className={styles.questionList}>
                <RuleItem rule="1. Подготовить следующие документы для рассмотрения гарантийного случая" description = {
                    <div className={styles.desc1}>
                        <ul className={styles.documentList}>
                            <li>акт рекламации по форме:
                                <p>- <a href="#">акт рекламации для распылителей и управляющих клапанов</a>;</p>
                                <p>- <a href="#">акт рекламации для инжекторов Common Rail и механических форсунок</a>;</p>
                            </li>
                            <li>накладную с указанием номера и даты составления, а также с подписью и печатью.</li>
                        </ul>
                    </div>
                }/>
                <RuleItem rule="2. При необходимости, по дополнительному запросу оперативно предоставить фото и видео продукции"/>
                <RuleItem rule="3. Товар при возврате следует упаковать должным образом – в случае отсутствия заводской упаковки 
                необходимо каждую деталь упаковать индивидуально: в бумагу, если речь идет о комплектующих, либо в бумагу и коробку, 
                если речь идет о форсунках, с целью избежания пересортицы либо дополнительных повреждений в процессе транспортировки."
                description = {
                    <div className={styles.packageSection}>
                        <Package description="Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой 
                        на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки."/>
                        <Package description="Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой 
                        на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки."/>
                        <Package description="Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой 
                        на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки."/>
                        <Package description="Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой 
                        на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки. Текст под картинкой на 3-4 строки."/>
                    </div>
                }/>
            </div>
        </div>
    )
}

function FeedbackItem(props) {
    return (
        <span className={styles.feedbackItem}>
            <img src={props.icon} alt="" />
            {props.description}
        </span>
    )
}

function Feedback() {
    return (
        <div className={styles.feedbackSection}>
            <img className={styles.background} src="images/feedbackBackground.svg" alt="" />
            <p>Отправить документы и уточнить дополнительную<br/>информацию можно следующим образом:</p>
            <div className={styles.feedbackList}>
                <FeedbackItem icon="icons/note.svg" description ={
                    <p>Заполнив <a href="#">форму обратной связи</a> с пометкой «гарантия»</p>
                }/>
                <FeedbackItem icon="icons/mail.svg" description ={
                    <p>Отправив письмо на электронный ящик <a href="#">ds@ds.parts.com</a></p>
                }/>
                <FeedbackItem icon="icons/shoppingBag.svg" description ={
                    <p>Связавшись с представителем – партнером DS, у которого приобретался товар</p>
                }/>
            </div>
        </div>
    )
}

function Guarantee() {
    return (
        <>
            <Header/>
            <Banner/>
            <div className={styles.wrapper}>
                <Rules/>
                <Feedback/>
            </div>
            <Footer/>
        </>
    )
}

export default Guarantee;