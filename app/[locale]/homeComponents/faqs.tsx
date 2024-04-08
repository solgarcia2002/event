"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { faqs } from "../data/faqs";

import "./faqs.css";

const Faqs: React.FC = () => {
  return (
    <div className="cont-accordion">
      <Accordion variant="splitted">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} aria-label="Accordion 1" title={faq.question}>
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
