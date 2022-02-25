import "./App.scss";

// Components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TeamNav from "./components/Navbar_Team/Navbar";

// Pages
import Errorpage from "./pages/Errorpage/Errorpage";
import { Switch, Route } from "react-router-dom";
import Team from "./pages/Teampage/Team";
import FAQ from "./pages/faq/FAQ";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Navbar />
          <Homepage />
        </Route>

        <Route exact path={"/team"}>
          <TeamNav />
          <Team />
        </Route>

        <Route exact path={"/team/:year"} children={<Team />}></Route>

        <Route exact path={"/faq"}>
          <TeamNav />
          <FAQ />
        </Route>

        <Route exact path={"/*"}>
          <TeamNav />
          <Errorpage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
