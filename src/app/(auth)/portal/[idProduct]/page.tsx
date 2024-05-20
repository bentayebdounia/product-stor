import DetailProduct from "./components/detailProduct";

type Props = {
  params: { idProduct: string };
};

export default function Page({ params: { idProduct } }: Props) {
  return <DetailProduct idProduct={idProduct} />;
}
