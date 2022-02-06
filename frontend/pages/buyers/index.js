import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import Question from "../../components/universal/Question.js";
import Menu from "../../components/universal/LeftMenu.js";
import Answer from "../../components/universal/Answer.js";
import styles from "../../styles/Buyers.module.css";
import { AnswerList } from "../../components/universal/Answer.js";

function QuestionList() {
    return (
        <>
            <Answer question = "DaSHI. Склады, точки продаж DS в России и других странах" answer = {
                <>
                    <p className={styles.answerTopic}>На сайтах наших партнеров и представителей DS в разделе «Продукция DaSHI» вы сможете проследить путь каждой детали – запуск в производство («На заводе»), срок поставки и местонахождение («В пути»), размещение на складе в России («В наличии»).</p>
                    <span className={styles.iconsSection}>
                        <img src="icons/buyersAnswer1.svg" alt="" />
                        <img src="icons/buyersAnswer2.svg" alt="" />
                        <img src="icons/buyersAnswer3.svg" alt="" />
                    </span>
                    <p className={styles.titleBuyers}>Предлагаем познакомиться с нашим партнером в России - <a href="http://dsparts-dv.com" style={{color: '#F46628'}}>www.dsparts-dv.com</a></p>
                </>
            }/>
            <Answer question="Контроль качества DS" answer = {
                <p className={styles.answerTopic}>
                    Вся продукция DaSHI сертифицирована в России. Каждая партия проходит полную процедуру
                    таможенного оформления и очистки на территории РФ.
                    Проверить подлинность продукции DS вы можете на сайте официальных представителей в
                    разделе «Проверка подлинности DS / Контроль качества DS». Для этого в специальное поле
                    необходимо ввести код (11-разрядный идентификационный цифровой или буквенно-
                    числовой код), присвоенный детали, либо отсканировать QR-код. Вы также можете отправить
                    запрос в <a href="#">службу клиентской поддержки</a>.
                </p>
            }/>
            <Answer question="Гарантия на продукцию DS" answer = {
                <>
                    <p className={styles.answerTopic} style={{marginBottom: 20 + "px"}}>
                        При обращении по гарантийному случаю или при оформлении претензии необходимо следовать
                        определенным правилам.
                    </p>
                    <a href="#" className={styles.titleBuyers} style={{color: '#F46628'}}>Подробнее</a>
                </>
            }/>
            <Answer question="Сервис DS. Экспресс-доставка" answer = {
                <>
                    <p className={styles.answerTopic}>
                        В случае возникновения экстренной ситуации или детали необходимы срочно, вы можете
                        обратиться для заказа экспресс-доставки, связавшись по <a href="#">форме обратной связи</a>, либо
                        через <a href="#">службу клиентской поддержки</a>. Мы уточним такую возможность для вашего населенного пункта и
                        организуем быструю доставку деталей из ближайшего к Вам склада с продукцией DasHI.
                    </p>
                </>
            }/>
            <Answer question="Сервис DS. Экспресс-диагностика" answer = {
                <>
                    <p className={styles.answerTopic}>
                        В случае возникновения неисправности форсунки бренда DS, завод предлагает возможность
                        провести экспресс-диагностику детали на оборудовании DS со скидкой до 50%.
                    </p>
                    <p className={styles.answerTopic} style={{marginBottom: 10 + "px", marginTop: 10 + "px"}}>
                        Свяжитесь с нами через <a href="#">форму обратной связи</a>, либо через <a href="#">службу клиентской поддержки</a> и мы
                        уточним данную возможность для вашего населенного пункта и сориентируем о ближайшем к
                        Вам месте расположения сервиса со стендами DS.
                    </p>
                    <p className={styles.answerTopic}>
                        Мы гарантируем высокое качество всей реализуемой продукции. Каждая форсунка перед
                        отправкой покупателю ставится на диагностический стенд – такой подход позволяет исключить
                        продажу некачественных изделий.
                    </p>
                </>
            }/>
            <Answer long = "yes" question="Сервис DS. Замена б/у и неисправных форсунок DS Евро 2 на новые - выгода до 30%" answer = {
                <>
                    <p className={styles.answerTopic}>
                        Мы предлагаем вам возможность заменить вышедшую из строя форсунку DS Евро 2 на новую
                        форсунку DS с таким же номером. При этом вы получите значительную скидку.
                    </p>
                    <a href="#" className={styles.titleBuyers} style={{color: '#F46628'}}>Подробнее</a>
                </>
            }/>
        </>
    )
}

function BuyersInfo() {
    return (
        <div className={styles.buyersInfo}>
            <div className={styles.mainInfo}>
                <AnswerList list={[
                    "Узнать стоимость, наличие и сроки поставки интересующего вас товара?",
                    "Найти ближайший к вам склад DS для самовывоза либо точку продаж DS?",
                    "Заказать курьерскую доставку либо экспресс-доставку, если необходимой детали нет в наличии в вашем городе ?",
                    "Узнать о партнерах DS, о дилерах и представителях DS?"
                ]}/>
                <p className={styles.titleBuyers}>Ответы на эти и другие вопросы Вы сможете получить, заполнив <a href="#">форму обратной связи</a>, либо обратившись <a href="#">в службу клиентской поддержки</a>.</p>
            </div>
            <QuestionList/>
        </div>
    )
}

function Buyers() {
    return (
        <>
            <Header/>
            <Question/>
            <div className="contentSection">
                <div className="content">
                    <Menu page='buyers'/>
                    <span>
                        <BuyersInfo/>
                        <img src="images/buyersImage.jpg" alt="" />
                    </span>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Buyers;