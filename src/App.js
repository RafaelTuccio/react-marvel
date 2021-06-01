import "./styles/styles.css";
import Home from './pages/home/index';
import Footer from './components/Footer/Fotter';
import Hero from  "./pages/hero/index";
import Heroes from "./components/Heroes/Heroes";

function App() {
  

  return (
    <div>
      <div className="container"> 
        <Hero />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
