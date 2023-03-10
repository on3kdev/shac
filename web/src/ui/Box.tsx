import { useNavigate } from "react-router-dom";
import { Glyph } from "../types";
import styles from "./Box.module.css";
import Icon from "./Icon";

interface Props {
  glyph: Glyph;
  label: string;
}

const Box = ({ glyph, label }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/search?q=${label.toLowerCase()}`)}
      className={styles.box}
    >
      <Icon glyph={glyph} className={styles.boxIcon} />
      <h3 className={styles.boxTitle}>{label}</h3>
    </button>
  );
};

export default Box;
