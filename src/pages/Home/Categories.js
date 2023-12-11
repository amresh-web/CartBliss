import style from "./Home.module.scss";
import cat1 from "../../assets/images/cat-1.avif";
import cat2 from "../../assets/images/cat-2.avif";
import cat3 from "../../assets/images/cat-3.webp";
import cat4 from "../../assets/images/cat-4.avif";
import cat5 from "../../assets/images/cat-5.avif";
import cat6 from "../../assets/images/cat-6.avif";
import cat7 from "../../assets/images/cat-7.avif";
import cat8 from "../../assets/images/cat-8.webp";
import cat9 from "../../assets/images/cat-9.webp";
import cat10 from "../../assets/images/cat-10.avif";
import cat11 from "../../assets/images/cat-11.jpg";
import cat12 from "../../assets/images/cat-12.jpg";

const Categories = () => {
  return (
    <>
      <article>
        <div className={style.category}>
          <h3 className={"text-center mb-4"}>Shop by Category</h3>
          <div className={"row g-0"}>
            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat1} alt="" />
                </div>
                <h5>Mobile Phones</h5>
              </div>
            </div>

            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat2} alt="" />
                </div>
                <h5>Laptops & Tablets</h5>
              </div>
            </div>

            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat3} alt="" />
                </div>
                <h5>Televisions</h5>
              </div>
            </div>

            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat4} alt="" />
                </div>
                <h5>PC & Accessories</h5>
              </div>
            </div>

            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat5} alt="" />
                </div>
                <h5>Audio & Video</h5>
              </div>
            </div>

            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat12} alt="" />
                </div>
                <h5>Headphones</h5>
              </div>
            </div>

            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat6} alt="" />
                </div>
                <h5>Gaming & Accessories</h5>
              </div>
            </div>

            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat7} alt="" />
                </div>
                <h5>Home Appliances</h5>
              </div>
            </div>

            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat8} alt="" />
                </div>
                <h5>Kitchen Appliances</h5>
              </div>
            </div>

            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat9} alt="" />
                </div>
                <h5>Cameras</h5>
              </div>
            </div>

            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat10} alt="" />
                </div>
                <h5>COnsumables</h5>
              </div>
            </div>

            <div className={"col-sm-6 col-md-4 col-lg-3 col-xl-2"}>
              <div className={style.category__item}>
                <div className={style.category__item__thumb}>
                  <img src={cat11} alt="" />
                </div>
                <h5>Smart Homes</h5>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Categories;
