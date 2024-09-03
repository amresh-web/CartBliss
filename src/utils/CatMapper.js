import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const CatMapper = () => {
  const state = useSelector((state) => state?.category);
  const location = useLocation();

  const pathname = location.pathname.replace(/^\//, "");

  const catFilter = state.data?.find((cat) => {
    const catName = cat.name.replace(/ +/g, "").toLowerCase();
    return catName === pathname;
  });

  const categoryId = catFilter ? catFilter._id : null;

  return categoryId;
};
