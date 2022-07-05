import { makeStyles } from "@material-ui/core";
import Homepage from "./pages/homePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./pages/coinPage";
import Header from "./components/header";

const useStyles = makeStyles(() => ({
    App: {
        backgroundColor: "#14161a",
        color: "white",
        minHeight: "100vh",
    },
}));

function App() {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <div className={classes.App}>
                <Header />
                <Route path="/" component={Homepage} exact />
                <Route path="/coins/:id" component={CoinPage} exact />
            </div>
        </BrowserRouter>
    );
}

export default App;
