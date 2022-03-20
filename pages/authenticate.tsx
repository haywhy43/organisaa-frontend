import OLoader from "../widgets/global/OLoader";
import styles from "../styles/page-styles/AuthPage.module.scss";

const AuthPage = () => {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.loaderSvg}>
        <OLoader />
      </div>
    </div>
  );
};

export default AuthPage;
