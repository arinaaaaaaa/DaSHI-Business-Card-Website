import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import Question from "../../components/universal/Question.js";
import Menu from "../../components/universal/LeftMenu.js";
import styles from "../../styles/Products.module.css";

function ProductItem(props) {
    return (
        <span className={styles.productItem}>
            <span>
                <img src={props.imgSrc} alt="" className={styles.productImg}/>
                <p className={styles.itemTitle}>{props.title}</p>
            </span>
            <span  class="tooltip">
                <span className="tooltipIcon light">?</span>
                <span class="promt">
                    {props.promt}
                </span>
            </span>
        </span>
    )
}

function ProductsSection() {
    return (
        <div className={styles.productsSection}>
            <div className={styles.linksSection}>
                <a href="#" style={{marginRight: 64 + "px"}}>УПАКОВКА <span style={{color: '#F46628'}}>DS</span></a>
                <span className={`${styles.linkSection} ${"tooltip"}`}><a>КОНТРОЛЬ КАЧЕСТВА<span style={{color: '#F46628'}}>&nbsp;DS</span></a><span className="tooltipIcon dark" style={{marginLeft: 12 + "px", textDecoration: "none"}}>?</span>
                    <span class="promt">
                        Вся продукция DaSHI сертифицирована в России. Каждая партия проходит полную процедуру
                        таможенного оформления и очистки на территории РФ. <a href="http://localhost:3000/buyers">Подробнее</a>
                    </span>
                </span>
            </div>
            <div className={styles.productsGrid}>
                <ProductItem
                    imgSrc="images/products1.svg"
                    title="Форсунки топливные DS"
                    promt="Форсунки топливные DS (DaSHI) Евро 2, 3, 4, 5 – высококачественные оригинальные форсунки,
                    обеспечивающие экономичный расход топлива. Форсунки DaSHI используются в качестве
                    аналогов форсунок таких брендов, как Bosch, Denso, Delphi, Weichai, Yuchai и др. Мы
                    реализуем форсунки для бензиновых и дизельных двигателей системы Common Rail (CR).
                    Уточнить стоимость, наличие и сроки поставки интересующего вас товара можно по артикулу
                    (указав номер DS или аналога), оставив заявку через форму обратной связи либо обратившись
                    в службу клиентской поддержки."
                />
                <ProductItem
                    imgSrc="images/products2.svg"
                    title="Комплектующие к форсункам DS"
                    promt = "Комплектующие для форсунок DS – широкий спектр комплектующих для форсунок различных
                    типов - распылители, штуцеры, клапаны, соленоиды, гайки, шарики, кольца, ремкомплекты.
                    Уточнить стоимость, наличие и сроки поставки интересующего вас товара можно по артикулу
                    (указав номер DS или аналога), оставив заявку через форму обратной связи либо обратившись
                    в службу клиентской поддержки."
                />
                <ProductItem
                    imgSrc="images/products3.svg"
                    title="Комплекты переделки DS"
                    promt="В данный момент данный товар не доступен для заказа."
                />
                <ProductItem
                    imgSrc="images/products1.svg"
                    title="Запчасти DS"
                    promt="Плунжерные пары DS, ЦПГ (цилиндро-поршневые группы), фильтры, свечи накала, насосы, ТНВД.
                    В данный момент данный товар не доступен для заказа"
                />
            </div>
        </div>
    )
}

function Banners() {
    return (
        <>
            <Header/>
            <Question/>
            <div className="contentSection">
                <div className="content">
                    <Menu page='products'/>
                    <ProductsSection/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Banners;