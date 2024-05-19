import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const useProduct = () =>
  useSelector((state: RootState) => state.product);
  

