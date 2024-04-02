import MainBannerCarousel from './MainBannerCarousel';
import FavoriteItems from './FavoriteItems';

const Home = ({ items }) => {
  return (
    <>
      <MainBannerCarousel />
      <FavoriteItems items={items} />
    </>
  );
};

export default Home;
