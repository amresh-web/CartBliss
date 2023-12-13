import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={["row"].join(" ")}>
          <div className={["col-4"].join(" ")}>
            <div className={[styles.logo].join(" ")}>
              Cart <span>Bliss</span>
            </div>
          </div>
          <div className={["col-4"].join(" ")}></div>
          <div className={["col-4"].join(" ")}></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
