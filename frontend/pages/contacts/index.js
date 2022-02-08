import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import styles from "../../styles/Contacts.module.css";

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
    return (
        <span className={styles.partnerItem}>
            <p className={styles.partnerName}>{props.name}</p>
            <div className={styles.partnerAddress}>
                <img src="icons/location.svg" alt="" />
                <p>{props.location}</p>
            </div>
            <div className={styles.partnerSite}>
                <img src="icons/site.svg" alt="" />
                <a href={props.site}>{props.siteName}</a>
            </div>
            <div className={styles.partnerPhone}>
                <img src="icons/smallPhone.svg" alt="" />
                <p>{props.phone}</p>
                <div className={styles.partnerNetworks} style = {{marginLeft: 18 + "px"}}>
                    <a href="#"><img src="icons/whatsApp.svg" alt="" style={{marginRight: 10 + "px"}}/></a>
                    <a href="#"><img src="icons/telegram.svg" alt="" /></a>
                </div>
            </div>
        </span>
    )
}

function Partners() {
    return (
        <div className={styles.partnersSection}>
            <div className={styles.partners}>
                <p className={styles.partnersTitle}>ПАРТНЕРЫ <span style={{color: '#F46628'}}>DaSHI</span> В РОССИИ</p>
                <div className={styles.partnersList}>
                    <PartnerItem 
                        name="ООО «ДиЭс Трейд»" 
                        location="675000, Россия, Амурская область, г. Благовещенск, ул. Чайковского 7д, оф. 304"
                        site="http://dsparts-dv.com"
                        siteName="www.dsparts-dv.com"
                        phone="8 (914) 388-78-39"
                    />
                    <PartnerItem 
                        name="ООО «РК-Трейд»" 
                        location="675000, Россия, Амурская область, г. Благовещенск, ул. Чайковского 7д, оф. 304"
                        site="http://dsparts-dv.com"
                        siteName="www.dsparts-dv.com"
                        phone="8 (914) 388-78-39"
                    />
                    <PartnerItem 
                        name="ООО «ДиЭс Трейд»" 
                        location="675000, Россия, Амурская область, г. Благовещенск, ул. Чайковского 7д, оф. 304"
                        site="http://dsparts-dv.com"
                        siteName="www.dsparts-dv.com"
                        phone="8 (914) 388-78-39"
                    />
                    <PartnerItem 
                        name="ООО «РК-Трейд»" 
                        location="675000, Россия, Амурская область, г. Благовещенск, ул. Чайковского 7д, оф. 304"
                        site="http://dsparts-dv.com"
                        siteName="www.dsparts-dv.com"
                        phone="8 (914) 388-78-39"
                    />
                </div>
                <button className={styles.showMorePartners}>Смотреть все</button>
            </div>
        </div>
    )
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
                </div>
                <div className={styles.messageForms}>
                    <span className={styles.userInfoForm}>
                        <UserInfo criteria="ФИО*" placeholder="Иванов Иван Иванович"/>
                        <UserInfo criteria="Наименование организации*" placeholder="ООО «ДиЭс-Трейд»"/>
                        <UserInfo criteria="E-mail*" placeholder="sale@ds.parts.com"/>
                        <UserInfo criteria="Город/населенный пункт" placeholder="г. Благовещенск"/>
                    </span>
                    <span className={styles.messageForm}>
                        <p className={styles.userData}>Введите сообщение*</p>
                        <textarea placeholder="Введите интересующий вопрос..."/>
                    </span>
                </div>
                <div className={styles.toSend}>
                    <button type="submit">Отправить</button>
                    <input className={styles.agree} type="checkbox" /><span className={styles.agreesment}>Я даю свое согласие на обработку персональных данных</span>
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