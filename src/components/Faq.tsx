import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "How do I get started?",
    answer: "Simply sign up for an account and follow our quick setup guide.",
  },
  {
    question: "What kind of analytics do you provide?",
    answer: "We provide comprehensive analytics including user behavior, performance metrics, and custom reports.",
  },
  {
    question: "How much does it cost?",
    answer: "We offer flexible pricing plans starting from $29/month.",
  },
  {
    question: "Can I export the data?",
    answer: "Yes, you can export data in various formats including CSV, PDF, and Excel.",
  },
]

export function Faq() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-6 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mb-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center">
          <Button variant="outline">View all FAQs</Button>
        </div>
      </div>
    </section>
  )
}
