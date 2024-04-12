import MainBanner from './MainBanner';
import FavoriteItems from './FavoriteItems';

const Home = ({ items }) => {
  return (
    <>
      <MainBanner />
      <FavoriteItems items={items} />
    </>
  );
};

export default Home;
