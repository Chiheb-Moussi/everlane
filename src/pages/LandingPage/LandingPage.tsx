import TopHeader from "../../components/TopHeader/TopHeader.tsx";
import TopMenu from "../../components/TopMenu/TopMenu.tsx";
import HeroSection from "../../components/HeroSectionEc4/HeroSection.tsx";
import CategorySection from "../../components/CategorySection/CategorySection.tsx";
import EventsSection from "../../components/CreateEventSection/EventsSection.tsx";

const LandingPage = () => {
    return <>
        <TopHeader />
        <TopMenu />
        <HeroSection />
        <CategorySection />
        <EventsSection />
    </>
}

export default LandingPage;