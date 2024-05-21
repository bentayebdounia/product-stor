import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const useCategory = () =>
  useSelector((state: RootState) => state.category);
  

