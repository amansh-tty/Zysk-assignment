import { Card, CardContent } from "@/components/ui/card"
import { useState } from 'react'
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "We've been using this tool to kick-start every new project and can't imagine working without it.",
    name: "Sarah Johnson",
    position: "Product Manager at TechCorp",
  },
  {
    quote: "This tool has streamlined our workflows and significantly improved our productivity.",
    name: "David Brown",
    position: "CEO at InnovateHub",
  },
  {
    quote: "Our team loves the intuitive design and robust features offered by this product.",
    name: "Emily White",
    position: "CTO at BuildX",
  },
]

export function Testimonial() {
  const [index, setIndex] = useState(0)

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="w-full px-4 md:px-16 py-6 md:py-12 flex justify-center">
      <Card className="text-black w-full">
        <CardContent className="p-6 md:p-12 text-center space-y-6">
          <img className="mx-auto mb-6" src="/Lightbox.png" alt="Logo" />

          <blockquote className="text-2xl font-medium">
            "{testimonials[index].quote}"
          </blockquote>

          <div className="flex flex-col items-center space-y-3">
            <img
              className="w-16 h-16 rounded-full object-cover mx-auto"
              src="/profile.png"
              alt="Profile"
            />
            <p className="font-semibold text-black">{testimonials[index].name}</p>
            <p className="text-sm text-gray-400">{testimonials[index].position}</p>
          </div>

          <div className="flex justify-center text-black gap-4 mt-6">
            <Button variant="outline" onClick={prevTestimonial}>
              Previous
            </Button>
            <Button variant="outline" onClick={nextTestimonial}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
