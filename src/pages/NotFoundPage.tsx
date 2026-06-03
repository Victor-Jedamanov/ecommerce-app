import Header from '../components/Header';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <>
      <title>Page Not Found</title>

      <div className="not-found-page">

        <Header />

        <div>
          <p>Page not found</p>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;