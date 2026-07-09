import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import Product from '../components/Product';
import './SearchPage.css';

import type { productInfo } from '../types/productInfo';
import type { searchResults } from '../types/searchResults';

function SearchPage({ bookmarks, setBookmarks }: { bookmarks: productInfo[][], setBookmarks: Dispatch<SetStateAction<productInfo[][]>> }) {
  const [searchResults, setSearchResults] = useState<searchResults | null>(null);
  const [searchParams,] = useSearchParams();

  const searchKey = searchParams.get('key') ?? 'battery';

  useEffect(() => { // Runs twice while in dev mode
    fetch(`/api/searchResults/${searchKey}`)
      .then((response) => response.json())
      .then((json) => setSearchResults(json.searchResult.searchResults))
    console.log('Effect rendered');
  }, [searchKey]);

  return (
    <>
      <title>CompaAmazon : {searchKey} </title>

      <div className="search-page">

        <Header searchText={searchKey} />

        <div></div>

        {searchResults && (
          <Grid
            sx={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "1rem"
            }}
            container
            spacing={3}
          >
            {searchResults.products.map((productInfo) => {
              return (
                <Grid key={productInfo.asin}>
                  <Product productInfo={productInfo} bookmarks={bookmarks} setBookmarks={setBookmarks} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </div>
    </>
  );
}

export default SearchPage;