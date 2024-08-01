import { Form } from "react-bootstrap";

const FilterCategory = ({ fetchCategory, handleSelectCategory, title }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h5 className="mb-3">{title}</h5>
        </div>
        <div className="col-4">
          <Form.Select
            aria-label="category select"
            onChange={handleSelectCategory}
          >
            <option>Select Category</option>
            {fetchCategory.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
    </>
  );
};

export default FilterCategory;
