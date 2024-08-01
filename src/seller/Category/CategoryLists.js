import axios from "axios";
import { useEffect, useState } from "react";

const CategoryLists = ({ fetch }) => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/category/getcategory`
      );
      if (res.status === 200) {
        setCategories(res.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (fetch) {
      getData();
    }
  }, [fetch]);

  return (
    <>
      <div>
        {categories.length === 0 ? (
          <p>No categories available.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Category Name</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category._id}>
                  <td>{index}</td>
                  <td>{category.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default CategoryLists;
