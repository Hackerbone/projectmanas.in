import "./App.scss";

// Components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

// Pages
import Errorpage from "./pages/Errorpage/Errorpage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={"/*"}>
          <Errorpage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
