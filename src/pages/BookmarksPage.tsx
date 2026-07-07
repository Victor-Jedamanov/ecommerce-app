import type { Dispatch, SetStateAction } from 'react';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import Product from '../components/Product';
import './BookmarksPage.css';

interface productInfo {
  asin: string;
  product_title: string;
  product_price: string;
  product_original_price: string;
  product_star_rating: string;
  product_num_ratings: string;
  product_image: string;
  is_prime: boolean;
  amount_sold: string;
  delivery_info: string;
  productStatus: string;
}

function BookmarksPage({ bookmarks, setBookmarks }: { bookmarks: productInfo[][], setBookmarks: Dispatch<SetStateAction<productInfo[][]>> }) {
  return (
    <>
      <title>CompAmazon Bookmarks</title>

      <Header />

      <div className="bookmarks-page">
        <div>
          <p>This is the bookmarks page</p>
        </div>

        <Grid
          sx={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1rem"
          }}
          container
          spacing={3}
        >
          {bookmarks[0].map((productInfo) => {
            return (
              <Grid key={productInfo.asin}>
                <Product productInfo={productInfo} bookmarks={bookmarks} setBookmarks={setBookmarks} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default BookmarksPage;