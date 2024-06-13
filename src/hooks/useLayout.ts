import {
  TLayoutState,
  toggleOpenMenu,
  closeMenuNav,
} from "@/redux/layoutSlice";
import { useDispatch, useSelector } from "react-redux";

export const useLayout = () => {
  const { ...layout } = useSelector(
    (state: { layout: TLayoutState }) => state.layout
  );
  const dispatch = useDispatch();

  const setToggleOpenMenu = () => {
    dispatch(toggleOpenMenu());
  };
  const setCloseMenuNav = () => {
    dispatch(closeMenuNav());
  };
  return { ...layout, setToggleOpenMenu, setCloseMenuNav };
};
