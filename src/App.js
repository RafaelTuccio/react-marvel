import "./styles/styles.css";
import Footer from './components/Footer/Fotter';
import { Router } from "react-router-dom";
import history from './history';
import Routes from './routes';

function App() {
  

  return (
    <div>
      <Router history={history}>
        <Routes />
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
