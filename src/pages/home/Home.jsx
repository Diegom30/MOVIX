import "./style.scss";
import HeroBanner from "./homeBanner/HeroBanner";
import Trending from "./trendig/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";




const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  );
};

export default Home;
