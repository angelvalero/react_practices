/* eslint-disable prettier/prettier */
import Check from "../../assets/svgs/check.svg?react";
import Error from "../../assets/svgs/error.svg?react";
import PullRequests from "../../assets/svgs/git-pull-request.svg?react";
import IssueOpened from "../../assets/svgs/issue-opened.svg?react";
import Lock from "../../assets/svgs/lock.svg?react";
import Forks from "../../assets/svgs/repo-forked.svg?react";
import Start from "../../assets/svgs/star.svg?react";
import Unlock from "../../assets/svgs/unlock.svg?react";
import Watchers from "../../assets/svgs/watchers.svg?react";
import { GitHubRepository } from "../../domain/GitHubRepository";
import styles from "./GitHubRepositoryWidget.module.scss";

const isoToReadableDate = (lastUpdateDate: Date): string => {
  const currentDate = new Date();
  const diffTime = currentDate.getTime() - lastUpdateDate.getTime();
  const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

  if (diffDays === 0) {
    return "today";
  }

  if (diffDays > 30) {
    return "more than a month ago";
  }

  return `${diffDays} days ago`;
};

export function GitHubRepositoryWidget({ repository }: { repository: GitHubRepository }) {
  return (
    <article className={styles.widget}>
      <header className={styles.widget__header}>
        <h2 className={styles.widget__title}>
          <a
            href={`/repository/${repository.id.organization}/${repository.id.name}`}
            target="_blank"
            title={`${repository.id.organization}/${repository.id.name}`}
            rel="noreferrer"
          >
            {repository.id.organization}/{repository.id.name}
          </a>
        </h2>
        {repository.private ? <Lock /> : <Unlock />}
      </header>
      <div className={styles.widget__body}>
        <div className={styles.widget__status}>
          <p>Last update {isoToReadableDate(repository.updatedAt)}</p>
          {repository.hasWorkflows && (
            <div>{repository.isLastWorkflowSuccess ? <Check /> : <Error />}</div>
          )}
        </div>
        <p className={styles.widget__description}>{repository.description}</p>
      </div>
      <footer className={styles.widget__footer}>
        <div className={styles.widget__stat}>
          <Start />
          <span>{repository.stars}</span>
        </div>
        <div className={styles.widget__stat}>
          <Watchers />
          <span>{repository.watchers}</span>
        </div>
        <div className={styles.widget__stat}>
          <Forks />
          <span>{repository.forks}</span>
        </div>
        <div className={styles.widget__stat}>
          <IssueOpened />
          <span>{repository.issues}</span>
        </div>
        <div className={styles.widget__stat}>
          <PullRequests />
          <span>{repository.pullRequests}</span>
        </div>
      </footer>
    </article>
  );
}
