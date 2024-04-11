"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { faqs } from "../data/faqs";
import { lora } from "../fonts/lora";
import "./faqs.css";
import { useTranslations } from "next-intl";

const Faqs: React.FC = () => {

  const t = useTranslations("home.faqs");
  return (
    <div className="cont-accordion">
      <Accordion variant="splitted" >
        {faqs.map((faq, i) => (
          <AccordionItem className="accordion-item" key={i} aria-label="Accordion 1" title={t(`question.${faq.question}`)}  >
            <p className={lora.className}>{t(`answer.${faq.answer}`)}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
