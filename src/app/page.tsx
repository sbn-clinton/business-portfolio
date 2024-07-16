import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import CountUpStats from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import UserGrid from "@/components/UserGrid";

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Navbar />
      <Homepage />
      <About />
      <Services />
      <CountUpStats />
      <Testimonials />
      <UserGrid />
      <Contact />
      <Footer />
    </main>
  );
}
