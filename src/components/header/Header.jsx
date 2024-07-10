import './Header.css';

import logoImg from './../../img/icons/Logo1.svg';

function Header() {

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img className="header__logo__img" src={logoImg} alt="logoImg"/>
                        <span>MobileShop</span>
                    </div>
                    <nav className="header__nav">
                        <ul >
                            <li><a href="#!" className="header__nav-link">Каталог</a></li>
                            <li><a href="#!" className="header__nav-link">Контакты</a></li>
                            <li><a href="#!" className="header__nav-link">Акции</a></li>
                            <li><a href="#!" className="header__nav-btn">Войти</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header;