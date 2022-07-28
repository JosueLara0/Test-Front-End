//* layout
import { Layout } from "../layout/Layout";
//* views
import { BannerView, ProductsGalleryView, NewsletterView } from "../views";

export const HomePage = () => {
  return (
    <Layout>
      <BannerView />

      <ProductsGalleryView />

      <NewsletterView />
    </Layout>
  );
};
