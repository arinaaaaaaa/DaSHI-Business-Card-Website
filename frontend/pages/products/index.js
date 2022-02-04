import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import Question from "../../components/universal/Question.js";
import Menu from "../../components/universal/LeftMenu.js";
import styles from "../../styles/Products.module.css";

function ProductItem(props) {
    return (
        <span className={styles.productItem}>
            <img src={props.imgSrc} alt="" />
            <p className={styles.itemTitle}>{props.title}</p>
            <img src="icons/help-light.svg" alt="help" />
        </span>
    )
}

function ProductsSection() {
    return (
        <div className={styles.productsSection}>
            <div className={styles.linksSection}>
                <a href="#">УПАКОВКА <span style={{color: '#F46628'}}>DS</span></a>
                <a href="#"><span>КОНТРОЛЬ КАЧЕСТВА <span style={{color: '#F46628'}}>DS</span></span><img src="icons/help.svg" alt="" /></a>
            </div>
            <div className={styles.productsGrid}>
                <ProductItem imgSrc="images/nozzelSmall.svg" title="Форсунки топливные DS"/>
                <ProductItem imgSrc="images/nozzelSmall.svg" title="Комплектующие к форсункам DS"/>
                <ProductItem imgSrc="images/nozzelSmall.svg" title="Комплекты переделки DS"/>
                <ProductItem imgSrc="images/nozzelSmall.svg" title="Запчасти DS"/>
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