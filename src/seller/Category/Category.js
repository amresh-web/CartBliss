import { Tab, Tabs } from "react-bootstrap";
import CategoryLists from "./CategoryLists";
import { useState } from "react";
import AddCategory from "./AddCategory";

const Category = () => {
  const [key, setKey] = useState("addCategory");
  const [fetchCategories, setFetchCategories] = useState(false);

  const handleSelect = (k) => {
    setKey(k);
    if (k === "categoryList") {
      setFetchCategories(true);
    }
  };
  return (
    <>
      <div className="container my-5">
        <Tabs id="category-tab" activeKey={key} onSelect={handleSelect}>
          <Tab
            eventKey="addCategory"
            title="Add Category"
            className="border border-1 p-5"
          >
            <AddCategory />
          </Tab>
          <Tab
            eventKey="categoryList"
            title="Category List"
            className="border border-1 p-5"
          >
            {key === "categoryList" && (
              <CategoryLists fetch={fetchCategories} />
            )}
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Category;
