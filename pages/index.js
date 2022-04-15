import Link from "next/link";
import styles from "../assets/scss/pages/Index.module.scss";
import Title from "../components/Title";

export default () => {
  return (
    <div className={styles.body}>
      <div className={styles.centerPage}>
        <Title data={[{ title: "This is index page" }]} />
        <div className={styles.link}>
          <Link href="/about">
            <a>Go to about page</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
