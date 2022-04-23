import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import WelcomeWord from "./components/WelcomeWord";
import Catalog from "./components/Catalog";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import DetailsGame from "./components/DetailsGame"
import Login from "./components/Login";
import Register from "./components/Register";



function App() {
    return (
        <div id="box">

            <Header />

            <main id="main-content">
                <Switch>
                    <Route path="/" exact component={WelcomeWord} />
                    <Route path="/catalog" component={Catalog} />
                    <Route path="/details/:id" component={DetailsGame} />
                    <Route path="/create-game" component={CreateGame} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </main>

        </div>
    );
}

export default App;
