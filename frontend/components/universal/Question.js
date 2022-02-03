import React from 'react';
import styles from "../../styles/components/Components.module.css"

function Question() {
    return (
        <div className={styles.questionSection}>
            <span className={styles.questionForm}>
                <input type="text" placeholder="КАКИЕ ФОРСУНКИ ДОЛЖНЫ БЫТЬ В ВАШЕМ РЕГИОНЕ, ГОРОДЕ, НАСЕЛЕННОМ ПУНКТЕ?"/>
                <button>ОТПРАВИТЬ</button>
            </span>
        </div>
    )
}

export default Question;