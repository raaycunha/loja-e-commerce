import CategoryLayout from "../../components/CategoryLayout";

const Offers = () => {
  return (
    <div>
      <CategoryLayout
        imgMobile="/images/categories/banners/banner-ofertas-m.webp"
        imgDesktop="/images/categories/banners/banner-ofertas.webp"
        title="Ofertas"
        body="Seu estilo favorito com preços especiais."
        category="offers"
      />
    </div>
  );
};

export default Offers;
