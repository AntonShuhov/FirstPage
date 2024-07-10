import Header from './components/header/Header.jsx';
import Promo from './components/promo/Promo.jsx';
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Sales from "./components/Sales/Sales";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
       <Header />
       <Promo />
       <Brands/>
       <Arrivals/>
       <Sales/>
       <Footer/>
    </div>
  );
}

export default App;