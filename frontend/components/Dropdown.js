import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from '../styles/components/Dropdown.module.css'
import axios from 'axios';

export default function Dropdown({topic, setTopic}) {
    const [isOpen, setOpen] = useState(false)
    const [doContinue, setDoContinue] = useState(false);
    const [doReverse, setDoReverse] = useState(false);
    const [topicsList, setTopicsList] = useState(null);

    function getTopicsList() {
        axios('http://localhost:8000/news/topics/', { withCredentials: true })
        .then((response) => { 
            setTopicsList(response.data)
        })
    }

    useEffect(() => {getTopicsList()}, [])

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
    if (topicsList != null) {
        return (
            <div className={styles.dropdown}>
                <div className={styles.dropdownBtn} onClick={() => startAnimation()}>
                    {topic == "" ? 'Выберите тему' : topic.name}
                    <animated.img style={arrowRotate} src="icons/showAnswer.svg" alt=""/>
                </div>
                {isOpen ?
                    <div className={styles.dropdownContent}>
                        {(topicsList.sort()).map(item => (
                            <div className={styles.dropdownItem} 
                                onClick={() => {
                                    startAnimation()
                                    setTopic(item)}}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                : null}
            </div>
        )
    }
    return null
}