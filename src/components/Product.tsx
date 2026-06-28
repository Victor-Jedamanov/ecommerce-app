import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import './Product.css';

function Product({ productImageSRC }: { productImageSRC: string }) {
  return (
    <div className="product-block">
      <div className="product-header">
        <div>
          <button className="bookmark-button">
            <BookmarkAddIcon className="bookmark-add-icon" />
          </button>
        </div>
        <img className="product-image" src={productImageSRC} />
      </div>
      <div className="product-content" >
        <a
          className="product-link"
          href="https://amazon.com/dp/B00MNV8E0C"
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
            Amazon Basics Wired QWERTY Keyboard, Works with Windows, Plug and Play, Easy to Use with Media Control, Full-Sized, Black
          </Typography>
        </a>
        <div className="product-rating-container" >
          <Typography
            sx={{
              marginRight: "0.4rem",
              fontSize: "0.8rem"
            }}
          >
            4.7
          </Typography>
          <Rating
            sx={{
              fontSize: "1rem",
              color: "rgb(255, 255, 0)",
              marginTop: "0.1rem"
            }}
            precision={0.5}
            value={4.7}
            readOnly
          />
        </div>
        <div className="product-footer" >
          $500.00
        </div>
      </div>
    </div>
  );
}

export default Product;