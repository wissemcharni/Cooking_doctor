import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does tiramisu last?",
      answer: "Our fresh tiramisu is best enjoyed within 3-4 days when stored in the refrigerator. We recommend consuming it within 48 hours for the optimal taste experience.",
    },
    {
      question: "Do you use raw eggs?",
      answer: "Yes, our traditional recipe includes pasteurized raw eggs for authentic flavor and texture. We use only the highest quality, farm-fresh eggs from trusted suppliers.",
    },
    {
      question: "Do you deliver outside the city?",
      answer: "We currently deliver within a 25km radius of the city center. For special occasions or larger orders, we may consider extended delivery areas. Please contact us to discuss your specific needs.",
    },
    {
      question: "Can I customize flavors for special events?",
      answer: "Absolutely! We love creating custom flavors for weddings, birthdays, and corporate events. Contact us at least 48 hours in advance to discuss your special requirements.",
    },
    {
      question: "What's included in the Party Box?",
      answer: "Our Party Box serves 8-10 people and comes with disposable spoons, napkins, and serving instructions. Perfect for gatherings, office treats, or family celebrations.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-espresso">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-espresso/70">
              Everything you need to know about our tiramisu
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-warmWhite overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left font-semibold text-espresso hover:bg-gold/10 transition-colors duration-300 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-espresso/80">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
