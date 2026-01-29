import ArticleCards from "./ArticleCards";
import HeroSection from "./HeroSection";
import RegionsList from "./RegionsList";

const WildlifeHero = () => {
    return (
        <section className="relative w-full h-[100vh] overflow-hidden bg-black text-white">
            <HeroSection />
            <RegionsList />
            <ArticleCards />
        </section>
    );
};

export default WildlifeHero;
