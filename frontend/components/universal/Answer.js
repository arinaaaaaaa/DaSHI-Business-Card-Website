import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from "../../styles/components/Answer.module.css";

function AnswerList(props) {
    let listAnswer = props.list
    return (
        <>
            {listAnswer.map(item => (
                <div className={ props.styleClass != 'about' ? styles.listItem : `${styles.listItem} ${styles.listItemAbout}`}>
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
            {listAnswer.map(item => (
                <div className={styles.listItem}>
                    <img src="icons/fileMarker.svg" alt="" />
                    <a href={item[0]}>{item[1]}</a>
                </div>
            ))}
        </>
    )
}

function Answer(props) {

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
        <div className={styles.answer} style = {isOpen ? {border: 0 + "px"} : null}>
            <div className={styles.questionSection} style = {props.long == "yes" ? {boxSizing: 'border-box', paddingTop: 10+"px"} : null}>
                {props.question}
                <animated.img style={arrowRotate} src="icons/showAnswer.svg" alt="" onClick={() => startAnimation()}/>
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