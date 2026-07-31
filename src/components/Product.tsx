import { useState } from 'react';
import type { MouseEvent } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './Product.css';

import type { productInfo } from '../types/productInfo';

const options = [
  'Batteries',
  'Expensive',
  'Fun'
];

function Product({ productInfo, bookmarks, setBookmarks }: { productInfo: productInfo, bookmarks: productInfo[][], setBookmarks: Dispatch<SetStateAction<productInfo[][]>> }) {
  const productLink = `https://amazon.com/dp/${productInfo.asin}`;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>(
    bookmarks.map((bookmarkFolder, folderIndex) => {
      if (bookmarkFolder.map((productInfo) => {return productInfo.asin}).includes(productInfo.asin)) {
        return folderIndex;
      } else {
        return -1;
      }
    }).filter((value) => {
      return (value > -1);
    }));

  const open = Boolean(anchorEl);
  const handleClickListItem = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    _: MouseEvent<HTMLElement>,
    index: number,
  ) => {
    console.log(bookmarks);
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(
        selectedIndexes.filter((idx) => {
          return (idx != index);
        }));
    } else {
      setSelectedIndexes([
        ...selectedIndexes,
        index
      ]);
    }

    addBookmark(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function addBookmark(index: number) {
    const isIncluded = bookmarks[index].includes(productInfo);
    if (isIncluded) {
      setBookmarks(
        bookmarks.map((bookmarkFolder, folderIndex) => {
          if (folderIndex === index) {
            return bookmarkFolder.filter((bookmark) => {
              return (bookmark != productInfo);
            });
          } else {
            return bookmarkFolder;
          }
        }));
      console.log(`Removed bookmark for ${productInfo.asin}`);
    } else {
      setBookmarks(
        bookmarks.map((bookmarkFolder, folderIndex) => {
          if (folderIndex === index) {
            return ([
              ...bookmarkFolder,
              productInfo
            ]);
          } else {
            return bookmarkFolder;
          }
        }));
      console.log(`Added bookmark for ${productInfo.asin}`);
    }
  }

  return (
    <div className="product-block">
      <div className="product-header">
        <div>
          <button
            className="bookmark-button"
            onClick={handleClickListItem}
          >
            {selectedIndexes.length > 0 && (
              <BookmarkAddedIcon className="bookmark-add-icon" />
            )}
            {selectedIndexes.length === 0 && (
              <BookmarkAddIcon className="bookmark-add-icon" />
            )}
          </button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{
                  "&.Mui-selected": { backgroundColor: "hotpink", color: "#fff" },
                  "&.Mui-selected:hover": {
                    backgroundColor: "blue",
                  },
                }}
                key={option}
                selected={selectedIndexes.includes(index)}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <img className="product-image" src={productInfo.product_image} />
      </div>
      <div className="product-content" >
        <a
          className="product-link"
          href={productLink}
          target="_blank"
          rel="noopener noreferrer"
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