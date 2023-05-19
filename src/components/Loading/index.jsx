import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderText}>Loading...</div>
      <div className={styles.loaderBar}></div>
    </div>
  );
};

export default Loading;
