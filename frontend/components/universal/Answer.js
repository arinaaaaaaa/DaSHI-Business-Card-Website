import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import {useRouter} from "next/router";
import styles from "../../styles/components/Answer.module.css";

function AnswerList(props) {
    let listAnswer = props.list
    return (
        <>
            {listAnswer.map((item, index) => (
                <div key={index} className={ props.styleClass != 'about' ? styles.listItem : `${styles.listItem} ${styles.listItemAbout}`}>
                    <img src="icons/listMarker.svg" alt="" />
                    <p>{item}</p>
                </div>
            ))}
        </>
    )
}

function FileList(props) {
    let listAnswer = props.list
    return (
        <>
            {listAnswer.map((item, index) => (
                <div 
                    className={styles.listItem}
                    key={index}
                >
                    <img src="icons/fileMarker.svg" alt="" />
                    <a href={item[0]}>{item[1]}</a>
                </div>
            ))}
        </>
    )
}

function Answer(props) {

    const router = useRouter();

    const [isOpen, setOpen] = useState(router.asPath.includes(`#${props.question_id}`));
    const [doContinue, setDoContinue] = useState(false);
    const [doReverse, setDoReverse] = useState(router.asPath.includes(`#${props.question_id}`));


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
        <div id={props.question_id} className={styles.answer} style = {isOpen ? {border: 0 + "px"} : null}>
            <div className={styles.questionSection} style = {props.long == "yes" ? {boxSizing: 'border-box', paddingTop: 10+"px"} : null} onClick={() => startAnimation()}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <img 
                        src="/icons/listPoint.svg"
                        style={{marginLeft: "0", marginRight: "14px"}}
                    />{props.question}
                    </div>
                <animated.img style={arrowRotate} className="pointerOnHover" src="icons/showAnswer.svg" alt=""/>
            </div>
            {isOpen ?
                <div className={styles.answerSection} style = {props.long == "yes" ? {marginTop: 10+"px"} : null} >
                    {props.answer}
                </div>
            : ""}
        </div>
    )
}

export default Answer;
export { AnswerList, FileList };