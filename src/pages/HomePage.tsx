import Header from '../components/Header';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <title>CompAmazon</title>

      <div className="home-page" >
        <Header />

        <div>
          <p>This is the homepage</p>
        </div>

      </div>
    </>
  );
}

export default HomePage;