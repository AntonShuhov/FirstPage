import './Header.css';
import {useContext, useEffect, useState} from "react";
import {Context} from "../../../App";
import {observer} from "mobx-react-lite";

import logoImg from './../../../img/icons/Logo1.svg';
import {
        GiPerfumeBottle, GiWashingMachine, GiVibratingSmartphone, GiPriceTag
       } from "react-icons/gi";
import { MdOutlinePets, MdOutlineSportsTennis } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { PiSprayBottleLight } from "react-icons/pi";
import { FaCocktail, FaUserAstronaut } from "react-icons/fa";

import Modal from "../Modal/Modal";

function Header() {
    const [modalActive, setModalActive] = useState(false);
    const [catalogOpen, setCatalogOpen] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    const {store} = useContext(Context);

    useEffect(() => {
        if(localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img className="header__logo__img" src={logoImg} alt="logoImg"/>
                        <span>MobileShop</span>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li><a href="/" className="header__nav-link">Главная</a></li>
                            <li><button className="header__nav-btn-catalog" onClick={() => setCatalogOpen(!catalogOpen)}>Каталог</button></li>
                            <li><a href="/about" className="header__nav-link">Про нас</a></li>
                            <li><a href="/solds" className="header__nav-link">Акции</a></li>
                            <li  className={`header__nav-user ${store.isAuth ? "userActive" : ""}`}>
                                <FaUserAstronaut/> <span className="header__nav-userEmail" >{store.isAuth ? `${store.user.email}` : ''}</span>
                            </li>
                            <li><button className="header__nav-btn" onClick={() => setModalActive(true)}>Войти</button></li>
                        </ul>
                        <ul className={`header__nav-catalog ${catalogOpen ? "active" : ""}`}>
                           <li className="header__nav-item"><GrPersonalComputer className="header__nav-item-icon"/>
                                <a href="#!" className="header__nav-item-link">Ноутбуки</a>
                           </li>
                           <li className="header__nav-item"><FaComputer className="header__nav-item-icon"/>
                                <a href="#!" className="header__nav-item-link">Компьютеры</a>
                           </li>
                           <li className="header__nav-item"><GiVibratingSmartphone className="header__nav-item-icon"/>
                                <a href="#!" className="header__nav-item-link">Смартфоны</a>
                           </li>
                           <li className="header__nav-item"><GiWashingMachine className="header__nav-item-icon"/>
                                <a href="#!" className="header__nav-item-link">Бытовая техника</a>
                           </li>
                           <li className="header__nav-item"><BsTools className="header__nav-item-icon"/>
                                <a href="#!" className="header__nav-item-link">Инструменты</a>
                           </li>
                           <li className="header__nav-item"><MdOutlinePets className="header__nav-item-icon"/>
                                <a href="#!" className="header__nav-item-link">Зоотовары</a>
                           </li>
                           <li className="header__nav-item"><MdOutlineSportsTennis className="header__nav-item-icon"/>
                                <a href="#!" className="header__nav-item-link">Спорт-товары</a>
                           </li>
                           <li className="header__nav-item"><PiSprayBottleLight className="header__nav-item-icon"/>
                                <a href="#!" className="header__nav-item-link">Бытовая химия</a>
                           </li>
                           <li className="header__nav-item"><GiPerfumeBottle className="header__nav-item-icon"/>
                                <a href="#!" className="header__nav-item-link">Парфюмерия</a>
                           </li>
                           <li className="header__nav-item"><FaCocktail className="header__nav-item-icon"/>
                                <a href="#!" className="header__nav-item-link">Алкоголь</a>
                           </li>
                           <li className="header__nav-item"><GiPriceTag className="header__nav-item-icon"/>
                                <a href="#!" className="header__nav-item-link">Акции</a>
                           </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="modal__login-container">
                   <input
                       className="modal__login-login"
                       onChange={e => setEmail(e.target.value)}
                       value={email}
                       type="text"
                       placeholder="email"
                   />
                   <input
                       className="modal__login-password"
                       onChange={e => setPassword(e.target.value)}
                       value={password}
                       type="password"
                       placeholder="Пароль"/>
                   <button className="modal__login-submit" onClick={() => store.login(email, password)}>
                       Войти
                   </button>
                   <button className="modal__login-registration" onClick={() => store.registration(email, password)}>
                       Регистрация
                   </button>
                </div>
            </Modal>
        </header>

    )
}
export default observer(Header);