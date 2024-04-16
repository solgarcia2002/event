"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { faqs } from "../data/faqs";
import { lora } from "../fonts/lora";
import { useTranslations } from "next-intl";
import "./faqs.css";

const Faqs: React.FC = () => {

  const t = useTranslations("home.faqs");
  return (
    <div className="cont-accordion">
      <Accordion variant="splitted" selectionMode="multiple" >
        
        {faqs.map((faq, i) => (
          <AccordionItem className="accordion-item" key={i} aria-label="Accordion 2" title={t(`question.${faq.question}`)}  >
            <p className={lora.className}>{t(`answer.${faq.answer}`)}</p>
            {faq.li &&
              <div className={lora.className}>
                <p>{t("answer.item1")}</p>
                <p>{t("answer.item2")}</p>
                <p>{t("answer.item3")}</p>
              </div>
            }
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
