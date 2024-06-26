import classNames from "classnames";
import styles from "./LoadingSpinner.module.css";

interface Props {
  size?: "small" | "default";
  scheme?: "light" | "dark";
}

export const LoadingSpinner = ({
  size = "default",
  scheme = "light",
}: Props) => (
  <div
    className={classNames(styles.loader, {
      [styles.small]: size === "small",
      [styles.dark]: scheme === "dark",
    })}
  ></div>
);
