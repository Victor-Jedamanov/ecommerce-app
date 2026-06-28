import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import Product from '../components/Product';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <title>CompAmazon</title>

      <div className="home-page" >
        <Header />

        <Grid
          sx={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1rem"
          }}
          container
          spacing={3}
        >
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/71W3+eLCARL._AC_SL1500_.jpg" />
          </Grid>
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/71xh1h5KfrL._AC_UL320_.jpg" />
          </Grid>
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/81iJ+tnLADL._AC_UL320_.jpg" />
          </Grid>
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/71W3+eLCARL._AC_SL1500_.jpg" />
          </Grid>
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/71xh1h5KfrL._AC_SL1500_.jpg" />
          </Grid>
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/81iJ+tnLADL._AC_SL1500_.jpg" />
          </Grid>
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/71W3+eLCARL._AC_SL1500_.jpg" />
          </Grid>
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/71xh1h5KfrL._AC_SL1500_.jpg" />
          </Grid>
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/81iJ+tnLADL._AC_SL1500_.jpg" />
          </Grid>
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/71W3+eLCARL._AC_SL1500_.jpg" />
          </Grid>
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/71xh1h5KfrL._AC_SL1500_.jpg" />
          </Grid>
          <Grid>
            <Product productImageSRC="https://m.media-amazon.com/images/I/81iJ+tnLADL._AC_SL1500_.jpg" />
          </Grid>
        </Grid>



      </div>
    </>
  );
}

export default HomePage;