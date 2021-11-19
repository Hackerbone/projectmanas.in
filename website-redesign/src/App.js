import "./App.scss";

// Components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

// Pages
import Errorpage from "./pages/Errorpage/Errorpage";
import { Switch, Route } from "react-router-dom";
import Team from "./pages/Teampage/Team";
import FAQ from "./pages/faq/FAQ";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={"/"}>
          <Homepage />
        </Route>

        <Route exact path={"/team"}>
          <Team />
        </Route>

        <Route exact path={"/team/:year"} children={<Team />}>
          </Route>

        <Route exact path={"/faq"}>
          <FAQ />
        </Route>

        <Route exact path={"/*"}>
          <Errorpage />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
