import Container from "../components/Container";
import Banners from "../sections/Banners";
import Category from "../sections/Category";
import Hero from "../sections/Hero";
import ProductsScroll from "../sections/ProductsScroll";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
        <Category />
        <ProductsScroll />
        <Banners />
      </Container>
    </div>
  );
};

export default Home;
