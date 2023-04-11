import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Utilisateurs from "./utilisateur/pages/Utilisateurs";
import NouvellePlace from "./places/pages/NouvellePlace";
import MainNavigation from "./shared/Navigation/MainNavigation";
import PlacesUtilisateur from "./places/pages/PlacesUtilisateur";
import Place from "./places/components/Place";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Utilisateurs />
          </Route>
          <Route path="/:userId/places" exact>
              <PlacesUtilisateur />
          </Route>
          <Route path="/places/nouvelle" exact>
            <NouvellePlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
