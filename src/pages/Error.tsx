import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/")
  };
// @ts-ignore
  if (error.status === 404) {
    return (
      <section className={styles.errorSection}>
        <div className={styles.errorText}>
          <figure>
            <img className={styles.errorImg}
              src="/img/error.png"
              alt="404 page"
            />
          </figure>
          <div>
            <p >The page you were looking for could not be found</p>
          </div>
        </div>
        <button className={styles.btns} onClick={handleGoBack}>
          Go Back
        </button>
      </section>
    );
  }

  console.log(error);

  return <h1>The page you are looking for does not exist</h1>;
};
