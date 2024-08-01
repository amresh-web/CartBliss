import { Tab, Tabs } from "react-bootstrap";
import { useEffect, useState } from "react";
import BrandLists from "./BrandLists";
import AddNewBrand from "./AddNewBrand";
import axios from "axios";

const Brands = () => {
  const [fetchCategory, setFetchCategory] = useState([]);

  const getCategoryList = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/category/getcategory`
      );
      if (res.status === 200) {
        setFetchCategory(res.data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <>
      <div className="container my-5">
        <Tabs id="brand-tab" defaultActiveKey="addBrand">
          <Tab
            eventKey="addBrand"
            title="Add Brand"
            className="border border-1 p-4"
          >
            <AddNewBrand
              fetchCategory={fetchCategory}
              title={"Select category in which you want to add new brand"}
            />
          </Tab>
          <Tab
            eventKey="brandist"
            title="Brand List"
            className="border border-1 p-4"
          >
            <BrandLists
              fetchCategory={fetchCategory}
              title={"Select category which you want to see brand"}
            />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Brands;
