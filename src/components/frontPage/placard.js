import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./slider";

const useStyles = makeStyles((theme) => ({
    banner: {
        height: "500px",
        backgroundImage: "url(./images/slider.webp)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
}));

function Placard() {
    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                            color: "black",
                            fontSize: "60px",
                        }}
                    >
                        CRYPTO MASTER <img src="./images/crypto.png" alt="" />
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "black",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                            fontSize: "20px",
                        }}
                    >
                        TRACK THE CASH WITH WINGS !!
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    );
}

export default Placard;
