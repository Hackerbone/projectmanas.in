<<<<<<< HEAD
import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sponsors from './components/Sponsors/Sponsors';
=======
import "./App.scss";

// Components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

// Pages
import Errorpage from "./pages/Errorpage/Errorpage";
import { Switch, Route } from "react-router-dom";
>>>>>>> 2cbfa9dd0cb9847cc4a5372ba3edc24130ff81de

function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      <Sponsors />
=======
      <Switch>
        <Route exact path={"/*"}>
          <Errorpage />
        </Route>
      </Switch>

>>>>>>> 2cbfa9dd0cb9847cc4a5372ba3edc24130ff81de
      <Footer />

    </div>
  );
}

export default App;
