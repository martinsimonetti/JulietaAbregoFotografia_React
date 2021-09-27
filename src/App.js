import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/layout/NavBar.js';
import Footer from './components/layout/Footer.js';

function App() {
  return (
    <div className="Container">
        {/* Componentes de la App */}
        <NavBar></NavBar>
        <Footer></Footer>
    </div>
  );
}

export default App;
