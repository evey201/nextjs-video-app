import styles from "./Banner.module.css";

export const Banner = ({ title, subTitle, imgUrl }) => {
  const handleOnPlay = () => {
    console.log("Play");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <div className={styles.leftElement}>
            <div className={styles.nseriesWrapper}>
                <p className={styles.firstLetter}>N</p>
                <p className={styles.series}>S E R I E S</p>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <h3 className={styles.subTitle}>{subTitle}</h3>
          </div>
          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
        <div
          className={styles.bannerImg}
          style={{
            backgroundImage: `url(${imgUrl})`,
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}
        ></div>
      </div>
    </>
  );
};
