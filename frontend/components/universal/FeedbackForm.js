import styles from '../../styles/components/FeedBackForm.module.css';
import useOnClickOutside from 'use-onclickoutside';
import { useEffect, useRef, useState } from 'react';

function UserInfo(props) {

    function updateInner(event) {
        props.updater(event.target.value);
    }

    return (
        <>
            <p className={styles.userData}>{props.criteria}</p>
            <input onInput={updateInner} type="text" placeholder={props.placeholder} className={styles.userDataInput}/>
        </>
    )
}


export default function FeedbackForm(props) {

    const formRef = useRef(null);
    const [content, setContent] = useState('');
    const [fio, setFio] = useState('');
    const [organization, setOrganization] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [forPartnership, setForPartnership] = useState('');
    const contentRef = useRef(null);

    useOnClickOutside(formRef, () => {
        props.close? props.close() : null
    });

    function updateQuestion(event) {
        setContent(event.target.value);
        if (props.updater) {
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
        <div id="feedback" className={styles.feedbackSection}>
            <div ref={formRef} className={styles.feedback}>
                <img className={styles.pattern} src="images/feedbackBackground.svg" alt="" />
                <div className={styles.formHeader}>
                    <p className={styles.formTitle}>
                        <span>
                            <span style={{color: '#F46628'}}>СВЯЗАТЬСЯ</span> С ПРЕДСТАВИТЕЛЕМ БРЕНДА
                        </span>
                        {props.close && <img onClick={props.close} className={styles.closeicon} src="/icons/close_modal.svg"/>}
                    </p>
                    <p className={styles.formPS}>Напишите нам, заполнив форму ниже</p>
                    <p className={styles.formPS}>*** Для того, чтобы стать нашим партнером и представителем DS в Вашем регионе в нижеуказанной форме заполните раздел &quot;Для сотрудничества&quot;</p>
                </div>
                <div className={styles.messageForms}>
                    <span className={styles.userInfoForm}>
                        <UserInfo updater={setFio} value={fio} criteria="ФИО*" placeholder="Иванов Иван Иванович"/>
                        <UserInfo updater={setOrganization} value={organization} criteria="Наименование организации*" placeholder="ООО «ДиЭс-Трейд»"/>
                        <UserInfo updater={setEmail} value={email} criteria="E-mail*" placeholder="sale@ds.parts.com"/>
                        <UserInfo updater={setCity} value={city} criteria="Город/населенный пункт" placeholder="г. Благовещенск"/>
                    </span>
                    <span style={{width: 591 + "px"}}>
                        <span className={styles.messageForm}>
                            <p className={styles.userData}>Введите сообщение*</p>
                            <textarea onInput={updateQuestion} ref={contentRef} value={content} placeholder="Введите интересующий вопрос..."/>
                        </span>
                        <UserInfo updater={setForPartnership} value={forPartnership} criteria="***Для сотрудничества" placeholder="Стать партнером"/>
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
