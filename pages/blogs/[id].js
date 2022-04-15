import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../assets/scss/pages/Blogs.module.scss";

import blogs from "../../mock/blogs";
import Title from "../../components/Title";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div>
        <div className={styles.body}>
          <div className={styles.centerPage}>
            <Title data={[{ title: "No Data" }]} />
            <div className={styles.link}>
              <Link href="/">
                <a>Back to index page</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.centerPage}>
          <div className={styles.blogID}>
            This is blog <span style={{ color: "#DC453D" }}>#{blog.id}</span>
          </div>
          <div className={styles.content}>{blog.content}</div>
          <div className={styles.link}>
              <Link href="/">
                <a>Back to index page</a>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};
