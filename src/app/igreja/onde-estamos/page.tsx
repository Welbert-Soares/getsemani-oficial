import { MapSection } from "../_components/MapSection";
import { SocialSection } from "../_components/SocialSection";
import { SOCIAL_SECTION_DATA } from "@/app/constants/social-section";

const Address = () => {
  return (
    <div className="w-full">
      <div className="py-8" />

      <MapSection />

      <SocialSection {...SOCIAL_SECTION_DATA} />
    </div>
  );
};

export default Address;
