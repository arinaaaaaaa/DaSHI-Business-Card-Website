import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import styles from "../../styles/Contacts.module.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Banner() {
    return (
        <div className={styles.bannerSection}>
            <div className={styles.contacts}>
                <p className={styles.title}>НАШИ<br/><span style={{color: '#F46628'}}>КОНТАКТЫ</span></p>
                <img src="images/contactsImage.svg" alt="" />
            </div>
            <div className={styles.subTitle}>НАШИ КОНТАКТЫ</div>
        </div>
    )
}

function PartnerItem(props) {
    let nullableValues = 0;
    if (props.site == "") nullableValues += 1
    if (props.phone == "") nullableValues += 1
    if (props.location == "") nullableValues += 1
    console.log (nullableValues)

    return (
        <span className={ nullableValues != 1 ? styles.partnerItem : styles.partnerItemShort}>
            <p className={styles.partnerName}>{props.name}</p>
            <div className={styles.partnerInfo}>
                {props.location != "" ?
                <div className={styles.partnerAddress}>
                    <img src="icons/location.svg" alt="" style={{width: 26 + "px"}}/>
                    <p>{props.location}</p>
                </div>
                : null}
                {props.site != "" ? 
                <div className={styles.partnerSite}>
                    <img src="icons/world.svg" alt="" style={{width: 24 + "px"}}/>
                    <a href={props.site}>{props.siteName}</a>
                </div>
                : null}
                {props.phone != "" ? 
                    <div className={styles.partnerPhone}>
                        <img src="icons/smallPhone.svg" alt="" style={{width: 24 + "px"}}/>
                        <p>{props.phone}</p>
                        <div className={styles.partnerNetworks} style = {{marginLeft: 18 + "px"}}>
                            {props.whatsAppLink != "" ? <a href={props.whatsAppLink}><img src="icons/whatsApp.svg" alt="" style={{marginRight: 10 + "px"}}/></a> : null}
                            {props.telegramLink != "" ? <a href={props.telegramLink} ><img src="icons/telegram.svg" alt="" /></a> : null}
                        </div>
                    </div>
                : null}
            </div>
        </span>
    )
}

function Partners() {
    const [partnersList, setPartnersList] = useState(null)
    const [isOpened, setOpened] = useState(false)

    function getPartnersList() {
        axios('http://localhost:8000/partners/list/', { withCredentials: true })
        .then((response) => { 
            setPartnersList(response.data)
        })
    }

    useEffect(() => {getPartnersList()}, [])

    if (partnersList != null) {
        let partnersArray = partnersList

        if (isOpened == false) {
            console.log(partnersArray)
            partnersArray = partnersList.slice(0, 4)
        }

        return (
            <div className={styles.partnersSection}>
                <div className={styles.partners}>
                    <p className={styles.partnersTitle}>ПАРТНЕРЫ <span style={{color: '#F46628'}}>DaSHI</span> В РОССИИ</p>
                    <div className={styles.partnersList}>
                        {partnersArray.map((item) =>
                            <PartnerItem 
                                name={item.name}
                                location={item.address}
                                site={item.web}
                                siteName={item.web}
                                phone={item.phone}
                                telegramLink = {item.telegram}
                                whatsAppLink = {item.whatsapp}
                            />
                        )}
                    </div>
                    {partnersList.length > 4 ? <button className={styles.showMorePartners} onClick={() => setOpened(!isOpened)}>{isOpened ? "Скрыть" : "Смотреть все"}</button> : null}
                </div>
            </div>
        )}
    else return null
}

function UserInfo(props) {
    return (
        <>
            <p className={styles.userData}>{props.criteria}</p>
            <input type="text" placeholder={props.placeholder} className={styles.userDataInput}/>
        </>
    )
}

function FeedbackForm() {
    return (
        <div className={styles.feedbackSection}>
            <div className={styles.feedback}>
                <img src="images/feedbackBackground.svg" alt="" />
                <div className={styles.formHeader}>
                    <p className={styles.formTitle}><span style={{color: '#F46628'}}>СВЯЗАТЬСЯ</span> С ПРЕДСТАВИТЕЛЕМ БРЕНДА</p>
                    <p className={styles.formPS}>Напишите нам, заполнив форму ниже</p>
                    <p className={styles.formPS}>*** Для того, чтобы стать нашим партнером и представителем DS в Вашем регионе в нижеуказанной форме заполните раздел "Для сотрудничества"</p>
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
                            <textarea placeholder="Введите интересующий вопрос..."/>
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

function Contacts() {
    return (
        <>
            <Header/>
            <Banner/>
            <Partners/>
            <FeedbackForm/>
            <Footer/>
        </>
    )
}

export default Contacts;