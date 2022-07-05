import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
} from "@material-ui/core";
import {
    createTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../cryptoContext";

const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        cursor: "pointer",
    },

    menuItem: {
        fontFamily: "Montserrat",
        fontSize: "20px",
    },
}));

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        type: "dark",
    },
});

function Header() {
    const classes = useStyles();
    const { currency, setCurrency } = CryptoState();

    const history = useHistory();

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="000000" position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            onClick={() => history.push(`/`)}
                            variant="h6"
                            className={classes.title}
                        >
                            Homepage
                        </Typography>
                        <Select
                            variant="outlined"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency}
                            style={{ width: 100, height: 40, marginLeft: 15 }}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem
                                value={"USD"}
                                className={classes.menuItem}
                            >
                                USD
                            </MenuItem>
                            <MenuItem
                                value={"INR"}
                                className={classes.menuItem}
                            >
                                INR
                            </MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;
