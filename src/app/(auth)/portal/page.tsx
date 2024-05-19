import { ProductContainer } from "./components/productContainer";

type Props = {
  params: { locale: string };
};

export default function Page({ params: { locale } }: Props) {
  return (
    <>
      <ProductContainer />
    </>
  );
}
