import style from "./Home.module.scss";
import card1 from "../../assets/images/card-1.webp";
import card2 from "../../assets/images/card-2.webp";
import card3 from "../../assets/images/card-3.webp";
import card4 from "../../assets/images/card-4.webp";
import card5 from "../../assets/images/card-5.webp";
import card6 from "../../assets/images/card-6.webp";

const Card = () => {
  return (
    <>
      <article>
        <div className={style["card-container"]}>
          <div className={style.card}>
            <img src={card1} alt="" />
          </div>
          <div className={style.card}>
            <img src={card2} alt="" />
          </div>
          <div className={style.card}>
            <img src={card3} alt="" />
          </div>
          <div className={style.card}>
            <img src={card4} alt="" />
          </div>
          <div className={style.card}>
            <img src={card5} alt="" />
          </div>
          <div className={style.card}>
            <img src={card6} alt="" />
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
