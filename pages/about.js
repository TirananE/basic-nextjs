import Link from "next/link";
import styles from "../assets/scss/pages/About.module.scss";
import Title from "../components/Title";

export default () => {
  return (
    <div className={styles.body}>
      <div className={styles.centerPage}>
        <Title data={[{ title: "This is about page" }]} />
        <div className={styles.link}>
          <Link href="/">
            <a>Back to index page</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
