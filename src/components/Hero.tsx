import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';


const companies = [
  { name: "Boltshift", logo: "/Boltshift.png" },
  { name: "Lightbox", logo: "/Lightbox.png" },
  { name: "FeatherDev", logo: "/Featherdev.png" },
  { name: "Spherule", logo: "/Spherule.png" },
  { name: "GlobalBank", logo: "/Globalbank.png" },
  { name: "Nietzsche", logo: "/Nietzsche.png" },
]
export function Hero() {
    return (
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-24">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-purple-100 text-purple-900">
            <span className="text-red-600 mr-1">New feature</span>
            <Link to="#" className="text-purple-900">
              Check out the team dashboard →
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
            Powerful, self-serve product and growth analytics to help you convert, engage,
            and retain more users. Trusted by over 4,000 startups.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg">
              Demo
            </Button>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Sign up
            </Button>
          </div>
        </div>
  
        <div className="mt-12">
            <img src="/image1.png" alt="hero" className="w-full" />
          

        </div>
  
        <div className="mt-24 text-center">
          <p className="text-sm text-gray-500 mb-8">Join 4,000+ companies already growing</p>
          <div className="flex flex-wrap justify-center gap-8">
            {companies.map((company) => (
              <img
                key={company.name}
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
  