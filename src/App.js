import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/layout/NavBar.js';
import Footer from './components/layout/Footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InicioPage from './pages/InicioPage';
import ServiciosPage from './pages/ServiciosPage';
import GaleriaPage from './pages/GaleriaPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="Container">
      {/* Componentes de la App */}
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={InicioPage} />
          <Route path="/servicios" exact component={ServiciosPage} />
          <Route path="/galeria" exact component={GaleriaPage} />
          <Route path="/contacto" exact component={ContactoPage} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
