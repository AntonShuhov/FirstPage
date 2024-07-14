import Header from "../Main/header/Header";
import Footer from "../Main/Footer/Footer";

import soldsImg from "../../img/sales/tefal.jpg"

function Solds() {
    return (
        <>
            <Header/>
            <div className="solds">
                <div className="container">
                    <img className="solds__img" src={soldsImg} alt="soldsImg"/>
                    <p className="solds__text">
                        Акция! Ваши надежные помощники на кухне от Tefal! Скидки до 54%!
                        <span> Период проведения акции: с 12 июля по 31 июля 2024</span>
                    </p>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Solds;