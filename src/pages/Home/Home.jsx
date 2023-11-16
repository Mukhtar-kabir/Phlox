import "../Home/Home.scss";
import Slider from "../../Components/Slider/Slider";
import Banner from "../../Components/Banner/Banner";
import "../Home/Home.scss";
import Categories from "../../Components/Categories/Categories";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts />
      <Banner />
      <Categories />
    </div>
  );
};

export default Home;
