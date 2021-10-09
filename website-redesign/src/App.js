import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Errorpage from './components/Errorpage/Errorpage';
import { Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Footer />
        <Router>
        <Switch>
         <Route exact path={"/404"}  >
           <Errorpage />
           </Route>
        </Switch>
        </Router>
        
      </div>
  );
}

export default App;
