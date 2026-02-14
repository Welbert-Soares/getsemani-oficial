import Link from "next/link";
import { CiPlay1 } from "react-icons/ci";

type ProgrammingBarSectionProps = {
  dayLabel: string;
  eventName: string;
  eventTime: string;
  onlineLink: string;
  onlineLinkText: string;
};

const ProgrammingBarSection = ({
  dayLabel,
  eventName,
  eventTime,
  onlineLink,
  onlineLinkText,
}: ProgrammingBarSectionProps) => {
  return (
    <section className="w-full bg-[#142042] py-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 md:gap-6 text-white text-xs md:text-base font-medium">
        <span>{dayLabel}</span>
        <span className="border-l border-white h-4 mx-1 md:mx-2" />
        <span>{eventName}</span>
        <span className="border-l border-white h-4 mx-1 md:mx-2" />
        <span>{eventTime}</span>
        <span className="border-l border-white h-4 mx-1 md:mx-2" />
        <Link
          href={onlineLink}
          className="flex items-center gap-1 cursor-pointer hover:underline"
        >
          {onlineLinkText}
          <CiPlay1 className="h-4 w-4 ml-1 text-white stroke-1" />
        </Link>
      </div>
    </section>
  );
};

export { ProgrammingBarSection };
