import { useState } from "react";

import Header from "./components/Header";
import WelcomeWord from "./components/WelcomeWord";
import Catalog from "./components/Catalog";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import DetailsGame from "./components/DetailsGame"
import Login from "./components/Login";
import Register from "./components/Register";



function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/home': <WelcomeWord/>,
        '/catalog': <Catalog/>,
        '/details-game': <DetailsGame/>,
        '/create-game': <CreateGame/>,
        '/edit-game': <EditGame/>,
        '/login': <Login/>,
        '/register': <Register/>,
    }

    const navigationChangeHandler = (path) => {
        setPage(path)
    }

    return (
        <div id="box">

            <Header
                navigationChangeHandler={navigationChangeHandler}
            />

            <main id="main-content">
                {routes[page] || <h2> 404  Page Not Found </h2>}
            </main>

        </div>

    );
}

export default App;
