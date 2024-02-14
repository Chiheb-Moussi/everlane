import TopHeader from "../../components/TopHeader/TopHeader.tsx";
import TopMenu from "../../components/TopMenu/TopMenu.tsx";
import HeroSection from "../../components/HeroSectionEc4/HeroSection.tsx";
import CategorySection from "../../components/CategorySection/CategorySection.tsx";
import EventsSection from "../../components/CreateEventSection/EventsSection.tsx";
import Cta from "../../components/CTASection/Cta.tsx";
import Cta from "../../components/CTASection/Cta.tsx";
import ProductFavourites from "../../components/ProductFavourites/ProductFavourites.tsx";
import Testimonials from "../../components/Testimonials/Testimonials.tsx";

const LandingPage = () => {
    return <>
        <TopHeader />
        <TopMenu />
        <HeroSection />
        <CategorySection />
        <EventsSection />
        <Cta/>
        <Cta />
        <ProductFavourites />
        <Testimonials />
    </>
}

export default LandingPage;