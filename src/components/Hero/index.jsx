import "./hero.css";
import Charles from "../../assets/images/dev.png";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="title">
         <span>{t("greeting")}</span>  <span>&#128075;</span>,<br />
          <span>{t("name")},</span>
          <br />
          <span>{t("job")}</span>
          </h1>
        <p className="description">
          {t("desc")}
        </p>
        <button className="hireMe">{t("hireMe")}</button>
        <button className="projects">{t("seeProjects")}</button>
      </div>
      <div className="hero-image">
        <img src={Charles} alt="Charles"/>
      </div>
    </div>
  );
}

export default Hero;
