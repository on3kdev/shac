import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import SvgFacebookBlack from "./icons/FacebookBlack";
import SvgGithubBlack from "./icons/GithubBlack";
import SvgInstagramBlack from "./icons/InstagramBlack";

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h3 className={styles.companyTitle}>Shac</h3>
          <p>
            We are a platform where people can share their accounts with others.
            The advantage of these accounts is that their privacy is protected
            and you also save time.
          </p>
        </div>
        <div className={styles.item}>
          <h4 className={styles.title}>Social Media</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a
                href="https://www.instagram.com/on3k.dev"
                className={styles.listLink}
                target="_blank"
              >
                <SvgInstagramBlack className={styles.icon} />
                Instagram
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://www.facebook.com/profile.php?id=100075349660325"
                className={styles.listLink}
                target="_blank"
              >
                <SvgFacebookBlack className={styles.icon} />
                Facebook
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://github.com/on3kdev"
                className={styles.listLink}
                target="_blank"
              >
                <SvgGithubBlack className={styles.icon} />
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h4 className={styles.title}>Links</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <NavLink to="/imprint" className={styles.listLink}>
                Imprint
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink to="/privacy" className={styles.listLink}>
                Privacy
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h4 className={styles.title}>Contacts</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}></li>
            <li className={styles.listItem}></li>
            <li className={styles.listItem}>
              <a href="tel:" className={styles.listLink}></a>
            </li>
            <li className={styles.listItem}>
              <a href="mailto:on3k.dev@gmail.com" className={styles.listLink}>
                on3k.dev@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>© 2023 ON3K. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
