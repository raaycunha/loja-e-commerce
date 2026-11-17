import CategoryLayout from "../../components/CategoryLayout";

const News = () => {
  return (
    <div>
      <CategoryLayout
        imgMobile="/images/categories/banners/banner-novidades-m.webp"
        imgDesktop="/images/categories/banners/banner-novidades.webp"
        title="Novidades"
        body="Novas tendências, novas formas de expressar seu estilo."
        category="news"
      />
    </div>
  );
};

export default News;
