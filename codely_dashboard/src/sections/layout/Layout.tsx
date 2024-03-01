/* eslint-disable prettier/prettier */
import { Link, Outlet } from "react-router-dom";

import { ErrorBoundary } from "./ErrorBoundary";
import styles from "./Layout.module.scss";
import TopBarProgressByLocation from "./TopBarProgressByLocation";

export function Layout() {
  return (
    <>
      <TopBarProgressByLocation />
      <header className={styles.header}>
        <section className={styles.header__container}>
          <div className={styles.brand__container}>
            <h1 className={styles.person_name}>Angel Valero Parra</h1>
            <Link to="/">
              <h1 className={styles.app__brand}>DevDash_GitHub</h1>
            </Link>
          </div>

          <Link to="/config">
            <span>⚙️</span>
          </Link>
        </section>
      </header>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  );
}