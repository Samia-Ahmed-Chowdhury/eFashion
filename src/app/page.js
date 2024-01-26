import Categories from "@/components/Homepage/Categories/Categories";
import Features from "@/components/Homepage/Features/Features";
import Hero from "@/components/Homepage/Hero/Hero";
import Offers from "@/components/Homepage/Offers/Offers";
import Services from "@/components/Homepage/Services/Services";


export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Offers/>
      <Features/>
      <Services/>
    </>
  )
}
