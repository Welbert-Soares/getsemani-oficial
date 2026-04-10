import AgendaCarousel from "./_components/AgendaCarousel";
import PopularEventsSection from "./_components/PopularEventsSection";
import {
  AGENDA_CAROUSEL_SLIDES,
  AGENDA_POPULAR_EVENTS,
} from "@/app/constants/agenda-page";

const Agenda = () => {
  return (
    <div className="w-full">
      <div className="py-8" />
      <AgendaCarousel slides={AGENDA_CAROUSEL_SLIDES} />
      <PopularEventsSection
        title="Eventos Populares"
        href="/agenda"
        events={AGENDA_POPULAR_EVENTS}
      />
    </div>
  );
};

export default Agenda;
