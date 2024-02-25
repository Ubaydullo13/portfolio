import "./header.css";
import LanguageSwitcher from "../switcher";
import { useTranslation } from "react-i18next";
function Header() {
  const { t } = useTranslation();
  return (
    <header className="header">
      <ul className="menu">
        <li>
          <a href="">{t("about")}</a>
        </li>
        <li>
          <a href="">{t("skills")}</a>
        </li>
        <li>
          <a href="">{t("project")}</a>
        </li>
        <li>
          <a href="">{t("contact")}</a>
        </li>
      </ul>
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
