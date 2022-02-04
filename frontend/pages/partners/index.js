import Header from "../../components/universal/Header.js"
import Footer from "../../components/universal/Footer.js";
import Question from "../../components/universal/Question.js";
import Menu from "../../components/universal/LeftMenu.js";

function PartnersInfo() {
    return (
        <>
        </>
    )
}

function Partners() {
    return (
        <>
            <Header/>
            <Question/>
            <div className="contentSection">
                <div className="content">
                    <Menu page='partners'/>
                    <PartnersInfo/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Partners;