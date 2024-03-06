import api from "@/api/index.api";
import ProductsList from "@/components/DealsList";
import Heading from "@/components/Heading";
import Page from "@/components/Page";

async function HomePage() {
  const deals = await api.deals.getAllDeals();

  return (
    <Page>
      <Heading label='전체 판매글' />
      <ProductsList deals={deals} />
    </Page>
  );
}

export const revalidate = 5;

export default HomePage;
