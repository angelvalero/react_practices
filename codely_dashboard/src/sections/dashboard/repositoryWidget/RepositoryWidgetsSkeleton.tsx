import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import PullRequests from "../../../assets/svgs/git-pull-request.svg?react";
import IssueOpened from "../../../assets/svgs/issue-opened.svg?react";
import Forks from "../../../assets/svgs/repo-forked.svg?react";
import Start from "../../../assets/svgs/star.svg?react";
import Watchers from "../../../assets/svgs/watchers.svg?react";
import styles from "./RepositoryWidget.module.scss";

function RepositoryWidgetSkeleton() {
  return (
    <article className={styles.widget}>
      <header
        className={styles.widget__header}
        style={{ display: "block", paddingTop: "1.15rem", paddingBottom: "1.15rem" }}
      >
        <Skeleton baseColor="#3CFF64" highlightColor="#D1FFDA" width="70%" />
      </header>
      <div className={styles.widget__body}>
        <p style={{ marginTop: "1rem", marginBottom: "2rem" }}>
          Last update <Skeleton inline={true} width="20%" />
        </p>
        <p className={styles.widget__description} style={{ paddingBottom: "0.65rem" }}>
          <Skeleton height={45} />
        </p>
      </div>
      <footer className={styles.widget__footer}>
        <div className={styles.widget__stat}>
          <Start />
          <span>
            <Skeleton width={35} />
          </span>
        </div>
        <div className={styles.widget__stat}>
          <Watchers />
          <span>
            <Skeleton width={25} />
          </span>
        </div>
        <div className={styles.widget__stat}>
          <Forks />
          <span>
            <Skeleton width={15} />
          </span>
        </div>
        <div className={styles.widget__stat}>
          <IssueOpened />
          <span>
            <Skeleton width={15} />
          </span>
        </div>
        <div className={styles.widget__stat}>
          <PullRequests />
          <span>
            <Skeleton width={15} />
          </span>
        </div>
      </footer>
    </article>
  );
}

export function RepositoryWidgetsSkeleton({ numberOfWidgets }: { numberOfWidgets: number }) {
  return (
    <SkeletonTheme baseColor="#1A2233" highlightColor="#535966">
      {[...new Array(numberOfWidgets)].map((_, i) => (
        <RepositoryWidgetSkeleton key={i} />
      ))}
    </SkeletonTheme>
  );
}
