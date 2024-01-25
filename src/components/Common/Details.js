import styles from "../../assets/scss/Details.module.scss";

const Details = () => {
  const history = window.history.state
  const data = history.usr.item
  return (
    <>
      <div className={"container-xl"}>
        <div className={"row"}>
          <div className={"col-md-5"}>images</div>
          <div className={"col-md-7"}>
            <h1>{data.name}</h1>
            <h3><i className={"bi bi-currency-rupee"}></i>{data.price}</h3>
            <ul>
            {data.desc.map((item,index) => (
              <li key={index}>{item}</li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
