import Category from "../../components/Common/Category";
import { useEffect, useState } from "react";
import axios from "axios";
import { CatMapper } from "../../utils/CatMapper";

const smartPhoneBanner = [
  {
    key: 0,
    url: "banner/smartphone1.jpg",
  },
  {
    key: 1,
    url: "banner/smartphone4.jpg",
  },
];
const title = "Smart Phones";

const SmartPhones = () => {
  const categoryId = CatMapper();
  const [catData, SetCatData] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/category/getcategory/${categoryId}/getallmodel`
        );
        if (res.status === 200) {
          console.log(res.data[6].images[0]);
          SetCatData(res.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCategoryData();
  }, [categoryId]);

  return (
    <>
      <Category title={title} banner={smartPhoneBanner} data={catData} />
    </>
  );
};

export default SmartPhones;
