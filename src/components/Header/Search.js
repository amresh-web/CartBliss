import style from "./Header.module.scss";

const Search = () => {
  return (
    <>
      <form>
        <div className={"input-group"}>
          <input
            type="text"
            className={[style["form-control"], "form-control"].join(" ")}
            placeholder={"Search"}
            aria-describedby={"store"}
          />
          <span
            className={[style["input-group-text"], "input-group-text"].join(
              " "
            )}
            id={"store"}
          >
            <i className="bi bi-search"></i>
          </span>
        </div>
      </form>
    </>
  );
};

export default Search;
