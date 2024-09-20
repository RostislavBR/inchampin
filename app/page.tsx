import Main from "@components/Main";
import Header from "@components/Header";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
