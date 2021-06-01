import "./styles/styles.css";
import Home from './pages/home/index';
import Footer from './components/Footer/Fotter';
import Hero from  "./pages/hero/index";

function App() {
  

  return (
    <div>
      <div className="container"> 
        <Home />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
