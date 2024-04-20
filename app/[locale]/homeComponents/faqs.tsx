"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { faqs } from "../data/faqs";
import { lora } from "../fonts/lora";
import { useTranslations } from "next-intl";
import "./faqs.css";

const Faqs: React.FC = () => {

  const t = useTranslations("home.faqs");

  const itemClasses = {
    base: "py-0 w-full bg-black",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };
  return (
    <div className="cont-accordion">
      <Accordion variant="splitted" selectionMode="multiple" className='accordion'>
        
        {faqs.map((faq, i) => (
          <AccordionItem className="accordion-item accordion" key={i} aria-label="Accordion 2" title={t(`question.${faq.question}`)}  >
            <p className={lora.className}>{t(`answer.${faq.answer}`)}</p>
            {faq.li &&
              <div className={lora.className}>
                <p className="text-black" >{t("answer.item1")}</p>
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
