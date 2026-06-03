import Header from '../components/Header';
import './BookmarksPage.css';

function BookmarksPage() {
  return (
    <>
      <title>CompAmazon Bookmarks</title>

      <div className="bookmarks-page">
        <Header />

        <div>
          <p>This is the bookmarks page</p>
        </div>
      </div>
    </>
  );
}

export default BookmarksPage;