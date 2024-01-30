import Categories from "@/components/Homepage/Categories/Categories";
import CTA from "@/components/Homepage/Cta/CTA";
import Features from "@/components/Homepage/Features/Features";
import Hero from "@/components/Homepage/Hero/Hero";
import Offers from "@/components/Homepage/Offers/Offers";
import Services from "@/components/Homepage/Services/Services";
import Testimonial from "@/components/Homepage/Testimonial/Testimonial";


export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Offers />
      <Features />
      <Services />
      <Testimonial />
      <CTA/>
    </>
  )
}
