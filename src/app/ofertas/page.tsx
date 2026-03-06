import OfferHeroSection from "./_components/OfferHeroSection";
import { OFFERS_PAGE_DATA } from "@/app/constants/offers-page";

const Offer = () => {
  return (
    <div className="w-full">
      <div className="py-8" />
      <OfferHeroSection {...OFFERS_PAGE_DATA.heroSection} />
    </div>
  );
};

export default Offer;
