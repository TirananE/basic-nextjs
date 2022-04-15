import styles from "../assets/scss/components/Title.module.scss";

const Title = ({ data }) => {
  return (
    <>
      <div className="row">
        {data && data.length
          ? data.map((source, index) => (
              <div className={styles.cardContainer} key={index}>
                <a className={styles.title}>{source.title}</a>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Title;
