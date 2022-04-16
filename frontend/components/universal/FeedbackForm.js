import styles from '../../styles/components/FeedBackForm.module.css';
import useOnClickOutside from 'use-onclickoutside';
import { useEffect, useRef, useState } from 'react';
import { update } from 'react-spring';

function UserInfo(props) {
    return (
        <>
            <p className={styles.userData}>{props.criteria}</p>
            <input type="text" placeholder={props.placeholder} className={styles.userDataInput}/>
        </>
    )
}


export default function FeedbackForm(props) {

    const formRef = useRef(null);
    const [content, setContent] = useState('');
    const contentRef = useRef(null);

    useOnClickOutside(formRef, () => {
        props.close? props.close() : null
    });

    function updateQuestion(event) {
        setContent(event.target.value);
        if (props.updater) {
            console.log('ENTERED');
            props.updater(event);
        }
    }

    useEffect(() => {
        if (props.content != undefined) {
            contentRef.current.focus();
            setContent(props.content);
        }
    }, []);

    return (
        <div className={styles.feedbackSection}>
            <div ref={formRef} className={styles.feedback}>
                <img src="images/feedbackBackground.svg" alt="" />
                <div className={styles.formHeader}>
                    <p className={styles.formTitle}><span style={{color: '#F46628'}}>СВЯЗАТЬСЯ</span> С ПРЕДСТАВИТЕЛЕМ БРЕНДА</p>
                    <p className={styles.formPS}>Напишите нам, заполнив форму ниже</p>
                    <p className={styles.formPS}>*** Для того, чтобы стать нашим партнером и представителем DS в Вашем регионе в нижеуказанной форме заполните раздел &quot;Для сотрудничества&quot;</p>
                </div>
                <div className={styles.messageForms}>
                    <span className={styles.userInfoForm}>
                        <UserInfo criteria="ФИО*" placeholder="Иванов Иван Иванович"/>
                        <UserInfo criteria="Наименование организации*" placeholder="ООО «ДиЭс-Трейд»"/>
                        <UserInfo criteria="E-mail*" placeholder="sale@ds.parts.com"/>
                        <UserInfo criteria="Город/населенный пункт" placeholder="г. Благовещенск"/>
                    </span>
                    <span style={{width: 591 + "px"}}>
                        <span className={styles.messageForm}>
                            <p className={styles.userData}>Введите сообщение*</p>
                            <textarea onInput={updateQuestion} ref={contentRef} value={content} placeholder="Введите интересующий вопрос..."/>
                        </span>
                        <UserInfo criteria="***Для сотрудничества" placeholder="Стать партнером"/>
                    </span>
                </div>
                <div className={styles.toSend} id="feedback">
                    <button type="submit">Отправить</button>
                    <input className={styles.agree} type="checkbox" /><span className={styles.agreesment}>Отправляя данную форму, я даю свое согласие на оработку своих персональных данных</span>
                </div>
            </div>
        </div>
    )
}
