import { useTranslations } from "next-intl";
import Form from "../components/form/form";
import "./sponsorsContact.css";

const SponsorContact: React.FC = () => {
  const t = useTranslations("form");



  return (
    <div className="cont-form" id="contact">
      <Form to="newsletter"/>
      <div className="contact-text">
        <h4>{t("callToAction1")}</h4>
        <p>{t("callToAction2")}</p>
      </div>
    </div>
  );
};

export default SponsorContact;
