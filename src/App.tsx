import { Faq } from "./components/Faq";
import { Features } from "./components/Feature";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { LatestPosts } from "./components/Posts";
import Price from "./components/Price";
import { Testimonial } from "./components/Testimonial";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Faq />
      <LatestPosts /> 
      <Price />
      <Footer />
    </main>
  )
}

