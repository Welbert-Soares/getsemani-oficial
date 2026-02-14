import SplitSection from "@/app/components/SplitSection";
import VolunteerCarousel from "@/app/igreja/_components/ministries/VolunteerCarousel";
import MinistriesGrid from "@/app/igreja/_components/ministries/MinistriesGrid";
import { MINISTRIES_DATA } from "@/app/constants/ministries";
import { VOLUNTEER_CAROUSEL_DATA } from "@/app/constants/volunteer-carousel";
import { MINISTRIES_PAGE_DATA } from "@/app/constants/ministries-page";

const Ministries = () => {
  return (
    <div className="w-full">
      <div className="py-8" />

      <SplitSection {...MINISTRIES_PAGE_DATA.headerSection} />

      <VolunteerCarousel
        title={VOLUNTEER_CAROUSEL_DATA.title}
        slides={VOLUNTEER_CAROUSEL_DATA.slides}
      />

      <MinistriesGrid ministries={MINISTRIES_DATA} />

      <SplitSection {...MINISTRIES_PAGE_DATA.volunteerSection} />
    </div>
  );
};

export default Ministries;
