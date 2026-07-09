import type { Dispatch, SetStateAction } from 'react';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import Product from '../components/Product';
import './BookmarksPage.css';

import type { productInfo } from '../types/productInfo';

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