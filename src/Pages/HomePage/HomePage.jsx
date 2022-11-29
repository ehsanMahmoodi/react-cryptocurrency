import { Banner, SearchCoin, TableCoins } from "../../Components";
import { Container, Grid } from "@mui/material";
import { useStyle } from "./HomePage.style";

const HomePage = () => {
  //  get css style
  const classes = useStyle();
  return (
    <>
      <Banner />
      <Container maxWidth={false} className={classes.main_content}>
        <Grid container className={"row"}>
          <Grid item xs={10}>
            <SearchCoin />
          </Grid>
          <Grid item xs={10}>
            <TableCoins />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
