import React, { useState } from 'react';
import styles from "../../styles/components/Components.module.css"
import QuestionFormModal from './QuestionFormModal';

function Question() {

    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState('');

    function handleInput(event) {
        console.log(`CONTENT -> ${event.target.value}`)
        setValue(event.target.value);
        setShowForm(true);
    }

    function closeForm() {
        setShowForm(false);
    }

    return (
        <div className={styles.questionSection}>
            <span className={styles.questionForm}>
                <input
                    onInput={handleInput}
                    value={value}
                    type="text"
                    placeholder="КАКИЕ ФОРСУНКИ ДОЛЖНЫ БЫТЬ В ВАШЕМ РЕГИОНЕ, ГОРОДЕ, НАСЕЛЕННОМ ПУНКТЕ?"
                />
                <button>ВАШ ВОПРОС</button>
            </span>
            <QuestionFormModal updater={handleInput} content={value} close={closeForm} isVisible={showForm}/>
        </div>
    )
}

export default Question;