import AddProduct from "./components/addProduct";

type Props = {
  params: { locale: string };
};

export default function Page({ params: { locale } }: Props) {
  return <AddProduct />;
}
