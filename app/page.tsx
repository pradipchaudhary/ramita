import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Services from "@/components/Services ";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Services />
            <Offer />
            <Footer />
        </>
    );
}
