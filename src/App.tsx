import { useState } from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import BookmarksPage from './pages/BookmarksPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

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

function App() {
  const [bookmarks, setBookmarks] = useState<productInfo[]>([]);

  return (
    <Routes>
      <Route index element={<HomePage bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
      <Route path="/bookmarks" element={<BookmarksPage bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;