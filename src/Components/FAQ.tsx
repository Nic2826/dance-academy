import { useState } from "react";
import { faqs } from "../data/faqs";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="FAQ">
      <h2 className="FAQ-title">Preguntas Frecuentes</h2>

      {faqs.map((faq, index) => (
        <div className="FAQ-item" key={index}>
          <div
            className="FAQ-question"
            onClick={() => toggleFAQ(index)}
          >
            <img
              className={`FAQ-arrow ${
                activeIndex === index ? "FAQ-arrow-open" : ""
              }`}
              src="/public/flechaFAQ.png"
              alt=""
            />
            <p className="FAQ-subtitle">{faq.question}</p>
          </div>

          <p
            className={`FAQ-description ${
              activeIndex === index ? "FAQ-description-visible" : ""
            }`}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}