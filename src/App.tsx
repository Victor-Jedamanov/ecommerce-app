import { useState } from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import BookmarksPage from './pages/BookmarksPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

import type { productInfo } from './types/productInfo';

import mirageServer from './server';

function App() {
  const [bookmarks, setBookmarks] = useState<productInfo[][]>([[], [], []]);

  mirageServer();

  return (
    <Routes>
      <Route index element={<HomePage bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
      <Route path="/bookmarks" element={<BookmarksPage bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
      <Route path="/search" element={<SearchPage bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;