// import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import './Product.css';

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

function Product({ productInfo, bookmarks, setBookmarks }: { productInfo: productInfo, bookmarks: productInfo[], setBookmarks: Dispatch<SetStateAction<productInfo[]>> }) {
  // const [bookmarks, setBookmarks] = useState<productInfo[]>([]);

  const productLink = `https://amazon.com/dp/${productInfo.asin}`;
  const isIncluded = bookmarks.includes(productInfo);

  function addBookmark() {
    if (isIncluded) {
      setBookmarks(bookmarks.filter((bookmark) => {
        return (bookmark != productInfo);
      }));
      console.log(`Removed bookmark for ${productInfo.asin}`);
    } else {
      setBookmarks([
        ...bookmarks,
        productInfo
      ]);
      console.log(`Added bookmark for ${productInfo.asin}`);
    }
  }

  return (
    <div className="product-block">
      <div className="product-header">
        <div>
          <button
            className="bookmark-button"
            onClick={addBookmark}
          >
            {isIncluded && (
              <BookmarkAddedIcon className="bookmark-add-icon" />
            )}
            {!isIncluded && (
              <BookmarkAddIcon className="bookmark-add-icon" />
            )}
          </button>
        </div>
        <img className="product-image" src={productInfo.product_image} />
      </div>
      <div className="product-content" >
        <a
          className="product-link"
          href={productLink}
          target="_blank"
          rel="noopener roreferrer"
        >
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              lineClamp: 4,
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              cursor: "pointer"
            }}
          >
            {productInfo["product_title"]}
          </Typography>
        </a>
        <div className="product-rating-container" >
          <Typography
            sx={{
              marginRight: "0.4rem",
              fontSize: "0.8rem"
            }}
          >
            {productInfo["product_star_rating"]}
          </Typography>
          <Rating
            sx={{
              fontSize: "1rem",
              color: "rgb(255, 255, 0)",
              marginTop: "0.1rem"
            }}
            precision={0.5}
            value={Number(productInfo["product_star_rating"])}
            readOnly
          />
        </div>
        <span className="product-price" >
          <span className="product-price-symbol" >$</span>
          <span className="product-price-whole" >{productInfo["product_price"].substring(1)}</span>
        </span>
        <div className="product-amount-sold" >
          {productInfo["amount_sold"]}
        </div>
      </div>
    </div>
  );
}

export default Product;