import Container from "../components/Container";
import Banners from "../sections/Banners";
import Category from "../sections/Category";
import Hero from "../sections/Hero";
import Products from "../sections/Products";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
        <Category />
        <Products />
        <Banners />
      </Container>
    </div>
  );
};

export default Home;
