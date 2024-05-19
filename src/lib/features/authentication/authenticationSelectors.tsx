import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const useAuthentication = () =>
  useSelector((state: RootState) => state.authentication);
